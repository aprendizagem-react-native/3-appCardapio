import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Carrinho = ( {carrinho} ) => {

    return(
        <View style={e.container} >

            { 
                carrinho == 0 ? <Text> Nenhum produto adicionado ao carrinho... </Text> :

                <View>
                    { 
                        carrinho.map( p => 
                            <View style={e.produto} >
                                <Text style={e.nome} > { p.nome } </Text>
                                <Text style={e.preco} > { p.preco } </Text>
                            </View>
                        )
                    }
                </View>        
            }

        </View>
    );
}

const e = StyleSheet.create({
    container: {
        padding: 10
    },
    produto: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
        padding: 20,
        borderWidth: 1,
        borderColor: "#CCC",
        marginTop: 20,
        alignItems: "center"
    },
    nome: {
        fontWeight: "bold"
    },
    botao: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 10
    },
    textoBotao: {
        color: "#FFF"
    },
    preco: {
        backgroundColor: "#4CAF50",
        color: "#FFF",
        padding: 5,
        borderRadius: 10,
        fontWeight: "bold"
    }
});

export default Carrinho;