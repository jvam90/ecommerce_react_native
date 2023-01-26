import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";
import Carrousel from "./componentes/Carrousel";
import Miniatura from "./componentes/Miniatura";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

const imagens = [modelo1, modelo2, modelo3, modelo4];

function Produto() {
  const [tamanho, setTamanho] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [imagemAtiva, setImagemAtiva] = useState(0);
  return (
    <>
      <SafeAreaView>
        <Carrousel
          imagens={imagens}
          imagemAtiva={imagemAtiva}
          setImagemAtiva={setImagemAtiva}
        ></Carrousel>
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
          <View style={estilos.review}>
            <AntIcon name="star" size={20} color={"#fdcc0d"}></AntIcon>
            <Text style={estilos.nota}>4.9</Text>
            <Text style={estilos.quantidade}>
              40 <Text style={estilos.textoReview}>Reviews</Text>
            </Text>
          </View>
          <Text style={estilos.produto}>Camisa de Algodão</Text>
          <Text style={estilos.preco}>R$ 100,00</Text>
          <Text style={estilos.tamanho}>Selecionar Tamanho</Text>

          <View style={estilos.botoesTamanho}>
            <TouchableOpacity
              style={[
                estilos.botaoTamanho,
                { marginEnd: 10 },
                tamanho === "P" && estilos.botaoSelecionado,
              ]}
              onPress={() => setTamanho("P")}
            >
              <Text style={{ fontSize: 16 }}>P</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                estilos.botaoTamanho,
                { marginHorizontal: 10 },
                tamanho === "M" && estilos.botaoSelecionado,
              ]}
              onPress={() => setTamanho("M")}
            >
              <Text style={{ fontSize: 16 }}>M</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                estilos.botaoTamanho,
                { marginHorizontal: 10 },
                tamanho === "G" && estilos.botaoSelecionado,
              ]}
              onPress={() => setTamanho("G")}
            >
              <Text style={{ fontSize: 16 }}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                estilos.botaoTamanho,
                { marginHorizontal: 10 },
                tamanho === "GG" && estilos.botaoSelecionado,
              ]}
              onPress={() => setTamanho("GG")}
            >
              <Text style={{ fontSize: 16 }}>GG</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <View style={estilos.botao}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={[estilos.botaoNumItens, { marginHorizontal: 10 }]}
                  onPress={() => {
                    quantidade > 1
                      ? setQuantidade(quantidade - 1)
                      : alert("Quantidade mínima!");
                  }}
                >
                  <AntIcon name="minus" size={15} color="#000000" />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {quantidade}
                </Text>

                <TouchableOpacity
                  style={[estilos.botaoNumItens, { marginHorizontal: 10 }]}
                  onPress={() => {
                    setQuantidade(quantidade + 1);
                  }}
                >
                  <AntIcon name="plus" size={15} color="#000000" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={estilos.botaoAddCarrinho}
              onPress={() => {
                alert(tamanho);
              }}
            >
              <Text style={estilos.textoBotaoAddCarrinho}>
                Adicionar ao Carrinho
              </Text>
            </TouchableOpacity>
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
  review: {
    flexDirection: "row",
    alignItems: "center",
  },
  nota: {
    fontSize: 18,
    fontWeight: "bold",
    marginStart: 5,
  },
  quantidade: {
    marginStart: 5,
    color: "#cacaca",
  },
  textoReview: {
    color: "#000",
  },
  produto: {
    fontSize: 16,
    marginTop: 10,
  },
  preco: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  tamanho: {
    fontSize: 16,
    marginTop: 15,
  },
  botoesTamanho: {
    flexDirection: "row",
    marginTop: 15,
  },
  botaoTamanho: {
    borderWidth: 1,
    borderColor: "#CACACA",
    borderRadius: 5,
    padding: 20,
  },
  botaoSelecionado: {
    backgroundColor: "#FFA959",
    borderColor: "#FFA959",
  },
  botaoNumItens: {
    borderWidth: 1,
    borderColor: "#CACACA",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  botaoAddCarrinho: {
    backgroundColor: "#FF7A00",
    padding: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FF7A00",
    width: 180,
    marginStart: 20,
  },
  textoBotaoAddCarrinho: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Produto;
