import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#121212'
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4caf50',
        marginBottom: 20,
        textAlign: 'center'
    },
    progressContainer: {
        width: '80%',
        backgroundColor: '#222',
        height: 30,
        borderRadius: 15,
        overflow: 'hidden'
    },

    progressBar: {
        backgroundColor: '#4caf50',
        height: '100%',
        borderRadius: 15
    },

    image: {
        width: 150,
        height: 190,
        marginTop: 20,
        alignSelf: 'center'
    },

    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default styles;
