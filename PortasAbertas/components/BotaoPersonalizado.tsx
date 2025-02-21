import { styles } from "@/constants/Styles";
import { Link } from "expo-router";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { ColorValue, StyleSheet } from "react-native";
import { BaseButton, GestureHandlerRootView } from "react-native-gesture-handler";
import { tipoTexto } from "@/constants/Types";


export default function BotaoPersonalizado(props: {href?: string, legenda: string, onPress?: Function, fundo?: any, type?: tipoTexto, cor?: ColorValue}) {
    const cor = (props.cor == undefined ? Colors.verdeClaro : props.cor)
    const estiloDinamico = {backgroundColor: props.fundo ? cor : undefined, borderColor: props.fundo ? "transparent" : cor}

    // Caso o botão tenha a propriedade 'href' fazer um botão de navegação direto
    // Caso ele não tenha o link, ele é um botão de ação e usa a propriedade 'onPress'
    return (props.href != undefined ? (
        <Link href={`./${props.href}`} style={[styles.btnPersonalizado, estiloDinamico]}>
            <ThemedText type={props.type} style={{justifyContent:"center", color: (props.fundo ? "white" : cor)}} >
                {props.legenda}
            </ThemedText>
        </Link>
    ) : (
        <GestureHandlerRootView>
            <BaseButton onPress={() => props.onPress?.()} style={[styles.btnPersonalizado, estiloDinamico]}>
                <ThemedText type={props.type} style={{justifyContent:"center", color: (props.fundo ? "white" : cor)}} >
                    {props.legenda}
                </ThemedText>
            </BaseButton>
        </GestureHandlerRootView>
    ))
}