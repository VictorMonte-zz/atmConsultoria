import React, { Component } from 'react';
import { 
    View, 
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhesContato = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View>
                
                <StatusBar 
                    backgroundColor='#CCC'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} />  

                <View style={styles.cabecalho}>
                    <Image source={detalhesContato} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalheContatos}>
                    <Text style={styles.txtContatos}>TEL: (11) 1234-1234 </Text>
                    <Text style={styles.txtContatos}>CEL: (11) 9876-5432</Text>
                    <Text style={styles.txtContatos}>E-MAIL: contato@atmconsultoria.com</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        marginTop: 20,
        padding: 20
    },
    txtContatos: {
        fontSize: 18
    }
});
