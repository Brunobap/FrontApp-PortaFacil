
import * as LocalAuth from 'expo-local-authentication';

// Função auxiliar para salvar a biometria da pessoa, se tiver como
export const checarBiometria = async () => {
    // Verificar se o celular tem o recurso necessário
    const flgTem = await LocalAuth.hasHardwareAsync();
    if (!flgTem) return true

    // Enviar a mensagem para coletar a biometria
    const biometricAuth = await LocalAuth.authenticateAsync({
        promptMessage: 'Por favor, confirme sua permissão',
        disableDeviceFallback: true,
    });

    // Avisar caso não tenha funcionado
    if (!biometricAuth.success) Alert.alert("Não foi possível concluir o login.","Por favor, confirme sua biometria.")

    // Retornar se foi possível usar a biometria, ou não
    return biometricAuth.success
}
