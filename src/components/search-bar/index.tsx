import React from 'react'
import { Animated, Dimensions, StyleSheet, TextInput } from 'react-native'

const SearchComponent = props => {
    const { clampedScroll } = props
    const searchBarTranslate = clampedScroll.interpolate({
        inputRange: [0, 50],
        outputRange: [0, -250],
        extrapolate: 'clamp'
    })
    const searchBarOpacity = clampedScroll.interpolate({
        inputRange: [0, 10],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [
                        {
                            translateY: searchBarTranslate
                        }
                    ],
                    opacity: searchBarOpacity
                }
            ]}>
            <TextInput
                placeholder="Search"
                style={styles.formField}
                placeholderTextColor={'#fff'}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        width: Dimensions.get('window').width - 40,
        left: 20,
        zIndex: 99,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'white'
    },
    formField: {
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        color: '#fff',
        fontWeight: '500'
    }
})

export default SearchComponent
