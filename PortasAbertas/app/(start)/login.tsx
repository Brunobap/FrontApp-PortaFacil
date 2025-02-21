import { Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import CaixaTextInput from '@/components/CaixaTextInput';
import { router } from 'expo-router';
import { useState } from 'react';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  function handlerLogar() {
    // Fazer a verificação dos dados do usuário

    // Montar a requisição para o backend

    // Enviar o endpoint

    // Pegar o resultado como informação de autenticação e salvar com persistência
    AsyncStorage.setItem("authUser", "alo alo")
    // E as informações pessoais do usuário
    AsyncStorage.setItem("nomeUsuario", "fulaneto")
    AsyncStorage.setItem("emailUsuario", "batata@123")
    AsyncStorage.setItem("nivelUsuario", "admin")

    // Mandar ele pro painel se tiver funcionado
    router.navigate("/(tabs)/portas")
  }

  // Estados para as entradas do usuário
  const [id, setID] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <ThemedView style={styles.container}>
      {/* Imagem e título da página */}
      <Image source={require("@/assets/images/imgLogin.png")} style={{width: '90%', resizeMode: "contain"}} />
      <ThemedText type='title' style={{marginVertical: 20}}>Login</ThemedText>

      {/* Caixas de entrada de texto */}
      <ThemedView style={{width:"100%"}}>
        <CaixaTextInput tipo='number-pad'  onChange={setID} value={id} legenda={"RA/CPF"} />
        <CaixaTextInput tipo="visible-password" onChange={setSenha} value={senha} legenda={"Senha"} />
      </ThemedView>

      {/* Botão para logar */}
      <BotaoPersonalizado type='title' legenda='Login >' onPress={() => handlerLogar()}/>
    </ThemedView>
  );
}
