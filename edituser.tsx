import React, { useState } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import SidebarMenu from '@/components/SidebarMenu'; // Importando o menu

export default function EditarUsuarioScreen() {
  const [emailUsuario, setEmailUsuario] = useState('douglas@gmail.com');

  return (
    <ThemedView style={styles.container}>
      {/* Menu lateral */}
      <View style={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
        <SidebarMenu />
      </View>

      {/* Título */}
      <ThemedView style={{ marginTop: 30, alignItems: 'center' }}>
        <ThemedText type="title" style={{ color: Colors.verdeClaro }}>
          EDITAR USUÁRIO
        </ThemedText>
      </ThemedView>

      {/* Formulário */}
      <ScrollView style={styles.roundBox}>
        <ThemedText style={{ fontWeight: 'bold', marginBottom: 5 }}>
          Usuário
        </ThemedText>

        <TextInput
          style={styles.input}
          value={emailUsuario}
          onChangeText={setEmailUsuario}
          keyboardType="email-address"
        />

        {/* Botão Salvar */}
        <TouchableOpacity style={styles.saveButton}>
          <ThemedText style={styles.saveButtonText}>Salvar</ThemedText>
        </TouchableOpacity>

        {/* Botão Deletar */}
        <TouchableOpacity style={styles.deleteButton}>
          <ThemedText style={styles.deleteButtonText}>Deletar Usuário</ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}
