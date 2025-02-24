import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import SeletorUsuario from '@/components/SeletorUsuario';
import { View } from 'react-native';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { useLocalSearchParams } from 'expo-router'; 

export default function EditarUsuarioScreen() {
  // Estados dos campos
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [usuarioSelecionado, setUsuarioSelecionado] = useState("");

  // Acessa os parâmetros passados na navegação
  const { nome } = useLocalSearchParams();

  // Preenche o campo "Nome" com o valor passado como parâmetro
  React.useEffect(() => {
    if (nome) {
      setNomeUsuario(nome.toString());
    }
  }, [nome]);

  return (
    <ThemedView style={styles.container}>
      {/* Barra Superior */}
      <BarraSuperior titulo="EDITAR USUÁRIO" show="voltar" destinoVoltar="" />

      {/* Formulário centralizado */}
      <ThemedView
        style={[
          styles.roundBox,
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        {/* Campo Nome */}
        <CaixaTextInput
          legenda="Nome:"
          onChange={setNomeUsuario}
          value={nomeUsuario}
        />
        <SeletorUsuario onSelect={setUsuarioSelecionado} />

        {/* Botão Salvar */}
        <View style={{ marginTop: 20, width: '100%' }}>
          <BotaoPersonalizado legenda="Salvar" type="title" />
        </View>
      </ThemedView>
    </ThemedView>
  );
}