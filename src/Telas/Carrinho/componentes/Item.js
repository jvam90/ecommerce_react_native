import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import modelo1 from "../../../../assets/modelo_1.png";

const Item = () => {
  return (
    <View style={[estilos.container, estilos.conteudo]}>
      <Image source={modelo1} style={estilos.imagem} />

      <View>
        <View style={[estilos.conteudo, { width: 220 }]}>
          <Text style={{ fontSize: 14 }}>Camisa Manga Longa</Text>

          <TouchableOpacity onPress={() => {}}>
            <FontAwesomeIcon name="trash-o" size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={estilos.conteudo}>
          <Text style={{ fontSize: 12, marginTop: 10 }}>Tamanho: G</Text>
        </View>

        <View style={estilos.conteudo}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>R$ 100</Text>

          <View style={estilos.conteudo}>
            <TouchableOpacity
              style={[estilos.botaoNumItens, { marginHorizontal: 10 }]}
              onPress={() => {}}
            >
              <AntDesignIcon name="minus" size={15} color="#000000" />
            </TouchableOpacity>

            <Text style={{ fontSize: 20, fontWeight: "bold" }}>1</Text>

            <TouchableOpacity
              style={[estilos.botaoNumItens, { marginStart: 10 }]}
              onPress={() => {}}
            >
              <AntDesignIcon name="plus" size={15} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;

const estilos = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 20,
  },
  conteudo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    width: 90,
    height: 90,
  },
  botaoNumItens: {
    borderWidth: 1,
    borderColor: "#CACACA",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
});
