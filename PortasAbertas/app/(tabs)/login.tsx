import { Image, View, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import CaixaTextInput from '@/components/TextInput';
import BotaoColorido from '@/components/BotaoVazado';
import { Link } from 'expo-router';
import BotaoVazado from '@/components/BotaoVazado';

export default function Login() {
  function handlerLogar() {
    // Fazer a verificação dos dados do usuário

    // Mandar ele pro index se tiver funcionado
    
  }

  return (
    <ThemedView style={styles.container}>
      {/* Imagem e título da página */}
      <Image source={require("@/assets/images/imgLogin.png")} style={{width: '90%', resizeMode: "contain"}} />
      <ThemedText type='title' style={{marginVertical: 20}}>Login</ThemedText>


      {/* Caixas de entrada de texto */}
      <ThemedView style={{width:"100%"}}>
        <CaixaTextInput onChange={() => {}} value={""} legenda={"RA/CPF"} />
        <CaixaTextInput onChange={() => {}} value={""} legenda={"Senha"} />
      </ThemedView>

      {/* Botão para logar */}
      <BotaoVazado legenda='Login >' href={'./user'} />
    </ThemedView>
  );
}
