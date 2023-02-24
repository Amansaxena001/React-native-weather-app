import axios, { AxiosInterceptorOptions, AxiosProxyConfig } from 'axios'

export const BASE_URL = 'https://api.openweathermap.org'
export const APP_ID = '57e112848af9325fdb5fa60e1888fbae'
export const IMG_KEY = '4LgdQAOaZ4oWAWh2cvvDg0Q1_5HYAkLY_1q2YQy9v2U'
export const IMG_SECRET = 'N3Xyc4y9mZeFZW8t-ALbhN7leU9cd5uGWVgOXAf0rIs'
export const UNSPLASH_BASE_URL = 'https://api.unsplash.com'

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
})

export const unsplashApiClient = axios.create({
    baseURL: UNSPLASH_BASE_URL,
    timeout: 1000
})

apiClient.interceptors.request.use(config => {
    const attachApiKeyToUrl = `${config.url}&APPID=${APP_ID}&units=metric`
    config.url = attachApiKeyToUrl
    return config
})
