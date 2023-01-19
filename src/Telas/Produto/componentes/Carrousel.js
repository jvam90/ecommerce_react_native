import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Octicon from "react-native-vector-icons/Octicons";

function Carrousel({ imagens }) {
  return (
    <>
      <View style={estilos.container}>
        <ScrollView
          horizontal
          onScroll={() => {}}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {imagens.map((imagem, index) => {
            return (
              <Image
                source={imagem}
                key={index}
                style={estilos.container}
              ></Image>
            );
          })}
        </ScrollView>
        <View style={estilos.indicadores}>
          {imagens.map((_, index) => {
            return (
              <Text
                key={index}
                style={index === 2 ? estilos.indicadorAtivo : estilos.indicador}
              >
                <Octicon name={"dot-fill"} size={30}></Octicon>
              </Text>
            );
          })}
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.4,
  },
  indicadores: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    bottom: 0,
  },
  indicador: {
    margin: 5,
    marginBottom: 15,
    color: "#cacaca",
    fontSize: 50,
  },
  indicadorAtivo: {
    margin: 5,
    marginBottom: 15,
    fontSize: 50,
    color: "#ffa959",
  },
});

export default Carrousel;
