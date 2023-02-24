import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailBox: {
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginTop: 30,
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 180,
        height: 175
    },
    detailContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    appHeader: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 20
    },
    topInfoWrapper: {
        flex: 1,
        marginTop: 160,
        justifyContent: 'space-between'
    },
    city: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold'
    },
    time: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    temparature: {
        color: '#fff',
        fontSize: 85,
        fontWeight: '300',
        alignSelf: 'center'
    },
    weatherType: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 34,
        marginLeft: 10
    },
    bottomInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    infoText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold'
    },
    infoBar: {
        width: 45,
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    indicatorWrapper: {
        position: 'absolute',
        top: 140,
        left: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalDot: {
        height: 5,
        width: 5,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: '#fff'
    },
    content: {
        paddingHorizontal: 20,
        marginVertical: '10%'
    },
    heading: {
        fontSize: 30,
        color: '#fff',
        alignSelf: 'center'
    },
    heading2: {
        fontSize: 30,
        color: '#fff',
        marginVertical: 8
    },
    range: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600'
    },
    tabHeading: {
        color: '#fff',
        fontWeight: '600',
        opacity: 0.7,
        marginLeft: 6
    },

    bottomText: {
        color: '#fff',
        fontWeight: '600',
        opacity: 0.7,
        marginTop: 22,
        lineHeight: 20
    }
})

export default styles
