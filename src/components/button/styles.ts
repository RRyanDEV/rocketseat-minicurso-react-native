import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const stylesButton = StyleSheet.create({
    container:{
      height: 52,
      width: "100%",
      backgroundColor: colors.green[300],
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
        color: colors.gray[100],
        fontSize: 16,
        fontWeight: "600",
    }
});
