import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    hidden
                    backgroundColor='#CCC' 
                />

                <BarraNavegacao />  
            </View>
        );
    }
}

