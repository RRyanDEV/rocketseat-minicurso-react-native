import { View, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { stylesIndex } from "@/components/index/styles"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";


export default function Index() {
    const {container,header,logo} = stylesIndex;
    const logoImage = "../../assets/images/logo.png"
    return(<>
    <View style={container}>
        <View style={header}>
        <Image source={require(logoImage)} style={logo}/>

        <TouchableOpacity>
            <MaterialIcons name="add" size={32} color={colors.green[300]}/>
        </TouchableOpacity>

        </View>
        <Categories/>
        <Link name="Github" url="https://github.com/RRyanDEV" onDetails={() => console.log("Clicou")
        }/>
    </View>
    </>)
};
