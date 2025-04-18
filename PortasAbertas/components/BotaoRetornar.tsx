import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";

//como usar: chamar na pagina onde o botao vai aparecer:     <BotaoRetornar destino="nome da pagina onde deve ir" />
// add pagina no RootStackPAramList exemplo:   login: undefined;
//add import BotaoRetornar from '@/components/BotaoRetornar'; na pagina onde o botao vai aparecer

export default function BotaoRetornar() {
  return (
    <TouchableOpacity onPress={router.back}>
      <Ionicons name="arrow-back" size={50} color={Colors.verdeClaro} style={{width:"100%"}}/>
    </TouchableOpacity>
  );
}