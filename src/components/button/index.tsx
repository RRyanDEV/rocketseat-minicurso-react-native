import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { stylesButton } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest} : Props){
    return(<>
    <TouchableOpacity style={stylesButton.container} activeOpacity={0.7} {...rest}>
        <Text style={stylesButton.title}>
            {title}
        </Text>
    </TouchableOpacity>
    
    </>)
}