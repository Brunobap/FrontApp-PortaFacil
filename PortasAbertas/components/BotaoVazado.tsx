import { styles } from "@/constants/Styles";
import { Link } from "expo-router";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export default function BotaoVazado(props: {href?: string, legenda: string, onPress?: Function, size?: string, cor?: string}) {
    var estiloLocal;
    // Trocar a cor da borda, se especificado
    if (props.cor != undefined) {
        const estiloTemp = StyleSheet.create({
            corNova: {borderColor: props.cor}
        })
        estiloLocal = StyleSheet.flatten([styles.btnVazado, estiloTemp.corNova])
    } else 
        estiloLocal = styles.btnVazado

    return (
        <Link href={`./${props.href}`} style={estiloLocal}>
            <ThemedText 
                type={props.size == "peq" ? "default" : "title"} 
                style={{color: (props.cor == undefined ? Colors.verdeClaro : props.cor)}} >{props.legenda}</ThemedText>
        </Link>
    )
}