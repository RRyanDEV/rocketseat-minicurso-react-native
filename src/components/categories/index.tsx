import { FlatList } from "react-native";

import { stylesCategories } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

export function Categories(){
    return(<> 
    <FlatList 
    data={categories}
    horizontal showsHorizontalScrollIndicator={false} 
    contentContainerStyle={stylesCategories.content} style={stylesCategories.list}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <Category name={item.name} icon={item.icon} isSelected={false}/>}
    />
    </>)
}