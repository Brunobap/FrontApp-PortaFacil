import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedView } from '@/components/ThemedView';
import Ionicons from "react-native-vector-icons/Ionicons";
<<<<<<< HEAD
=======
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { Link, router } from "expo-router";
>>>>>>> fix

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function deslogar() {
    // Fechar a caixa do menu
    setIsOpen(false)

    // Tirar a informação do usuário

    // Navegar de volta a tela de login
    router.navigate("/login")
  }


  return (
    <ThemedView style={{position:"relative", zIndex: 10}}>
      {/* Botão de menu */}
<<<<<<< HEAD
      <TouchableOpacity style={styles.menuButton} onPress={() => setIsOpen(!isOpen)}>
        <Ionicons name="menu" color = "white" size={24} />
      </TouchableOpacity>
=======
      <Ionicons name="menu" onPress={toggleMenu} color={Colors.verdeClaro} size={50} />
>>>>>>> fix

      //se for adm retornar:
      {/* Menu lateral */}
      {isOpen && (
        <ThemedView style={styles.menu}>
<<<<<<< HEAD
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Painel usuários</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Painel portas</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Editar perfil</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Sair</Text></TouchableOpacity>
=======
          <Link style={styles.menuItem} onPress={toggleMenu} href={".."}><ThemedText type="subtitle">Painel usuários</ThemedText></Link>
          <Link style={styles.menuItem} onPress={toggleMenu} href={".."}><ThemedText type="subtitle">Painel portas</ThemedText></Link>
          <Link style={styles.menuItem} onPress={toggleMenu} href={".."}><ThemedText type="subtitle">Editar perfil</ThemedText></Link>
          <TouchableOpacity style={styles.menuItem} onPress={deslogar}><ThemedText type="subtitle">Sair</ThemedText></TouchableOpacity>
>>>>>>> fix
        </ThemedView>
      )}
    </ThemedView>

    //se for usuario retornar:
    // {/* Menu lateral */}
    //  {isOpen && (
    //   <ThemedView style={styles.menu}>
    //     <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Editar perfil</Text></TouchableOpacity>
    //     <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Sair</Text></TouchableOpacity>
    //    </ThemedView>
    //  )}
    // </ThemedView>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    position: "relative",
  },
  menuButton: {
    top:20,
    padding: 10,
    backgroundColor: "teal",
    borderRadius: 5,
  },
  menu: {
    backgroundColor: "white",
=======
  menu: {    
>>>>>>> fix
    position: "absolute",
    zIndex: 10,
    top: 50, 
    width: 200, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems:"center",
  },
  menuItem: {
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
