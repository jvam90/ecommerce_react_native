import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";
import { itensRecomendados } from "../../../mocks";

const Carrinho = () => {
  console.log(itensRecomendados);
  return (
    <>
      <SafeAreaView style={estilos.tela}>
        <FlatList
          style={estilos.lista}
          data={itensRecomendados}
          renderItem={({ item }) => (
            <Item
              nome={item.nome}
              tamanho={item.tamanho}
              preco={item.preco}
              key={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => {
            return <Header />;
          }}
          ListFooterComponent={() => {
            return <ResumoCompra />;
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Carrinho;

const estilos = StyleSheet.create({
  tela: {
    margin: 25,
  },
});
