import { Text, Pressable, PressableProps} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { stylesCategory } from "./styles"

type Categories = PressableProps & {
    isSelected: boolean,
    name: string,
    icon: keyof typeof MaterialIcons.glyphMap,
}

export function Category({name, icon, isSelected, ...rest} : Categories) {
const color = isSelected ? colors.green[300] : colors.gray[400]
return(<>
        <Pressable style={stylesCategory.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={color}/>
            <Text style={[stylesCategory.name, { color }]}>{name}</Text>
        </Pressable>
    </>)
};
