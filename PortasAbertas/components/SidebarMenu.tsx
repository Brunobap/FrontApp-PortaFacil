import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import { ThemedView } from '@/components/ThemedView';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { Link, router } from "expo-router";
import { userAdm, userAluno } from "@/constants/dummies";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Logout } from "@/scripts/api-auth";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() { setIsOpen(!isOpen) }

  async function deslogar() {
    // Fechar a caixa do menu
    setIsOpen(false)

    // Avisar o backend que o usuário foi deslogado
    AsyncStorage.getItem("accessToken").then(async token => {
      // Enviar o pedido ao servidor
      const resposta = await Logout(token)
  
      // Se o resultado não for bom, devolver um aviso
      if (resposta == null) {
        // Alerta para celular
        Alert.alert("Erro ao deslogar.","Por favor, reinicie o aplicativo")
        // Alerta para computador
        alert("Erro ao deslogar.\nPor favor, reinicie o aplicativo")
        return
    
      // Se for, ...
      } else {
        // Tirar a autenticação do usuário
        AsyncStorage.clear()
    
        // Navegar de volta a tela de login
        router.navigate("/")
      }
    })
  }

  const [isAdmin, setIsAdmin] = useState<boolean>();
  useEffect(() => {
    const user = userAdm;
    setIsAdmin(user.nivel === "administrador")
  }, [isAdmin])

  return (
    <ThemedView style={{ position: "relative", zIndex: 10 }}>
      <Ionicons name="menu" onPress={toggleMenu} color={Colors.verdeClaro} size={50} />

      {isOpen && (
        <ThemedView style={styles.menu}>
          { // Esses botões só aparecem quando tem permissão de admin
            isAdmin ? [
              <Link style={styles.menuItem} key={1} onPress={toggleMenu} href={".."}><ThemedText type="subtitle">Painel usuários</ThemedText></Link>,
              <Link style={styles.menuItem} key={2} onPress={toggleMenu} href={".."}><ThemedText type="subtitle">Painel portas</ThemedText></Link>              
            ] : <></>
          }
          <Link style={styles.menuItem} onPress={toggleMenu} href={".."}><ThemedText type="subtitle">Editar perfil</ThemedText></Link>
          <TouchableOpacity style={styles.menuItem} onPress={async() => await deslogar()}><ThemedText type="subtitle">Sair</ThemedText></TouchableOpacity>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    zIndex: 10,
    top: 50,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
  },
  menuItem: {
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

