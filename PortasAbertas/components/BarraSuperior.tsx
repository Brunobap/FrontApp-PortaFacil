
import { Colors } from "@/constants/Colors";
import SidebarMenu from "./SidebarMenu";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { styles } from "@/constants/Styles";
import BotaoRetornar from "./BotaoRetornar";


export default function BarraSuperior(props: {titulo: string, show: "menu" | "menu-comp" | "voltar", destinoVoltar?: string }) {
    return (
        <ThemedView style={styles.header}>          
            {[ // Possíveis botões para o canto superior esquerdo, só um pode aparecer por vez
                props.show === "menu" ? <SidebarMenu /> : <></>, // Menu lateral
                props.show === "menu-comp" ? <SidebarMenu isAdmin={true} /> : <></>, // Menu lateral
                props.show === "voltar" ? <BotaoRetornar /> : <></>,    // Botão voltar
            ]}

            {/* Título da tela, obrigatório */}
            <ThemedText type="subtitle"> {props.titulo} </ThemedText>
        </ThemedView>
    )
}