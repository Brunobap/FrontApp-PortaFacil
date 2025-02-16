import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import SidebarMenu from '@/components/SidebarMenu'; // Menu lateral
import BlocoUsuario  from '@/components/BlocoUsuario'; // Componente de usuários
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ícone para o botão
import BarraSuperior from '@/components/BarraSuperior';
import BotaoVazado from '@/components/BotaoPersonalizado';

export default function AdministrarSalaScreen() {
  const [usuarios, setUsuarios] = useState<{ id: string; nome: string }[]>([]);

  // Simulação de requisição de usuários
  useEffect(() => {
    setUsuarios([
      { id: '1', nome: 'DOUGLAS' },
      { id: '2', nome: 'DOUGLAS' },
      { id: '3', nome: 'DOUGLAS' },
    ]);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <BarraSuperior titulo="Administrar sala" show="menu" />

      {/* Conteúdo */}
      <ScrollView style={styles.roundBox}>
        {/* Cabeçalho da lista */}
        <ThemedView style={styles.header}>
          <ThemedText type='title'>LATIN</ThemedText>
          <BotaoVazado type="subtitle" legenda='+ Adicionar Usuário' />
        </ThemedView>

        {/* Lista de usuários */}
        {usuarios.map((user) => (
          <BlocoUsuario key={user.id} nome={user.nome} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

