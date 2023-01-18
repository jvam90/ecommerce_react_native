import { StyleSheet, ScrollView } from "react-native";
import modelo1 from "../../../../assets/modelo_1.png";
import SectionHeader from "../../../componentes/SectionHeader";
import ShopCard from "../../../componentes/ShopCard";

const ItensRecomendados = ({ produtos }) => {
  return (
    <>
      <SectionHeader titulo={"Itens Recomendados"} link={"Ver Tudo"} />
      <ScrollView
        contentContainerStyle={estilos.container}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={0}
        pagingEnabled
      >
        {produtos?.map((produto, index) => {
          return (
            <ShopCard
              imagem={modelo1}
              produto={produto}
              key={index}
              style={estilos.card}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default ItensRecomendados;

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    width: "50%",
  },
});
