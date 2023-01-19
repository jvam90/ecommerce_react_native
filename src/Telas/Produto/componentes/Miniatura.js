import { Image, StyleSheet, TouchableOpacity } from "react-native";

function Miniatura({ imagem, index }) {
  return (
    <>
      <TouchableOpacity key={index}>
        <Image source={imagem} style={estilos.miniatura}></Image>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  miniatura: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ffa959",
    width: 80,
    height: 80,
    marginBottom: 15,
  },
});

export default Miniatura;
