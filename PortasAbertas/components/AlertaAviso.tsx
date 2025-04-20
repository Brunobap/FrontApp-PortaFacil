import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface AlertaAvisoProps {
  mensagem: string;
}

export default function AlertaAviso({ mensagem }: AlertaAvisoProps) {
  return (
    <View style={{
      backgroundColor: '#FFF3CD',
      borderLeftWidth: 6,
      borderLeftColor: '#FFA500',
      padding: 10,
      marginVertical: 10,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <MaterialIcons name="warning" size={24} color="#FFA500" style={{ marginRight: 10 }} />
      <Text style={{ color: '#856404', fontSize: 16, flex: 1 }}>{mensagem}</Text>
    </View>
  );
}