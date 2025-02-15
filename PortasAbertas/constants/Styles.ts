import { StyleSheet } from "react-native";
import { Colors } from "./Colors";


export const styles = StyleSheet.create({
    titleContainer: {
      height: "75%",
      width:"100%",
      justifyContent: 'center',
      alignItems: "center",
      borderBottomEndRadius: 200,
      borderBottomStartRadius: 200,
      backgroundColor: Colors.verdeClaro
    },
    container: {
      flex:1,
      width:"100%",
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
      borderColor: "grey",
      borderWidth: 2,
      width: "90%",
    },
    logo: {
      height: "60%",
      resizeMode: "contain",
    },
    btnPersonalizado: {
      borderColor: Colors.verdeClaro,
      borderWidth: 1,
      borderRadius: 15,
      alignItems:"center",
      margin: 15,
      padding: 15,
    },
    roundBox: {
      width:"90%",
      borderColor: "grey",
      borderWidth: 1,
      borderRadius: 20,
      margin: 5,
      marginTop: 12,
      padding: 5,
    },
    //AQUI COMEÇA O EditUser
    saveButton: {
      borderWidth: 2,
      borderColor: '#28A085',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 10,
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      marginBottom: 20,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 3,
    },
    saveButtonText: {
      color: '#28A085',
      fontSize: 16,
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: '#28A085',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    deleteButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    addButton: {
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: '#28A085',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    header: {
      marginTop: 30, 
      marginHorizontal: 10,
      paddingHorizontal: 10,
      alignItems: 'center', 
      justifyContent:"space-around", 
      width:"100%", 
      flexDirection: "row" 
    },
  });