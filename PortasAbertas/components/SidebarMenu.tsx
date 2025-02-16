import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedView } from '@/components/ThemedView';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemedView style={styles.container}>
      {/* Botão de menu */}
      <TouchableOpacity style={styles.menuButton} onPress={() => setIsOpen(!isOpen)}>
        <Ionicons name="menu" size={24} />
      </TouchableOpacity>

      {/* Menu lateral */}
      {isOpen && (
        <ThemedView style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}><ThemedText type="subtitle">Painel usuários</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><ThemedText type="subtitle">Painel portas</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><ThemedText type="subtitle">Editar perfil</ThemedText></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><ThemedText type="subtitle">Sair</ThemedText></TouchableOpacity>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  menuButton: {
    padding: 10,
    backgroundColor: Colors.verdeClaro,
    borderRadius: 5,
  },
  menu: {
    position: "absolute",
    top: 50, 
    left: 50,
    width: 180, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
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
});
