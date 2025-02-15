import React, { useState } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import SidebarMenu from '@/components/SidebarMenu'; // Importando o menu
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ícone para o botão

export default function AdicionarUsuarioScreen() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <ThemedView style={styles.container}>
      
      {/* Título */}
      <ThemedView style={{alignItems: 'center', width:'100%', flexDirection:'row', justifyContent:'space-evenly' }}>
        <SidebarMenu/>
        <ThemedText type="title" style={{ color: Colors.verdeClaro }}>
          ADICIONAR USUÁRIO
        </ThemedText>
      </ThemedView>

      {/* Formulário */}
      <ScrollView style={styles.roundBox}>
        <ThemedText style={{ fontWeight: 'bold', marginBottom: 5 }}>
          Usuário
        </ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome do usuário"
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />

        {/* Botão Adicionar */}
        <TouchableOpacity style={styles.addButton}>
          <ThemedText style={styles.addButtonText}>Adicionar</ThemedText>
          <Ionicons name="chevron-forward" size={20} color={Colors.verdeClaro} />
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}
