import { apiUrls } from '../../api/apis'
import { apiClient, unsplashApiClient } from '../../api/instance'

export const fetchWeatherDetails = async <T extends Record<string, any>>(lat, long): Promise<T> => {
    try {
        const res = await apiClient.get(apiUrls.weatherInfo('', lat, long))
        return res.data
    } catch (error) {
        console.log(error)
        throw new Error('Unable to fetch weather details')
    }
}

export const fetchImageByState = async <T extends Record<string, any>>(
    state: string
): Promise<T> => {
    try {
        const res = await unsplashApiClient.get(apiUrls.searchImage(state))
        return res?.data?.results?.[0]
    } catch (error) {
        throw new Error('Unable to fetch Image')
    }
}
