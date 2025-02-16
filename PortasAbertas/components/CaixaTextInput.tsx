import { styles } from "@/constants/Styles";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { KeyboardTypeOptions, TextInput } from "react-native";

export default function CaixaTextInput(props: {legenda: string, tipo?: KeyboardTypeOptions, value: any, onChange: any}) {
    return (
        <ThemedView style={styles.contInput}>
          <ThemedText type='title' style={{width: "90%"}}>{props.legenda}</ThemedText>
          <TextInput keyboardType={props.tipo} onChangeText={e => props.onChange?.(e)} value={props.value} style={styles.textInput}></TextInput>
        </ThemedView>
    )
}