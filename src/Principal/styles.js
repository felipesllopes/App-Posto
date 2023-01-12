import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    image: {
        marginTop: 80,
        marginBottom: 30,
        alignSelf: 'center',
    },
    textMain: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 60,
        textAlign: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginLeft: 12,
    },
    textInput: {
        backgroundColor: 'white',
        margin: 5,
        marginHorizontal: 12,
        borderRadius: 5,
        marginBottom: 18,
    },
    button: {
        backgroundColor: '#FF5555',
        marginHorizontal: 12,
        borderRadius: 5,
        paddingVertical: 10,
        marginTop: 8,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    entrar: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    }
})

export default styles;