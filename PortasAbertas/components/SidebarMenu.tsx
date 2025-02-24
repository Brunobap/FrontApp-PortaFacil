import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ThemedView } from '@/components/ThemedView';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { Link, router } from "expo-router";
import { userAdm, userAluno } from "@/constants/dummies";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() { setIsOpen(!isOpen) }

  function deslogar() {
    setIsOpen(false);
    AsyncStorage.multiRemove(["authUser", "nomeUsuario", "emailUsuario", "nivelUsuario"]);
    router.navigate("/");
  }

  const [isAdmin, setIsAdmin] = useState<boolean>();
  useEffect(() => {
    const user = userAdm;
    setIsAdmin(user.nivel === "admin");
  }, [isAdmin]);

  return (
    <ThemedView style={{ position: "relative", zIndex: 10 }}>
      <Ionicons name="menu" onPress={toggleMenu} color={Colors.verdeClaro} size={50} />

      {isOpen && (
        <ThemedView style={styles.menu}>
          {isAdmin && (
            <>
              <Link style={styles.menuItem} key={1} onPress={toggleMenu} href="/(hidden)/painel_usuarios">
                <ThemedText type="subtitle">Painel usuários</ThemedText>
              </Link>
              <Link style={styles.menuItem} key={2} onPress={toggleMenu} href="/(hidden)/painel_portas">
                <ThemedText type="subtitle">Painel portas</ThemedText>
              </Link>
            </>
          )}
          <Link style={styles.menuItem} onPress={toggleMenu} href={"/(hidden)/edit_user"}>
            <ThemedText type="subtitle">Editar perfil</ThemedText>
          </Link>
          <TouchableOpacity style={styles.menuItem} onPress={deslogar}>
            <ThemedText type="subtitle">Sair</ThemedText>
          </TouchableOpacity>
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

