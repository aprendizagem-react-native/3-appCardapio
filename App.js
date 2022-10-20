import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Routes, Route } from 'react-router-native';

import Menu from './assets/Componentes/Menu';

import Cadastro from './assets/Paginas/Cadastro';
import Carrinho from './assets/Paginas/Carrinho';
import Produtos from './assets/Paginas/Produtos';

export default function App() {

    const banco = [
        { id: 1, nome: "X-Tudo", ingredientes: "Pão de hamburguer, 2x hamburgueres, queijo, salcicha, ovo, alface e tomate", preco: "15.50" },
        { id: 2, nome: "Porção de Batata", ingredientes: "Batata frita (400g) com queijo derretido", preco: "20.00" },
        { id: 3, nome: "Íscas de Tilápia", ingredientes: "Íscas de tilápia frita (400g). Acompanha molho branco e salada de alface", preco: "32.90" }
    ]

    const [ produtos, alteraProdutos ] = React.useState( banco );
    const [ carrinho, alteraCarrinho ] = React.useState( [] );

    return (
        <View>
            <NativeRouter>

                <Menu />

                <Routes>
                    <Route path="/" element={ <Carrinho carrinho={carrinho} /> } />
                    <Route path="/produtos" element={ <Produtos produtos={produtos} carrinho={carrinho} alteraCarrinho={alteraCarrinho} /> } />
                    <Route path="/cadastro" element={ <Cadastro produtos={produtos} alteraProdutos={alteraProdutos} /> } />
                </Routes>

            </NativeRouter>
        </View>
    );
}

