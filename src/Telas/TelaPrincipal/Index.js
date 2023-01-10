import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../../assets/tela_principal.png";
function TelaPrincipal() {
  return (
    <View>
      <Image source={logo} style={estilos.logo} />
      <Text style={estilos.titulo}>Todas as suas compras num só app!</Text>
      <Text style={estilos.subtitulo}>
        Venda seus produtos de maneira mais inteligente e rápida para obter
        dinheiro imediato e uma consciência mais limpa.
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  logo: { width: 360, height: 360, marginTop: 120 },
  titulo: {
    margin: 25,
    marginBottom: 15,
    fontSize: 35,
  },
  subtitulo: {
    margin: 25,
    marginTop: 0,
    fontSize: 16,
  },
});

export default TelaPrincipal;
