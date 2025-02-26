
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ícone da seta
import { ThemedText } from './ThemedText';
import { Link } from 'expo-router';
import { objUser } from '@/constants/Types';
import { styles } from '@/constants/Styles';

// Definição das props esperadas
interface BlocoUsuarioProps {
  user: objUser;
}

export default function BlocoUsuario({ user }: BlocoUsuarioProps) {
  return (
    <Link href={`/edit_user?user=${user.user}`} style={styles.card}>
      <ThemedText type='defaultSemiBold'>{user.user}</ThemedText>
      <Ionicons name="chevron-forward" size={24} color="#000" />
    </Link>
  );
}