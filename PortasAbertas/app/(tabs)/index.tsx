import { Image, StyleSheet, Platform, View, Button } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function SplashScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image style={styles.logo} source={require("@/assets/images/logo.jpg")} />
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Seja bem-vindo</ThemedText>
        <Link href={"/login"} style={styles.btnLink}>
        <ThemedText type="title" style={{color: Colors.verdeClaro}} >Começar</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: "75%",
    gap: 8,
    backgroundColor: "#40B59F",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    height: "75%",
    resizeMode: "contain"
  },
  btnLink: {
    borderColor: Colors.verdeClaro,
    borderWidth: 1,
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
});
