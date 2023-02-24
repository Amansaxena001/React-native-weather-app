import React from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'

const Loader: React.FC = () => {
    return (
        <View>
            <FastImage
                source={{
                    uri: 'https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif'
                }}
                style={{ height: '100%', width: '100%' }}
            />
        </View>
    )
}

export default Loader
