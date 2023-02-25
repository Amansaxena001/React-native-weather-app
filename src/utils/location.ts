import Geolocation, { GeolocationOptions } from '@react-native-community/geolocation'
import { PermissionsAndroid, Platform } from 'react-native'

export const readCurrentLocation = (callOnSuccess): void => {
    Geolocation.getCurrentPosition(
        position => {
            callOnSuccess(position)
        },
        err => {},
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 } as GeolocationOptions
    )
}

export const requestLocationPermission = async (): Promise<boolean> => {
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
    return false
}
