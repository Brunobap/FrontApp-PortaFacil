import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedView } from '@/components/ThemedView';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemedView style={styles.container}>
      {/* Botão de menu */}
      <TouchableOpacity style={styles.menuButton} onPress={() => setIsOpen(!isOpen)}>
        <Ionicons name="menu" color = "white" size={24} />
      </TouchableOpacity>

      //se for adm retornar:
      {/* Menu lateral */}
      {isOpen && (
        <ThemedView style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Painel usuários</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Painel portas</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Editar perfil</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>Sair</Text></TouchableOpacity>
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
    position: "absolute",
    top: 50, 
    left: 50,
    width: 180, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
    paddingVertical: 10,
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
