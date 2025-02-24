import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';


export default function EditarUsuarioScreen() {
  // Estados dos campos
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [nivelAcesso, setNivelAcesso] = useState('ALUNO');

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
      
      </ThemedView>
    </ThemedView>
  );
}
