import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BotaoColorido from '@/components/BotaoVazado';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function EditarUsuarioScreen() {
  const [emailUsuario, setEmailUsuario] = useState('douglas@gmail.com');

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#6A1B9A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EDITAR USUÁRIO</Text>
        <TouchableOpacity>
          <Ionicons name="refresh" size={24} color="#6A1B9A" />
        </TouchableOpacity>
      </View>

      {/* Caixa de Formulário */}
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          value={emailUsuario}
          onChangeText={setEmailUsuario}
          keyboardType="email-address"
        />

        {/* Botão Salvar */}
        <BotaoColorido legenda='       Salvar' href={'./'} onPress={() => EditarUsuarioScreen()} />
        
        {/* Botão Deletar */}
         <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Deletar Usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fundo cinza claro
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  contentContainer: {
    backgroundColor: 'white', // Fundo branco da caixa principal
    borderRadius: 15, // Bordas arredondadas
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
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
    elevation: 3, // Sombra para Android
  },
  saveButton: {
    borderWidth: 2,
    borderColor: '#28A085', // Verde claro da borda do botão
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#28A085',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#28A085', // Verde escuro para o botão de deletar
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
