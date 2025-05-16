import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#613e3e',
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fcfcfc',
        marginBottom: 20,
        textAlign: 'center',
        position: "relative",
        marginTop: -200,
    },
    buttonSimulacao: {
        marginVertical: 10, 
        width: '50%',
        alignSelf: 'center',
        position: "relative",
        marginTop: 160,
        right: 90,
        borderRadius: 10,
        overflow: 'hidden',

    },
    buttonMapa: {
        marginVertical: 10, 
        width: '30%',
        alignSelf: 'center',
        position: "relative",
        marginTop: 140,
        right: 127,
        borderRadius: 10,
        overflow: 'hidden',
        color: '#fcfcfc'
    },
});

export default styles;
