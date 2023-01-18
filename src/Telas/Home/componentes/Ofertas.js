import SectionHeader from "../../../componentes/SectionHeader";
import { StyleSheet, ScrollView } from "react-native";
import VerticalCard from "../../../componentes/VerticalCard";
import PromoCard from "../../../componentes/PromoCard";

function Ofertas({ ofertas }) {
  return (
    <>
      <SectionHeader
        titulo={"Ofertas Incríveis"}
        link={"Ver Tudo"}
      ></SectionHeader>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={0}
        pagingEnabled
        horizontal
        style={estilos.ofertas}
      >
        {ofertas?.map((oferta, index) => {
          return <VerticalCard imagem={oferta.imagem} key={oferta.id} />;
        })}
      </ScrollView>
      <PromoCard />
    </>
  );
}

const estilos = StyleSheet.create({
  ofertas: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
  },
});

export default Ofertas;
