import { Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';

export default function SplashScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
        <ThemedText type='title' style={{fontSize: 40, paddingTop: 10}}>PORTA FÁCIL</ThemedText>
      </ThemedView>
      <ThemedView style={{flex: 1, paddingVertical: 20}}>
        <ThemedText type="title">Seja bem-vindo</ThemedText>
        <BotaoPersonalizado type='title' href={"./login"} legenda='Começar >' />
      </ThemedView>
    </ThemedView>
  );
}

