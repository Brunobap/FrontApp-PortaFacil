import { Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import CaixaTextInput from '@/components/CaixaTextInput';
import PasswordInput from '@/components/PasswordInput';
import { router } from 'expo-router';
import { useState } from 'react';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckLogin } from '@/scripts/api-auth';
import { checarBiometria } from "@/scripts/biometria";
import AlertaAviso from '@/components/AlertaAviso';

export default function Login() {
  const [id, setID] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemAlerta, setMensagemAlerta] = useState("");

  async function handlerLogar() {
    if (id?.length === 0 || senha?.length === 0) {
      setMensagemAlerta("Por favor, digite todas as informações pedidas.");
      return;
    }

    const objReq = {
      username: id,
      password: senha
    };

    const usuario = await CheckLogin(objReq);

    if (usuario == null) {
      setMensagemAlerta("Não foi possível concluir o login. Por favor, tente novamente.");
    } else {
      setMensagemAlerta("");
      AsyncStorage.setItem("ra", usuario.ra);
      AsyncStorage.setItem("accessToken", usuario.access_token);
      AsyncStorage.setItem("refreshToken", usuario.refresh_token);
      router.push("/(tabs)/portas");
    }
  }

  return (
    <ThemedView style={styles.container}>
      <Image source={require("@/assets/images/imgLogin.png")} style={{ width: '90%', resizeMode: "contain" }} />
      <ThemedText type='title' style={{ marginVertical: 20 }}>Login</ThemedText>

      {/* Alerta visual */}
      {mensagemAlerta !== "" && <AlertaAviso mensagem={mensagemAlerta} />}

      <ThemedView style={{ width: "80%" }}>
        <CaixaTextInput tipo='number-pad' onChange={setID} value={id} legenda={"RA/CPF"} />
        <PasswordInput placeholder="Senha" value={senha} onChangeText={setSenha} />
      </ThemedView>

      <BotaoPersonalizado type='title' legenda='Login >' onPress={() => handlerLogar()} />
    </ThemedView>
  );
}
