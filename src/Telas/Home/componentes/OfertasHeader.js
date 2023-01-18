import { StyleSheet } from "react-native";

function OfertasHeader() {
  return (
    <View style={estilos.secaoOfertas}>
      <View style={estilos.ofertas}>
        <Text style={estilos.nome}>Ofertas</Text>
        <TouchableOpacity>
          <Text style={estilos.linkVerTudo}>Ver Tudo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
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

export default OfertasHeader;
