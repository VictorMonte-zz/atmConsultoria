import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StatusBar, 
    StyleSheet,
    Image
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FFF', flex: 1 }}>

                <StatusBar
                    hidden
                    backgroundColor='#EC7148' 
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />  

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>
                
                <View>
                    <Text style={styles.txtEmpresa}>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Etiam sollicitudin leo quis leo vestibulum, vitae iaculis 
                        velit venenatis. Maecenas in aliquam neque.
                    </Text>
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
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtEmpresa: {
        fontSize: 17,
        margin: 20
    }
});
