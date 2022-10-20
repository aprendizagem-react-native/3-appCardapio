import React from 'react';

import {Link} from 'react-router-native'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Menu = () => {

    return(
        <View style={e.container} >

            <Botao rota="/" titulo="Carrinho" />
            <Botao rota="/produtos" titulo="Produtos" />
            <Botao rota="/cadastro" titulo="Cadastro" />

        </View>
    );

}

const Botao = ( {rota, titulo} ) => {
    return(
        <TouchableOpacity style={e.botao} >
            <Link to={rota} >
                <Text style={e.texto} > { titulo } </Text>
            </Link>
        </TouchableOpacity>
    );
}

const e = StyleSheet.create({
    container: {
      flexDirection: "row"
    },
    botao: {
        backgroundColor: "#FF4081",
        borderRadius: 5,
        padding: 10,
        textAlign: "center",
        flex: 1,
        margin: 3
    },
    texto: {
        color: "#FFF"
    }
})

export default Menu;