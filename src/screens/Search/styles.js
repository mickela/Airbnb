import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    textInput: {
        fontSize: 20,
        marginBottom: 5
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: .3,
        borderColor: 'lightgrey'
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 5,
        borderRadius: 10,
        marginRight: 10,
    },
    locationText: {
        fontSize: 19
    }
});

export default styles;