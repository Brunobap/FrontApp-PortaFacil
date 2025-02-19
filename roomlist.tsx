<<<<<<< HEAD:roomlist.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import SidebarMenu from '@/components/SidebarMenu'; // Menu lateral
import BlocoUsuario  from '@/components/BlocoUsuario'; // Componente de usuários
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ícone para o botão

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
      {/* Menu lateral */}
      <View style={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
        <SidebarMenu />
      </View>

      {/* Título */}
      <ThemedView style={{ marginTop: 30, alignItems: 'center' }}>
        <ThemedText type="title" style={{ color: Colors.verdeClaro }}>
          ADMINISTRAR SALA
        </ThemedText>
      </ThemedView>

      {/* Conteúdo */}
      <ScrollView style={styles.roundBox}>
        {/* Cabeçalho da lista */}
        <View style={styles.header}>
          <ThemedText style={styles.roomTitle}>LATIN</ThemedText>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={20} color="white" />
            <ThemedText style={styles.addButtonText}>Adicionar Usuário</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Lista de usuários */}
        {usuarios.map((user) => (
          <BlocoUsuario key={user.id} nome={user.nome} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

=======
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BlocoUsuario  from '@/components/BlocoUsuario'; // Componente de usuários
import BarraSuperior from '@/components/BarraSuperior';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';

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
      <BarraSuperior titulo="Administrar sala" show="voltar"/>

      {/* Conteúdo */}
      <ScrollView style={styles.roundBox}>
        {/* Cabeçalho da lista */}
        <ThemedView style={styles.header}>
          <ThemedText type='title'>LATIN</ThemedText>
          <BotaoPersonalizado fundo type="subtitle" legenda='+ Adicionar Usuário' />
        </ThemedView>

        {/* Lista de usuários */}
        {usuarios.map((user) => (
          <BlocoUsuario key={user.id} nome={user.nome} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

>>>>>>> fix:PortasAbertas/app/(tabs)/adm_room.tsx
