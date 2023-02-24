import axios from 'axios'
import { apiUrls } from '../../api/apis'
import { apiClient, unsplashApiClient } from '../../api/instance'

export const fetchWeatherDetails = async (lat, long) => {
    try {
        const res = await apiClient.get(apiUrls.weatherInfo('', lat, long))
        return res.data
    } catch (error) {
        console.log(error)
        throw new Error('Unable to fetch weather details')
    }
}

export const fetchImageByState = async state => {
    try {
        const res = await unsplashApiClient.get(apiUrls.searchImage(state))
        return res?.data?.results?.[0]
    } catch (error) {
        throw new Error('Unable to fetch Image')
    }
}
