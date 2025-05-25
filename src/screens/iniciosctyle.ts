import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#c3d6d6',
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center',
        position: "absolute",
        marginTop: -600,
    },
    buttonSimulacao: {
        marginVertical: 10, 
        width: '55%',
        alignSelf: 'center',
        position: "relative",
        marginTop: 500,
        right: 0,
        borderRadius: 50,
        overflow: 'hidden',

    },
    buttonMapa: {
        marginVertical: 10, 
        width: '55%',
        alignSelf: 'center',
        position: "relative",
        marginTop: 30,
        right: 0,
        borderRadius: 50,
        overflow: 'hidden',
        color: '#fcfcfc'
    },
    logo:{
    width:490,
    height:290,
    position:"absolute",
    marginBottom:60

    },
});

export default styles;
