import { useState } from "react";

import { Text, View, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { stylesAddIndex } from "@/components/index/add.styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Add() {
  const [category, setCategory] = useState("");

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    switch (true) {
      case !category:
        return Alert.alert("Categoria", "Selecione a Categoria");
      case !name.trim():
        return Alert.alert("Nome", "Informe o Nome");
      case !url:
        return Alert.alert("URL", "Informe a URL");
      default:
        console.log({ category, name, url });
    }
  }

  const { container, addHeader, addTitle, label, form } = stylesAddIndex;
  return (
    <>
      <View style={container}>
        <View style={addHeader}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons
              name="arrow-back"
              size={32}
              color={colors.gray[200]}
            />
          </TouchableOpacity>

          <Text style={addTitle}>Novo</Text>
        </View>

        <Text style={label}>Selecione uma Categoria</Text>

        <Categories onChange={setCategory} selected={category} />

        <View style={form}>
          <Input
            placeholder="Nome"
            onChangeText={setName}
            autoCorrect={false}
          />
          <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />

          <Button title="Adicionar" onPress={handleAdd} />
        </View>
      </View>
    </>
  );
}
