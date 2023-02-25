import Geolocation from '@react-native-community/geolocation'
import { useEffect, useRef, useState } from 'react'
import { readCurrentLocation, requestLocationPermission } from '../../utils/location'
import { fetchImageByState, fetchWeatherDetails } from './apis'

export const useCoordinates = () => {
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)

    const askLocationPermission = async () => {
        const permission = await requestLocationPermission()
        if (permission) {
            readCurrentLocation(position => {
                setLat(position.coords?.latitude)
                setLon(position.coords?.longitude)
            })
        }
    }

    useEffect(() => {
        askLocationPermission()
    }, [])

    return { latitude: lat, longitude: lon }
}

export const useWeather = () => {
    const { latitude, longitude } = useCoordinates()
    const [weatherDetails, setWeatherDetails] = useState<Record<string, any>>({})
    const [stateImg, setStateImg] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)

    // asking geo permission would be the initial step thats why initial val is true
    const [loading, setLoading] = useState<boolean>(true)

    const getWeatherDetailsByState = async (): Promise<void> => {
        try {
            const res = await fetchWeatherDetails(latitude, longitude)
            setWeatherDetails(res)
        } catch (error) {
            setIsError(error?.message)
        }
    }
    const getBackgorundImgyState = async (state: string): Promise<void> => {
        try {
            const res = await fetchImageByState(state)
            setStateImg(res?.urls?.full)
        } catch (error) {
            setIsError(error?.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (latitude && longitude) {
            getWeatherDetailsByState()
        }
    }, [latitude, longitude])

    useEffect(() => {
        if (Object.keys(weatherDetails).length) {
            getBackgorundImgyState(weatherDetails?.name)
        }
    }, [weatherDetails])

    return {
        latitude,
        longitude,
        weatherDetails,
        stateImg,
        loading,
        isError
    }
}
