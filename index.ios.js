import React, { Component } from 'react';
import { 
    AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class atmConsultoria extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'a' }}
                renderScene={(route, navigator) => {
                    switch (route.id) {
                        case 'a':
                            return (
                                <CenaPrincipal navigator={navigator} />
                            );
                        case 'b':
                            return (
                                <CenaClientes navigator={navigator} />
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
