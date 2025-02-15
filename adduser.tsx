import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BotaoColorido from '@/components/BotaoVazado';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/constants/Styles';

export default function AdicionarUsuarioScreen() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <View style={{flex:1}}>
      {/* Cabeçalho */}
      <View style={style.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#6A1B9A" />
        </TouchableOpacity>
        <Text style={style.headerTitle}>ADICIONAR USUÁRIO</Text>
        <TouchableOpacity>
          <Ionicons name="refresh" size={24} color="#6A1B9A" />
        </TouchableOpacity>
      </View>

      {/* Caixa de Formulário */}
      <View style={style.contentContainer}>
        <Text style={style.label}>Usuário</Text>
        <TextInput
          style={style.input}
          placeholder="Digite o nome do usuário"
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />
         {/* Botão para logar */}
              <BotaoColorido legenda='Adicionar >' href={'./'} onPress={() => AdicionarUsuarioScreen()} />
      </View>
    </View>
    
  );
  
}

const style = StyleSheet.create({
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
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#28A085', // Verde claro da borda do botão
  },
  addButtonText: {
    color: '#28A085', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
