import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Telas/Login/Index";
import TelaPrincipal from "../Telas/TelaPrincipal/Index";
import Home from "../Telas/Home/Index";
const Stack = createNativeStackNavigator();

function StackRotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TelaPrincipal"
        component={TelaPrincipal}
      ></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackRotas;
