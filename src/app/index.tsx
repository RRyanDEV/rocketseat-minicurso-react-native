import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useCallback } from "react";

import { stylesIndex } from "@/components/index/styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { stylesLink } from "@/components/link/styles";

import { linkStorage, LinkStorage } from "@/storage/link-storage";

import { router, useFocusEffect } from "expo-router";
import { categories } from "@/utils/categories";

// Modal
import { stylesModal } from "@/components/modal/styles";
import { Option } from "@/components/option";
//

export default function Index() {
  const {
    modalContainer,
    modalContent,
    modalHeader,
    modalCategory,
    modalLinkName,
    modalUrl,
    modalFooter,
  } = stylesModal;

  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);
  const { container, header, logo } = stylesIndex;
  const logoImage = "../../assets/images/logo.png";
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState<LinkStorage>({} as LinkStorage);

  async function getLinks() {
    // Filtra os links em exibição e mostrar somente o de determinada categoria
    try {
      const response = await linkStorage.get();
      const filtered = response.filter((link) => link.category === category);

      setLinks(filtered);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links");
    }
  }

  function handleDetails(selected: LinkStorage) {
    // Pega as informações de um dado selecionado da lista e exibe no modal
    setShowModal(true);
    setLink(selected);
  }

async function linkRemove() {
    try{
    await linkStorage.remove(link.id)
    getLinks()
    setShowModal(false)
    } catch (error){
        Alert.alert("Erro", "Não foi possível excluir")
    }
}

function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir o link?", [
        {
            style: "cancel", text: "Não"
        },
        {
         text: "Sim", onPress: linkRemove
        }
    ])
}

async function handleOpen() {
    try{
        await Linking.openURL(link.url)
        setShowModal(false)
    }catch (error){
        Alert.alert("Link" ,"Não foi possível abrir o link" )
        console.log(error)
    }
}

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <>
      <View style={container}>
        <View style={header}>
          <Image source={require(logoImage)} style={logo} />

          <TouchableOpacity onPress={() => router.navigate("/add")}>
            <MaterialIcons name="add" size={32} color={colors.green[300]} />
          </TouchableOpacity>
        </View>
        <Categories onChange={setCategory} selected={category} />

        <FlatList
          data={links}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              name={item.name}
              url={item.url}
              onDetails={() => handleDetails(item)}
            />
          )}
          style={stylesLink.stylesLinkList}
          contentContainerStyle={stylesLink.stylesLinksContent}
          showsVerticalScrollIndicator={false}
        />

        <Modal transparent visible={showModal} animationType="slide">
          <View style={modalContainer}>
            <View style={modalContent}>
              <View style={modalHeader}>
                <Text style={modalCategory}> {link.category} </Text>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color={colors.gray[400]}
                  />
                </TouchableOpacity>
              </View>

              <Text style={modalLinkName}>{link.name} </Text>
              <Text style={modalUrl}> {link.url}</Text>
              <View style={modalFooter}>
                <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove} />
                <Option name="Abrir" icon="language" onPress={handleOpen} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
