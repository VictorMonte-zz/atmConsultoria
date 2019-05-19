import React, { Component } from 'react';
import { 
    AppRegistry, 
    StatusBar, 
    View 
} from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao';

export default class atmConsultoria extends Component {
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

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
