import { View, Image, TouchableOpacity, FlatList} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"

import { stylesIndex } from "@/components/index/styles"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { stylesLink } from "@/components/link/styles";
import ModalComponent from "@/components/modal";

import { router } from "expo-router";
import { categories } from "@/utils/categories"


export default function Index() {

    const [category, setCategory] = useState(categories[0].name)

    const {container,header,logo} = stylesIndex;
    const logoImage = "../../assets/images/logo.png"
    return(<>
    <View style={container}>
        <View style={header}>
        <Image source={require(logoImage)} style={logo}/>

        <TouchableOpacity onPress={() => router.navigate("/add")}>
            <MaterialIcons name="add" size={32} color={colors.green[300]}/>
        </TouchableOpacity>

        </View>
        <Categories onChange={setCategory} selected={category} />
        

        <FlatList data={["1", "2", "3", "4", "5"]}
        keyExtractor={(item) => item}
        renderItem={() => (
        <Link 
            name="Github" 
            url="https://github.com/RRyanDEV" 
            onDetails={() => console.log("Clicou")}
            />
        )}
        style={stylesLink.stylesLinkList} 
        contentContainerStyle={stylesLink.stylesLinksContent} showsVerticalScrollIndicator={false}/>

        {/* <ModalComponent/> */}



        
    </View>
    </>)
};
