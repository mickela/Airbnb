import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 999,
        width: Dimensions.get('screen').width - 40
    },
    searchButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginLeft: 25,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;