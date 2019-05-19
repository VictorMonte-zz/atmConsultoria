import React, { Component } from 'react';
import { 
    AppRegistry
} from 'react-native';

import CenaClientes from './src/components/CenaClientes';


export default class atmConsultoria extends Component {
    render() {
        return (
            <CenaClientes />
        );
    }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
