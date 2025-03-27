import { Alert, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import * as LocalAuth from 'expo-local-authentication';

export default function SplashScreen() {
  const [flgTemBiometria, setFlgBio] = useState(false);

  const checarAuth = () => {
    // Checar nas informações de persistência se o usuário já está logado
    AsyncStorage.getItem("accessToken").then(async (valor) => {
      // Se ele já estiver, verificar se o token de autenticação ainda é válido

      // Se for, ele é jogado pro menu principal
      if (typeof valor == 'string')  {
        // Se o celular tiver a biometria, pedir para verificar
        if (flgTemBiometria) {
          // Checar se o aplicativo tem a biografia salva
          const savedBiometrics = await LocalAuth.isEnrolledAsync();
          if (savedBiometrics) router.navigate("/portas")
          // Caso não tenha, só não fazer nada

        // Se não, mandar a pessoa direto para o menu
        } else router.navigate("/portas")

      // Se não, os tokens são deletados, e ele tem que logar novamente
      } else AsyncStorage.multiRemove(["accessToken", "ra", "refreshToken"])
    })
  }

  const checarBiometria = () => {
    // Verificar se o dispositivo tem a funcionalidade de Biometria
    (async () => {
      const flgTem = await LocalAuth.hasHardwareAsync();
      setFlgBio(flgTem);
    })();
  }

  useEffect(() => {    
    // Checar os scanners sobre biometria e perguntar sobre a permissão deles
    checarBiometria()
    checarAuth()
  })


  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image style={styles.logo} resizeMode='contain' source={require("@/assets/images/logo.png")} />
        <ThemedText type='title' style={{fontSize: 40, paddingTop: 10}}>PORTA FÁCIL</ThemedText>
      </ThemedView>
      <ThemedView style={{flex: 1, paddingVertical: 20}}>
        <ThemedText type="title">Seja bem-vindo</ThemedText>
        <BotaoPersonalizado type='title' href={"./login"} legenda='Começar >' />
      </ThemedView>
    </ThemedView>
  );
}

