import { styles } from "@/constants/Styles";
import { ExternalPathString, Link, RelativePathString } from "expo-router";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { Button } from "react-native";


export default function BotaoVazado(props: {href: RelativePathString | ExternalPathString, legenda: string, onPress: Function | null}) {
    return (
        <Link onPress={() => props.onPress} href={props.href} style={{borderWidth: 1, borderRadius: 15, margin: 15, padding: 15, borderColor: Colors.verdeClaro}}>
            <ThemedText type="title" style={{color: Colors.verdeClaro}} >{props.legenda}</ThemedText>
        </Link>
    )
}