import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BarraNavegacao extends Component {
    render() {
        return (
            <View style={styles.barraTitulo}>
                <Text style={styles.titulo}>ATM Consultoria</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        paddingTop: 50,
        height: 100
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
