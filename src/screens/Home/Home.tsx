/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Animated,
    Image,
    LayoutAnimation
} from 'react-native'

import { fetchImageByState, fetchWeatherDetails } from './apis'
import { useWeather } from './hooks'
import moment from 'moment'
import Loader from '../../components/loader'
import styles from './styles'

const Home = () => {
    const { loading, weatherDetails } = useWeather()

    useEffect(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    }, [loading])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Animated.View>
                    <Animated.ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: 'transparent' }}>
                        <ImageBackground
                            resizeMode="cover"
                            source={{
                                uri: 'https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MTQyNDV8MHwxfHNlYXJjaHwxfHxNb3VudGFpbiUyMFZpZXd8ZW58MHx8fHwxNjc3MTYyNjI4&ixlib=rb-4.0.3&q=80'
                            }}
                            style={{
                                flex: 1
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    paddingBottom: 100
                                }}>
                                <View style={styles.content}>
                                    <Text style={styles.heading}>
                                        {weatherDetails?.name}{' '}
                                        <Text
                                            style={{
                                                ...styles.heading2,
                                                fontSize: 12,
                                                fontWeight: '600'
                                            }}>
                                            {weatherDetails?.sys?.country}
                                        </Text>
                                    </Text>
                                    <Text style={styles.temparature}>
                                        {weatherDetails?.main?.temp}°C
                                    </Text>
                                    <View style={styles.row}>
                                        <Text style={styles.range}>
                                            H: {weatherDetails?.main?.temp_max}
                                        </Text>
                                        <Text style={styles.range}>
                                            {'    '}L: {weatherDetails?.main?.temp_min}
                                        </Text>
                                    </View>
                                    <View style={styles.detailContiner}>
                                        <View style={[styles.detailBox]}>
                                            <View style={styles.row2}>
                                                <Image
                                                    source={{
                                                        uri: 'https://img.icons8.com/windows/64/ffffff/temperature-low.png'
                                                    }}
                                                    style={{ height: 30, width: 30 }}
                                                    resizeMode="contain"
                                                />
                                                <Text style={styles.tabHeading}>FEELS LIKE</Text>
                                            </View>
                                            <Text style={[styles.heading2, { fontSize: 30 }]}>
                                                {weatherDetails?.main?.feels_like}°
                                            </Text>
                                            <Text style={styles.bottomText}>
                                                {weatherDetails?.main?.temp > 15
                                                    ? 'wind is making it hotter'
                                                    : 'wind is making it cooler'}
                                            </Text>
                                        </View>
                                        <View style={[styles.detailBox]}>
                                            <View style={styles.row2}>
                                                <Image
                                                    source={{
                                                        uri: 'https://img.icons8.com/external-royyan-wijaya-basic-outline-royyan-wijaya/48/ffffff/external-sunrise-weather-royyan-wijaya-basic-outline-royyan-wijaya.png'
                                                    }}
                                                    style={{ height: 30, width: 30 }}
                                                    resizeMode="contain"
                                                />
                                                <Text style={styles.tabHeading}>SUNRISE</Text>
                                            </View>
                                            <Text style={[styles.heading2, { fontSize: 30 }]}>
                                                {moment(weatherDetails?.sys?.sunrise)
                                                    .subtract(5, 'hours')
                                                    .format('hh:mm A')}
                                            </Text>
                                            <Text style={styles.bottomText}>
                                                sunset is{' '}
                                                {moment(weatherDetails?.sys?.sunset).format(
                                                    'hh:mm A'
                                                )}
                                            </Text>
                                        </View>

                                        <View style={[styles.detailBox]}>
                                            <View style={styles.row2}>
                                                <Image
                                                    source={{
                                                        uri: 'https://img.icons8.com/dotty/80/ffffff/barometer-gauge.png'
                                                    }}
                                                    style={{ height: 30, width: 30 }}
                                                    resizeMode="contain"
                                                />
                                                <Text style={styles.tabHeading}>PRESSURE</Text>
                                            </View>
                                            <Text style={[styles.heading2, { fontSize: 30 }]}>
                                                {weatherDetails?.main?.pressure}
                                            </Text>
                                            <Text style={styles.bottomText}>
                                                wind is making it color
                                            </Text>
                                        </View>
                                        <View style={[styles.detailBox]}>
                                            <View style={styles.row2}>
                                                <Image
                                                    source={{
                                                        uri: 'https://img.icons8.com/ios-glyphs/30/ffffff/moisture.png'
                                                    }}
                                                    style={{ height: 30, width: 35 }}
                                                    resizeMode="contain"
                                                />
                                                <Text style={styles.tabHeading}>HUMIDITY</Text>
                                            </View>
                                            <Text style={[styles.heading2, { fontSize: 30 }]}>
                                                {weatherDetails?.main?.humidity}%
                                            </Text>
                                            <Text style={styles.bottomText}>
                                                wind is making it color
                                            </Text>
                                        </View>
                                        <View style={[styles.detailBox]}>
                                            <View style={styles.row2}>
                                                <Image
                                                    source={{
                                                        uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-wind-ocean-tanah-basah-glyph-tanah-basah.png'
                                                    }}
                                                    style={{ height: 30, width: 30 }}
                                                    resizeMode="contain"
                                                />
                                                <Text style={styles.tabHeading}>WIND</Text>
                                            </View>
                                            <Text style={[styles.heading2, { fontSize: 30 }]}>
                                                {weatherDetails?.wind?.speed} kph
                                            </Text>
                                            <Text style={styles.bottomText}>
                                                wind is making it color
                                            </Text>
                                        </View>
                                        <View style={[styles.detailBox]}>
                                            <View style={styles.row2}>
                                                <Image
                                                    source={{
                                                        uri: 'https://img.icons8.com/ios/50/ffffff/visible--v1.png'
                                                    }}
                                                    style={{ height: 30, width: 30 }}
                                                    resizeMode="contain"
                                                />
                                                <Text style={styles.tabHeading}>VISIBILITY</Text>
                                            </View>
                                            <Text style={[styles.heading2, { fontSize: 30 }]}>
                                                {weatherDetails?.visibility / 100} km
                                            </Text>
                                            <Text style={[styles.bottomText]}>
                                                {weatherDetails?.visibility / 100 > 10
                                                    ? 'Its perfectly clear \nright now'
                                                    : 'Its foggy outside,\n drive safer'}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </Animated.ScrollView>
                </Animated.View>
            )}
        </>
    )
}

export default Home
