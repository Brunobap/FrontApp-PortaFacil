import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AdministrarSalaScreen() {
  
    type Usuario = {
        id: string;
        nome: string;
      };
  
    // Mock de dados dos usuários
    const usuarios: Usuario[] = [
        { id: '1', nome: 'DOUGLAS' },
        { id: '2', nome: 'DOUGLAS' },
        { id: '3', nome: 'DOUGLAS' },
      ];

  // Renderização de cada item da lista
const renderUsuario = ({ item }: { item: Usuario }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.nome}</Text>
      <TouchableOpacity>
        <Ionicons name="chevron-forward" size={24} color="#6A1B9A" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#6A1B9A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ADMINISTRAR SALA</Text>
        <TouchableOpacity>
          <Ionicons name="refresh" size={24} color="#6A1B9A" />
        </TouchableOpacity>
      </View>

      {/* Título e botão */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LATIN</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" />
          <Text style={styles.addButtonText}>Adicionar Usuário</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de usuários */}
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={renderUsuario}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A1B9A',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
});
