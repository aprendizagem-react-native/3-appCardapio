import React from 'react';

import { useNavigate } from 'react-router-native';
import { StyleSheet, View, Text, TouchableOpacity, TextInput  } from 'react-native';

const Cadastro = ( { produtos, alteraProdutos} ) => {

    const navigate = useNavigate();

    const [ nome, alteraNome ] = React.useState("");
    const [ ingredientes, alteraIngredientes ] = React.useState("");
    const [ preco, alteraPreco ] = React.useState("");

    const salvar = () => {

        const produto = {
            id: produtos.length + 1,
            nome: nome,
            ingredientes: ingredientes,
            preco: preco
        }

        const novos_produtos = [ ...produtos, produto ];
        
        alteraProdutos( novos_produtos );
        navigate("/produtos")

    }

    return(
        <View style={e.container} > 

            <Text style={e.titulo} > Cadastro de produtos </Text>

            <TextInput onChangeText={(e)=>alteraNome(e)} style={e.input} placeholder="Digite o nome..." />
            <TextInput onChangeText={(e)=>alteraIngredientes(e)} style={e.input} placeholder="Digite os ingredientes..." />
            <TextInput onChangeText={(e)=>alteraPreco(e)} style={e.input} placeholder="Digite o preço..." />

            <TouchableOpacity style={e.botao} onPress={()=>salvar()} >
                <Text style={e.textoBotao} > Salvar </Text>
            </TouchableOpacity>

        </View>
    );
}

const e = StyleSheet.create({
    container: {
        padding: 10
    },
    titulo: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCC",
        padding: 10,
        marginBottom: 10
    },
    botao: {
        backgroundColor: "#4CAF50",
        padding: 10,
        textAlign: "center",
        width: 100,
        margin: "auto",
        borderRadius: 5
    },
    textoBotao: {
        color: "#FFF"
    }
})

export default Cadastro;