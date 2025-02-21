import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BlocoUsuario  from '@/components/BlocoUsuario'; // Componente de usuários
import BarraSuperior from '@/components/BarraSuperior';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { objUser } from '@/constants/Types';
import { GetAdminsRoom } from '@/scripts/api-room';
import { useLocalSearchParams } from 'expo-router';

export default function AdministrarSalaScreen() {
  const [usuarios, setUsuarios] = useState<objUser[]>([]);

  // Simulação de requisição de usuários
  useEffect(() => {
    setUsuarios(GetAdminsRoom());
  }, [usuarios]);

  // Pegar o nome da porta pela propriedade do link
  const { porta } = useLocalSearchParams<{ porta?: string; }>();

  return (
    <ThemedView style={styles.container}>
      <BarraSuperior titulo="ADMINISTRAR PORTA" show="voltar" destinoVoltar='portas'/>

      {/* Conteúdo */}
      <ScrollView style={styles.roundBox}>
        {/* Cabeçalho da lista */}
        <ThemedView style={[styles.header, {margin:0}]}>
          <ThemedText type='title'>"{porta}"</ThemedText>
          <BotaoPersonalizado href={`add_user?porta=${porta}`} fundo type="defaultSemiBold" legenda='+ Adicionar Usuário' />
        </ThemedView>

        {/* Lista de usuários */}
        {usuarios.map((user) => (
          <BlocoUsuario key={user.id} user={user} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

