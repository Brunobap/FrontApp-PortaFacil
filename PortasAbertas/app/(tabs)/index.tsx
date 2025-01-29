import { Image, StyleSheet, Platform, View, Button } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/Styles';
import BotaoVazado from '@/components/BotaoVazado';

export default function SplashScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
        <ThemedText type='title' style={{fontSize: 40}}>PORTA FÁCIL</ThemedText>
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Seja bem-vindo</ThemedText>
        <BotaoVazado onPress={null} href={"./login"} legenda='Começar >' />
      </ThemedView>
    </ThemedView>
  );
}

