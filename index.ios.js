import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao';

export default class atmConsultoria extends Component {
    render() {
        return (<BarraNavegacao />);
    }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
