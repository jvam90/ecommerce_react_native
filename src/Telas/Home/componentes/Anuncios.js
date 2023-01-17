import Cartao from "./Cartao";
import { ScrollView } from "react-native";
import { anuncios } from "../../../../mocks/index";

function Anuncios() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={0}
      pagingEnabled
      horizontal
    >
      {anuncios?.map((anuncio) => {
        return (
          <Cartao
            key={anuncio.id}
            titulo={anuncio.titulo}
            descricao={anuncio.descricao}
            textoBotao={anuncio.textoBotao}
          ></Cartao>
        );
      })}
    </ScrollView>
  );
}

export default Anuncios;
