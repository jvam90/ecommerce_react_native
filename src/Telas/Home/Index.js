import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./componentes/Header";
import Anuncios from "./componentes/Anuncios";
import Ofertas from "./componentes/Ofertas";

function Home() {
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    async function pegarDados() {
      setUsuario(JSON.parse(await AsyncStorage.getItem("usuario")));
    }
    pegarDados();
  }, []);
  return (
    <>
      <SafeAreaView style={estilos.tela}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header usuario={usuario}></Header>
          <Anuncios></Anuncios>
          <Ofertas></Ofertas>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  tela: {
    margin: 25,
  },
});

export default Home;
