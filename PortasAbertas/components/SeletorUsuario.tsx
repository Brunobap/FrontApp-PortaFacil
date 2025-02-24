import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Modal, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// como usar:  no export defaut adicione: const [usuarioSelecionado, setUsuarioSelecionado] = useState("");
// No retorno add:  {/* Seletor de usuário */}
//      <SeletorUsuario onSelect={setUsuarioSelecionado} />

interface SeletorUsuarioProps {
  onSelect: (usuario: string) => void;
}

const opcoesUsuario = ["Padrão", "Administrador", "Coordenador", "Servidor"];

export default function SeletorUsuario({ onSelect }: SeletorUsuarioProps) {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState("Padrão");
  const [modalVisivel, setModalVisivel] = useState(false);

  function selecionarUsuario(usuario: string) {
    setUsuarioSelecionado(usuario);
    onSelect(usuario); // Atualiza na página pai
    setModalVisivel(false); // Fecha o modal após a seleção
  }

  return (
    <View style={styles.container}>
      {/* Botão de seleção */}
      <TouchableOpacity style={styles.botao} onPress={() => setModalVisivel(true)}>
        <Text style={styles.texto}>{usuarioSelecionado}</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      {/* Modal de seleção */}
      <Modal visible={modalVisivel} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <FlatList
              data={opcoesUsuario}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.opcao} onPress={() => selecionarUsuario(item)}>
                  <Text style={styles.opcaoTexto}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  botao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    marginVertical: 50,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 8,
    shadowRadius: 8,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Fundo escuro para destacar o modal
  },
  modal: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    padding: 10,
  },
  opcao: {
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  opcaoTexto: {
    fontSize: 16,
  },
});
