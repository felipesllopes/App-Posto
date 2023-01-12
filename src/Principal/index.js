import React, { Component } from "react";
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import Entrar from "./Secundaria/Entrar";
import styles from "./styles";

export default class Principal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setAlcool: '',
            setGasolina: '',
            modalVisible: false,
        }

        this.calcular = this.calcular.bind(this);
        this.resultado = this.resultado.bind(this);
        this.sair = this.sair.bind(this);
    }

    calcular() {
        if (this.state.setAlcool != '' && this.state.setGasolina != '') {
            this.setState({ modalVisible: true });
        } else {
            return;
        }
    }

    resultado(alcool, gasolina) {
        let resultado = alcool / gasolina;

        if (resultado < 0.7) {
            return <Text>Compensa usar álcool!</Text>
        } else if (resultado > 0.7) {
            return <Text>Compensa usar gasolina!</Text>
        }
    }

    sair(visible) {
        this.setState({ modalVisible: visible })
        this.setState({ setAlcool: '' })
        this.setState({ setGasolina: '' })
    }

    render() {
        return (

            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={require('../img/logo.png')}
                />

                <Text style={styles.textMain}>Qual melhor opção?</Text>

                <Text style={styles.text}>Álcool (preço por litro)</Text>
                <TextInput

                    style={styles.textInput}
                    keyboardType="numeric"
                    value={this.state.setAlcool}
                    onChangeText={(text) => this.setState({ setAlcool: text })}
                    placeholder="Ex. 3.40"
                />

                <Text style={styles.text}>Gasolina (preço por litro)</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    value={this.state.setGasolina}
                    onChangeText={(text) => this.setState({ setGasolina: text })}
                    placeholder="Ex. 4.94"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.calcular}
                >
                    <Text style={styles.textButton}>
                        {this.state.setAlcool != '' && this.state.setGasolina != '' ? 'Calcular'
                            : 'Preencha os campos'
                        }
                    </Text>
                </TouchableOpacity>

                <Modal animationType="fade" visible={this.state.modalVisible} >
                    <View style={styles.entrar}>
                        <Entrar
                            resultAlcool={this.state.setAlcool} resultGasolina={this.state.setGasolina}
                            resultScreen={this.resultado(this.state.setAlcool, this.state.setGasolina)}
                            fechar={() => this.sair(false)} />
                    </View>
                </Modal>

            </View>

        )
    }
}