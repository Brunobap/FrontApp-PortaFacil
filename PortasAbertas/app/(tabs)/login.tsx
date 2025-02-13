import { Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import CaixaTextInput from '@/components/TextInput';
import BotaoVazado from '@/components/BotaoVazado';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Login() {
  function handlerLogar() {
    // Fazer a verificação dos dados do usuário


    // Mandar ele pro painel se tiver funcionado
    router.navigate("/user")
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
      <BotaoVazado legenda='Login >' onPress={() => handlerLogar()}/>
    </ThemedView>
  );
}
