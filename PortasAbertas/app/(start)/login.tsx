import { Alert, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import CaixaTextInput from '@/components/CaixaTextInput';
import PasswordInput from '@/components/PasswordInput'; // Importando o novo componente
import { router } from 'expo-router';
import { useState } from 'react';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckLogin } from '@/scripts/api-auth';

export default function Login() {
  async function handlerLogar() {
    // Fazer a verificação dos dados do usuário
    if (id?.length == 0 || senha?.length == 0) {
      alert("Por favor, digite todas as informações pedidas.")
      return ;
    }

    // Montar a requisição para o backend
    const objReq = {
      username: id,
      password: senha
    }

    // Enviar o endpoint
    const usuario = await CheckLogin(objReq)

    // Se o resultado não for bom, devolver um aviso
    if (usuario == null) {
      Alert.alert("Não foi possível concluir o login.","Por favor, tente novamente.")
      alert("Não foi possível concluir o login.\nPor favor, tente novamente.")
    
    } else {      
      // Pegar o resultado como informação de autenticação e salvar com persistência
      AsyncStorage.setItem("ra", usuario.ra)
      AsyncStorage.setItem("accessToken", usuario.access_token)
      AsyncStorage.setItem("refreshToken", usuario.refresh_token)      
  
      // Mandar ele pro painel se tiver funcionado
      router.push("/(tabs)/portas")
    }    
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
      <ThemedView style={{width:"80%"}}>
        <CaixaTextInput tipo='number-pad' onChange={setID} value={id} legenda={"RA/CPF"} />
        <PasswordInput placeholder="Senha" value={senha} onChangeText={setSenha} />
      </ThemedView>

      {/* Botão para logar */}
      <BotaoPersonalizado type='title' legenda='Login >' onPress={() => handlerLogar()} />
    </ThemedView>
  );
}
