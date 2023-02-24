import Geolocation from '@react-native-community/geolocation'
import { useEffect, useRef, useState } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'
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
    const [loading, setLoading] = useState<boolean>(true)

    const getWeatherDetailsByState = async () => {
        try {
            const res = await fetchWeatherDetails(latitude, longitude)
            setWeatherDetails(res)
        } catch (error) {}
    }
    const getBackgorundImgyState = async state => {
        try {
            const res = await fetchImageByState(state)
            setStateImg(res?.urls?.full)
        } catch (error) {
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
        loading
    }
}

export const readCurrentLocation = callOnSuccess => {
    Geolocation.getCurrentPosition(
        position => {
            callOnSuccess(position)
        },
        err => {
            // logger.log(err)
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
}

export const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const permission = await PermissionsAndroid.request(
                'android.permission.ACCESS_FINE_LOCATION'
            )

            if (permission === 'granted') {
                return true
            }
            return false
        } catch (err) {
            return false
        }
    }
}
