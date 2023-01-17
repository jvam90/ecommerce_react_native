import celular_1 from "../../../../assets/celular_1.png";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Cartao({ titulo, descricao, textoBotao }) {
  return (
    <View style={estilos.secaoCartao}>
      <View>
        <Text style={estilos.nome}>{titulo}</Text>
        <Text style={estilos.descricaoCartao}>{descricao}</Text>
        <TouchableOpacity style={estilos.saibaMais}>
          <Text style={estilos.textoSaibaMais}>{textoBotao}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={celular_1} style={estilos.imagemCartao}></Image>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  secaoCartao: {
    marginVertical: 20,
    marginEnd: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  saibaMais: {
    backgroundColor: "#ff7a00",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffa959",
    width: 120,
    marginTop: 15,
  },
  textoSaibaMais: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  imagemCartao: {
    marginTop: 5,
    width: 100,
    height: 100,
  },
});

export default Cartao;
