import React, { Component } from 'react';
import { 
    AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';

export default class atmConsultoria extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'principal' }}
                renderScene={(route, navigator) => {
                    switch (route.id) {
                        case 'principal':
                            return (
                                <CenaPrincipal navigator={navigator} />
                            );
                        case 'cliente':
                            return (
                                <CenaClientes navigator={navigator} />
                            );
                        case 'contato':
                            return (
                                <CenaContatos navigator={navigator} />
                            );
                        default:
                            throw new Error('Route not implemented');
                    }
                }}
            />
        );
    }
}

AppRegistry.registerComponent('atmConsultoria', () => atmConsultoria);
