import { StyleSheet, View } from "react-native";
import MiniCard from "../../componentes/MiniCard";
import SectionHeader from "../../componentes/SectionHeader";
import Header from "./componentes/Header";
import cartaoCompras1 from "../../../assets/cartao_compras_icon_1.png";
import cartaoCompras2 from "../../../assets/cartao_compras_icon_2.png";
import cartaoCompras3 from "../../../assets/cartao_compras_icon_3.png";
import cartaoCompras4 from "../../../assets/cartao_compras_icon_4.png";

function Loja({ navigation }) {
  return (
    <View style={estilos.tela}>
      <Header></Header>
      <SectionHeader
        titulo={"Comprar por categoria"}
        link={"Ver Tudo"}
      ></SectionHeader>
      <View style={estilos.categorias}>
        <MiniCard imagem={cartaoCompras1} legenda={"Popular"} />
        <MiniCard imagem={cartaoCompras2} legenda={"Homem"} />
        <MiniCard imagem={cartaoCompras3} legenda={"Mulher"} />
        <MiniCard imagem={cartaoCompras4} legenda={"Crianças"} />
      </View>
      <SectionHeader
        titulo={"Itens recomendados"}
        link={"Ver Tudo"}
      ></SectionHeader>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    margin: 25,
  },
  compras: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titulo: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  textoBotaoVerTudo: {
    marginTop: 8,
    textAlign: "center",
    color: "#FF7A00",
  },
  categorias: {
    marginTop: 20,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Loja;
