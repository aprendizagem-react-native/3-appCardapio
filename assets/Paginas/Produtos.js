import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Produto from '../Componentes/Produto';

const Produtos = ( {produtos, carrinho, alteraCarrinho} ) => {

    const [ exibeModal, alteraExibeModal ] = React.useState( false );
    const [ produtoSelecionado, alteraProdutoSelecionado ] = React.useState( null );

    const selecionaProduto = ( p ) => {
        alteraProdutoSelecionado(p)
        alteraExibeModal( !exibeModal )
    }

    return(
        <View style={e.container} >

            { 
                produtos == 0 ? <Text> Nenhum produto encontrado... </Text> :

                <View>
                    { 
                        produtos.map( p => 
                            <View style={e.produto} >
                                <Text style={e.nome} > { p.nome } </Text>
                                <TouchableOpacity style={e.botao} onPress={()=>selecionaProduto( p )} >                      
                                    <Text style={e.textoBotao} > Ver detalhes </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>        
            }

            <Produto carrinho={carrinho} alteraCarrinho={alteraCarrinho} produto={produtoSelecionado} exibeModal={exibeModal} alteraExibeModal={alteraExibeModal} />

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
        backgroundColor: "#FF4081",
        color: "#FFF",
        padding: 10,
        borderRadius: 10,
        fontWeight: "bold"
    }
});

export default Produtos;