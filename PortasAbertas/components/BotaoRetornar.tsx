import React from "react";
<<<<<<< HEAD
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
=======
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";
>>>>>>> fix

//como usar: chamar na pagina onde o botao vai aparecer:     <BotaoRetornar destino="nome da pagina onde deve ir" />
// add pagina no RootStackPAramList exemplo:   login: undefined;
//add import BotaoRetornar from '@/components/BotaoRetornar'; na pagina onde o botao vai aparecer
<<<<<<< HEAD
//teste

// Define o tipo para as rotas da navegação
type RootStackParamList = {
  user: undefined;
  index: undefined;
  // outras rotas
};

// Define o tipo para as props
interface BotaoRetornarProps {
  destino: keyof RootStackParamList;
}

export default function BotaoRetornar({ destino }: BotaoRetornarProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(destino)}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: 10,
    top:30,
    padding: 10,
    backgroundColor: "teal",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
=======

export default function BotaoRetornar(props: {destino: string}) {
  return (
    <Link href={`./${props.destino}`}>
      <Ionicons name="arrow-back" size={50} color={Colors.verdeClaro} style={{width:"100%"}}/>
    </Link>
  );
}
>>>>>>> fix
