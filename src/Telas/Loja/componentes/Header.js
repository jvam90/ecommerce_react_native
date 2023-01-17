import { useState } from "react";
import { TextInput, StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

function Header() {
  const [textoBusca, setTextoBusca] = useState("");
  return (
    <View style={estilos.cabecalho}>
      <View style={estilos.barraBusca}>
        <TextInput
          placeholder="Faça sua busca aqui..."
          keyboardType="text"
          defaultValue={textoBusca}
          onChangeText={(textoBusca) => setTextoBusca(textoBusca)}
        ></TextInput>
        <Ionicon name="search-outline" size={20}></Ionicon>
      </View>
      <TouchableOpacity style={estilos.carrinho}>
        <Ionicon name="cart-outline" size={35}></Ionicon>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  barraBusca: {
    width: 315,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000",
    justifyContent: "space-between",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 20,
    alignItems: "center",
  },
  carrinho: {
    justifyContent: "center",
    marginBottom: 20,
    marginStart: "auto",
    marginEnd: "auto",
  },
});

export default Header;
