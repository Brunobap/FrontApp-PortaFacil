import { styles } from "@/constants/Styles";
import { Link } from "expo-router";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { BaseButton, GestureHandlerRootView } from "react-native-gesture-handler";


<<<<<<< HEAD:PortasAbertas/components/BotaoVazado.tsx
export default function BotaoVazado(props: {href?: string, legenda: string, onPress?: Function, size?: string, cor?: string}) {
=======
export default function BotaoPersonalizado(props: {href?: string, legenda: string, onPress?: Function, fundo?: any, type?: "link" | "title" | "default" | "defaultSemiBold" | "subtitle", cor?: ColorValue}) {
>>>>>>> fix:PortasAbertas/components/BotaoPersonalizado.tsx
    var estiloLocal;
    // Trocar a cor da borda, se especificado
    if (props.cor != undefined) {
        const estiloTemp = StyleSheet.create({
            corNova: {borderColor: props.cor}
        })
        estiloLocal = StyleSheet.flatten([styles.btnVazado, estiloTemp.corNova])
    } else 
        estiloLocal = styles.btnVazado


    // Caso o botão tenha a propriedade 'href' fazer um botão de navegação direto
    // Caso ele não tenha o link, ele é um botão de ação e usa a propriedade 'onPress'
    return (props.href != undefined ? (
        <Link href={props.href != undefined ? `./${props.href}` : './.'} style={estiloLocal}>
            <ThemedText type={props.size == "peq" ? "default" : "title"} style={{color: (props.cor == undefined ? Colors.verdeClaro : props.cor)}} >
                {props.legenda}
            </ThemedText>
        </Link>
    ) : (
        <GestureHandlerRootView>
<<<<<<< HEAD:PortasAbertas/components/BotaoVazado.tsx
            <BaseButton onPress={() => props.onPress?.()} style={estiloLocal}>
                <ThemedText type={props.size == "peq" ? "default" : "title"} style={{color: (props.cor == undefined ? Colors.verdeClaro : props.cor)}} >
=======
            <BaseButton onPress={() => props.onPress?.()} style={[estiloLocal, {backgroundColor: props.fundo ? cor : undefined}]}>
                <ThemedText type={props.type} style={{justifyContent:"center", color: (props.fundo ? "white" : cor)}} >
>>>>>>> fix:PortasAbertas/components/BotaoPersonalizado.tsx
                    {props.legenda}
                </ThemedText>
            </BaseButton>
        </GestureHandlerRootView>
    ))
}