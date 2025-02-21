import { Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function SplashScreen() {
  // Checar nas informações de persistência se o usuário já está logado
  const checarAuth = () => {
    AsyncStorage.getItem("authUser").then((valor) => {
      // Se ele já estiver pular para o painel das portas direto 
      if (typeof valor == 'string') router.navigate("/portas")   
    })
  }
  useEffect(() => checarAuth())

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

