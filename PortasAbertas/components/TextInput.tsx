import { styles } from "@/constants/Styles";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { TextInput } from "react-native";

export default function CaixaTextInput(props: {legenda: string, value: string | number, onChange: Function}) {
    return (
        <ThemedView style={styles.contInput}>
          <ThemedText type='title' style={{width: "90%"}}>{props.legenda}</ThemedText>
          <TextInput onChange={(e) => props.onChange}  style={styles.textInput}></TextInput>
        </ThemedView>
    )
}