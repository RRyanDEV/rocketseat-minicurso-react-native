import { View, Text, Modal, TouchableOpacity } from "react-native";
import { stylesModal } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

import { Option } from "../option";

export default function ModalComponent(){
    return(
    <>
    <Modal transparent>
        <View style={stylesModal.modalContainer}>
            <View style={stylesModal.modalContent}>
                <View style={stylesModal.modalHeader}>
                    <Text style={stylesModal.modalCategory}> Curso </Text>
                    <TouchableOpacity>
                    <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                    </TouchableOpacity>
                </View>

                <Text style={stylesModal.modalLinkName}> Github</Text>
                <Text style={stylesModal.modalUrl}> https://github.com/RRyanDEV</Text>
                <View style={stylesModal.modalFooter}>
                    <Option name="Excluir" icon="delete" variant="secondary"/>
                    <Option name="Abrir" icon="language"/>
                </View>
            </View>
        </View>
    </Modal>
    </>)
}