import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class Entrar extends Component {
    render(props) {
        return (

            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={require('../../img/gas.png')}
                />

                <Text style={styles.result}>
                    {this.props.resultScreen}
                </Text>

                <Text style={styles.text}>Com os preços:</Text>
                <Text style={styles.textPreco}>Álcool: R${this.props.resultAlcool}</Text>
                <Text style={styles.textPreco}>Gasolina: R${this.props.resultGasolina}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.fechar}>
                    <Text style={styles.textButton}>Calcular novamente</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

