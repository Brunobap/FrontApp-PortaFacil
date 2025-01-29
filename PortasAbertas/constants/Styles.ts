import { StyleSheet } from "react-native";
import { Colors } from "./Colors";


export const styles = StyleSheet.create({
    titleContainer: {
        height: "75%",
        justifyContent: 'center',
        alignItems: "center",
        borderBottomEndRadius: 200,
        borderBottomStartRadius: 200,
        backgroundColor: Colors.verdeClaro
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contInput: {
        width: "100%",  
        alignItems: 'center',
        marginVertical: 10,
    },
    textInput: {
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: "white",
        width: "90%",
    },
    logo: {
        height: "60%",
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