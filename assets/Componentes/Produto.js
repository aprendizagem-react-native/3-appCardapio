import React from 'react';

import { useNavigate } from 'react-router-native';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

const Produto = ( {produto, carrinho, alteraCarrinho, exibeModal, alteraExibeModal } ) => {

    const navigate = useNavigate();

    const adicionaProduto = ( produto ) => {
        const novos_produtos = [ ...carrinho, produto ];
        alteraCarrinho( novos_produtos );
        alteraExibeModal( false );
        navigate("/")
    }

    return(
        <Modal animationType='slide' visible={ exibeModal } >
            <View>

                <TouchableOpacity onPress={()=>alteraExibeModal(false)} >
                    <Text style={e.fechar} > X </Text>
                </TouchableOpacity>

                <View style={e.containerProduto} >
                    <Text style={e.nome} > {produto?.nome} </Text>
                    <Text style={e.preco} > R$ {produto?.preco} </Text>
                </View>

                <Text style={e.descricao} > {produto?.ingredientes} </Text>

                <TouchableOpacity style={e.botaoCarrinho} onPress={()=>adicionaProduto(produto)} >
                    <Text style={e.textoBotaoCarrinho} > Adicionar ao Carrinho </Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}

const e = StyleSheet.create({
    fechar: {
        textAlign: "right",
        fontSize: 20,
        padding: 20,
        marginBottom: 30
    },
    containerProduto: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    nome: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    descricao: {
        padding: 20
    },
    botaoCarrinho: {
        margin: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#4CAF50"
    },
    textoBotaoCarrinho: {
        textAlign: "center",
        color: "#FFF"
    },
    preco: {
        backgroundColor: "#FF4081",
        color: "#FFF",
        padding: 10,
        borderRadius: 10,
        fontWeight: "bold"
    }
})

export default Produto;