import React, { Component } from 'react';
import { 
    View, 
    StatusBar,
    Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('./../../imgs/logo.png');
const menuCliente = require('./../../imgs/menu_cliente.png');
const menuContato = require('./../../imgs/menu_contato.png');
const menuEmpresa = require('./../../imgs/menu_empresa.png');
const menuServico = require('./../../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    hidden
                    backgroundColor='#CCC' 
                />

                <BarraNavegacao />  

                <Image source={logo} />
                <Image source={menuCliente} />
                <Image source={menuContato} />
                <Image source={menuEmpresa} />
                <Image source={menuServico} />

            </View>
        );
    }
}

