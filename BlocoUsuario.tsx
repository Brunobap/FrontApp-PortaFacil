import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ícone da seta

// Definição das props esperadas
interface BlocoUsuarioProps {
  nome: string;
}

export default function BlocoUsuario({ nome }: BlocoUsuarioProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{nome}</Text>
      <TouchableOpacity>
        <Ionicons name="chevron-forward" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    elevation: 3, // Sombra para Android
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
