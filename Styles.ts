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
        resizeMode: "contain",
    },
    btnLink: {
        borderColor: Colors.verdeClaro,
        borderWidth: 1,
        borderRadius: 15,
        margin: 15,
        padding: 15,
    },
    roundBox: {
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
    //FIM do edituser e INCIO do adduser
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
      addButtonText: {
        color: '#28A085',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
      },
    // FIM adduser e INICIO ROOMLIST
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      roomTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
      },
  });