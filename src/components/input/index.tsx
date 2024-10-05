import { TextInput, TextInputProps } from "react-native";
import { stylesInput } from "./styles";

import { colors } from "@/styles/colors";

export function Input({...rest} : TextInputProps) {
    return(<>
    <TextInput style={stylesInput.container}
    placeholderTextColor={colors.gray[400]}
        {...rest}/>
    </>)
};
