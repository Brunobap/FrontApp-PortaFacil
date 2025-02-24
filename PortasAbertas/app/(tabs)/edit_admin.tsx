import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import SeletorUsuario from '@/components/SeletorUsuario';
import { View } from 'react-native';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';


export default function EditarUsuarioScreen() {
  // Estados dos campos
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [usuarioSelecionado, setUsuarioSelecionado] = useState("");

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
      {/* Ao clicar no botão Salvar, a aplicação deve enviar os dados atualizados do formulário para a API.*/}
      <View style={{ marginTop: 20, width: '100%',}}>
        <BotaoPersonalizado legenda="Salvar" type="title" />
      </View>
    
      </ThemedView>
    </ThemedView>
  );
}
