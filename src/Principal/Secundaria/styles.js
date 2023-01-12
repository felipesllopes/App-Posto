import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        margin: 30,
    },
    image: {
        marginTop: 80,
        marginBottom: 30,
        alignSelf: 'center',
    },
    result: {
        color: '#00FF00',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    textPreco: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    button: {
        borderColor: 'red',
        borderWidth: 1,
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 40,
    },
    textButton: {
        fontSize: 21,
        color: 'red',
        fontWeight: 'bold',
        marginVertical: 5,
    },
})

export default styles;