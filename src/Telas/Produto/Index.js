import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";
import Carrousel from "./componentes/Carrousel";
import Miniatura from "./componentes/Miniatura";

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
});

export default Produto;
