import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


//como usar: na pagina use: import PasswordInput from '@/components/PasswordInput';
// no returno use: <PasswordInput placeholder="Senha" value={senha} onChangeText={setSenha} />

// Definição das props com tipos
interface PasswordInputProps {
  placeholder?: string; // Opcional
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder = "Digite sua senha", value, onChangeText }) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureText}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={() => setSecureText(!secureText)}>
        <Ionicons name={secureText ? "eye-off" : "eye"} size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    marginStart:13,
    height: 55,
    width: "90%",
  },

  input: {
    flex: 1,
    height: 40,
  },
});

export default PasswordInput;
