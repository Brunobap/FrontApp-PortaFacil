import { styles } from "@/constants/Styles";
import { Link } from "expo-router";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { ColorValue, StyleSheet } from "react-native";
import { BaseButton, GestureHandlerRootView } from "react-native-gesture-handler";


export default function BotaoPersonalizado(props: {href?: string, legenda: string, onPress?: Function, fundo?: any, type?: "link" | "title" | "default" | "defaultSemiBold" | "subtitle", cor?: ColorValue}) {
    var estiloLocal;
    // Trocar a cor da borda, se especificado
    if (props.cor != undefined) {
        const estiloTemp = StyleSheet.create({
            corNova: {borderColor: props.cor}
        })
        estiloLocal = StyleSheet.flatten([styles.btnPersonalizado, estiloTemp.corNova])

    // ..., se não, usar o estilo original 
    } else estiloLocal = styles.btnPersonalizado

    const cor = (props.cor == undefined ? Colors.verdeClaro : props.cor)

    // Caso o botão tenha a propriedade 'href' fazer um botão de navegação direto
    // Caso ele não tenha o link, ele é um botão de ação e usa a propriedade 'onPress'
    return (props.href != undefined ? (
        <Link href={props.href != undefined ? `./${props.href}` : './'} style={[estiloLocal, {backgroundColor: props.fundo ? props.cor : undefined}]}>
            <ThemedText type={props.type} style={{justifyContent:"center", color: (props.fundo ? "white" : cor)}} >
                {props.legenda}
            </ThemedText>
        </Link>
    ) : (
        <GestureHandlerRootView>
            <BaseButton onPress={() => props.onPress?.()} style={[estiloLocal, {backgroundColor: props.fundo ? cor : undefined}]}>
                <ThemedText type={props.type} style={{justifyContent:"center", color: (props.fundo ? "white" : cor)}} >
                    {props.legenda}
                </ThemedText>
            </BaseButton>
        </GestureHandlerRootView>
    ))
}