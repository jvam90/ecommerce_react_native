import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import logo from "../../../assets/tela_principal.png";

function teste() {
  alert("Oi");
}

function TelaPrincipal() {
  return (
    <View>
      <Image source={logo} style={estilos.logo} />
      <Text style={estilos.titulo}>Todas as suas compras num só app!</Text>
      <Text style={estilos.subtitulo}>
        Venda seus produtos de maneira mais inteligente e rápida para obter
        dinheiro imediato e uma consciência mais limpa.
      </Text>
      <View style={estilos.botoes}>
        <TouchableOpacity style={estilos.entrar} onPress={teste}>
          <Text style={estilos.textoEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.cadastrar}>
          <Text style={estilos.textoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
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
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  entrar: {
    backgroundColor: "#ff7a00",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ff7a00",
    width: 160,
    marginStart: 25,
  },
  cadastrar: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ff7a00",
    width: 160,
    marginEnd: 25,
  },
  textoEntrar: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  textoCadastrar: {
    textAlign: "center",
    color: "#ff7a00",
    fontWeight: "bold",
  },
});

export default TelaPrincipal;
