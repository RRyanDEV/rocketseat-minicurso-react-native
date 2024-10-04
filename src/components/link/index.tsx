import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { stylesLink } from "./styles";
import { colors } from "@/styles/colors";

type Props ={
    name: string,
    url: string,
    onDetails: () => void
}

export function Link({name, url, onDetails} : Props){
    return(<>
    <View style={stylesLink.contaier}>
        <View style={stylesLink.details}>
            <Text style={stylesLink.name} numberOfLines={1}>
                {name}
            </Text>
            <Text style={stylesLink.url} numberOfLines={1}>
                {url}
            </Text>
        </View>
        <TouchableOpacity onPress={onDetails}>
            <MaterialIcons name="more-horiz" size={20}
             color={colors.gray[400]}/>
        </TouchableOpacity>
    </View>
    </>)
}
