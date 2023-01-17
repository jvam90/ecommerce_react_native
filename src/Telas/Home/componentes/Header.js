import icone from "../../../../assets/usuario_icone.png";
import { View, Text, Image, StyleSheet } from "react-native";
function Header({ usuario }) {
  return (
    <View style={estilos.cabecalho}>
      <View>
        <Text>Bem-vindo,</Text>
        <Text style={estilos.nome}>{usuario.nome}</Text>
      </View>
      <Image source={icone} style={estilos.icone}></Image>
    </View>
  );
}

const estilos = StyleSheet.create({
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
});

export default Header;
