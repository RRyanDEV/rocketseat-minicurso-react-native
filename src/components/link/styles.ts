import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const stylesLink = StyleSheet.create({
  contaier: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 2,
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: "600",
  },
  url: {
    color: colors.gray[400],
    fontSize: 14,
  },
  // Lista de Links
  stylesLinkList: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  stylesLinksContent: {
    gap: 20,
    padding: 15,
    paddingBottom: 100,
  },
});
