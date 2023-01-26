import { NavigationContainer } from "@react-navigation/native";
import StackRotas from "./src/rotas/StackRotas";
import Carrinho from "./src/Telas/Carrinho/Index";
import Loja from "./src/Telas/Loja";
import Produto from "./src/Telas/Produto/Index";

export default function App() {
  return (
    // <NavigationContainer>
    //   <StackRotas></StackRotas>
    // </NavigationContainer>
    //<Loja></Loja>
    <Produto></Produto>
  );
}
