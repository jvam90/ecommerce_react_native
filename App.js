import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TelaPrincipal from "./src/Telas/TelaPrincipal/Index";

export default function App() {
  return <TelaPrincipal></TelaPrincipal>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
