import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import icone from "../../../assets/usuario_icone.png";
import Cartao from "./componentes/Cartao";
import { anuncios } from "../../../mocks/index.js";

function Home() {
  console.log(anuncios);
  return (
    <>
      <View style={estilos.tela}>
        <View style={estilos.cabecalho}>
          <View>
            <Text>Bem-vindo,</Text>
            <Text style={estilos.nome}>João Víctor Alves Martins</Text>
          </View>
          <Image source={icone} style={estilos.icone}></Image>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {anuncios?.map((anuncio) => {
            return (
              <Cartao
                key={anuncio.id}
                titulo={anuncio.titulo}
                descricao={anuncio.descricao}
                textoBotao={anuncio.textoBotao}
              ></Cartao>
            );
          })}
        </ScrollView>
        <View style={estilos.secaoOfertas}>
          <View style={estilos.ofertas}>
            <Text style={estilos.nome}>Ofertas</Text>
            <TouchableOpacity>
              <Text style={estilos.linkVerTudo}>Ver Tudo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  tela: {
    margin: 25,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nome: {
    fontWeight: "bold",
  },
  icone: {
    width: 50,
    height: 50,
  },
  secaoOfertas: {
    marginTop: 25,
  },
  ofertas: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkVerTudo: {
    color: "#ff7a00",
    fontWeight: "bold",
  },
});

export default Home;
