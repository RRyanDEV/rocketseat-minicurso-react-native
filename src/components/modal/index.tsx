import { View, Text, Modal, TouchableOpacity } from "react-native";
import { stylesModal } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

import { Option } from "../option";

export default function ModalComponent(){
    const {modalContainer,modalContent,modalHeader, modalCategory, modalLinkName, modalUrl, modalFooter} = stylesModal;
    return(
    <>
    <Modal transparent>
        <View style={modalContainer}>
            <View style={modalContent}>
                <View style={modalHeader}>
                    <Text style={modalCategory}> Curso </Text>
                    <TouchableOpacity>
                    <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                    </TouchableOpacity>
                </View>

                <Text style={modalLinkName}> Github</Text>
                <Text style={modalUrl}> https://github.com/RRyanDEV</Text>
                <View style={modalFooter}>
                    <Option name="Excluir" icon="delete" variant="secondary"/>
                    <Option name="Abrir" icon="language"/>
                </View>
            </View>
        </View>
    </Modal>
    </>)
}