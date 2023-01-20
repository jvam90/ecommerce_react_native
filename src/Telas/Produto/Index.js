import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";
import Carrousel from "./componentes/Carrousel";
import Miniatura from "./componentes/Miniatura";
import AntIcon from "react-native-vector-icons/AntDesign";

const imagens = [modelo1, modelo2, modelo3, modelo4];

function Produto() {
  return (
    <>
      <SafeAreaView>
        <Carrousel imagens={imagens}></Carrousel>
        <View style={estilos.tela}>
          <View style={estilos.linhaMiniaturas}>
            {imagens.map((imagem, index) => {
              return (
                <Miniatura
                  imagem={imagem}
                  key={index}
                  index={index}
                ></Miniatura>
              );
            })}
          </View>
          <View style={estilos.review}>
            <AntIcon name="star" size={20} color={"#fdcc0d"}></AntIcon>
            <Text style={estilos.nota}>4.9</Text>
            <Text style={estilos.quantidade}>
              40 <Text style={estilos.textoReview}>Reviews</Text>
            </Text>
          </View>
          <Text style={estilos.produto}>Camisa de Algodão</Text>
          <Text style={estilos.preco}>R$ 100,00</Text>
          <Text style={estilos.tamanho}>Selecionar Tamanho</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  tela: {
    margin: 25,
  },
  linhaMiniaturas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  review: {
    flexDirection: "row",
    alignItems: "center",
  },
  nota: {
    fontSize: 18,
    fontWeight: "bold",
    marginStart: 5,
  },
  quantidade: {
    marginStart: 5,
    color: "#cacaca",
  },
  textoReview: {
    color: "#000",
  },
  produto: {
    fontSize: 16,
    marginTop: 10,
  },
  preco: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  tamanho: {
    fontSize: 16,
    marginTop: 15,
  },
});

export default Produto;
