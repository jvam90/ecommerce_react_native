import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CheckBox, TouchableOpacity } from "react-native-web";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usuarios } from "../../../mocks";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [manterConectado, setManterConectado] = useState(false);

  const loginApple = () => {
    alert("Login com Apple ID não implementado!");
  };

  const loginGmail = () => {
    alert("Login com Gmail não implementado!");
  };

  const clicarCheckbox = () => {
    setManterConectado(!manterConectado);
  };

  const login = () => {
    const usuarioBase = usuarios.find(
      (e) => e.email === email && e.senha === senha
    );
    if (usuarioBase) {
      const jsonValue = JSON.stringify(usuarioBase);
      AsyncStorage.setItem("usuario", jsonValue).catch((erro) =>
        console.error(erro)
      );
      console.log("teste");
      navigation.navigate("Home");
    } else {
      alert("Usuário inexistente!");
    }
  };

  return (
    <>
      <View style={estilos.cabecalho}></View>
      <View style={estilos.tela}>
        <Text style={estilos.entrar}>Entrar</Text>
        <Text style={estilos.cadastro}>
          Bem-vindo! Não possui uma conta?
          <TouchableOpacity>
            <Text
              style={estilos.linkCriarConta}
              onPress={() => alert("Não implementado!")}
            >
              Criar Conta
            </Text>
          </TouchableOpacity>
        </Text>
        <TextInput
          style={estilos.input}
          placeholder={"E-mail"}
          keyboardType="email"
          defaultValue={email}
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
        <TextInput
          style={estilos.input}
          placeholder={"Senha"}
          keyboardType="password"
          defaultValue={senha}
          onChangeText={(senha) => setSenha(senha)}
        ></TextInput>
        <TouchableOpacity style={estilos.botaoLogIn} onPress={login}>
          <Text style={estilos.textoBotaoLogIn}>Log In</Text>
        </TouchableOpacity>
        <View style={estilos.linha}>
          <View style={estilos.checkboxContainer}>
            <CheckBox
              style={estilos.checkbox}
              value={manterConectado}
              onValueChange={setManterConectado}
              color={true ? "#FF7A00" : undefined}
            ></CheckBox>
            <TouchableOpacity onPress={clicarCheckbox} activeOpacity={1.0}>
              <Text>Mantenha-me conectado</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={estilos.linkEsqueciSenha}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={estilos.separador}>OR</Text>

      <TouchableOpacity style={estilos.botaoSignUp} onPress={loginGmail}>
        <MaterialCommunityIcon name="google" size={20} color="#000000" />
        <Text style={estilos.textoBotaoSignUp}>Entrar com Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoSignUp} onPress={loginApple}>
        <MaterialCommunityIcon name="apple" size={20} color="#000000" />
        <Text style={estilos.textoBotaoSignUp}>Entrar com Apple ID</Text>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  cabecalho: {
    height: 150,
    backgroundColor: "#ff7a00",
  },
  tela: {
    margin: 25,
  },
  entrar: {
    fontWeight: "bold",
  },
  linkCriarConta: {
    color: "#FF7A00",
    paddingStart: 5,
  },
  input: {
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    borderColor: "#CACACA",
    borderWidth: 1,
    padding: 10,
  },
  botaoLogIn: {
    backgroundColor: "#FF7A00",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FF7A00",
    width: "100%",
    marginTop: 20,
  },
  textoBotaoLogIn: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  separador: {
    color: "#FF7A00",
    textAlign: "center",
    marginBottom: 10,
  },
  botaoSignUp: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoSignUp: {
    textAlign: "center",
    marginStart: 5,
  },
  linha: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  linkEsqueciSenha: {
    color: "#FF7A00",
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
    marginEnd: 5,
  },
});

export default Login;
