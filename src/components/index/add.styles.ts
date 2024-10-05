import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const stylesAddIndex = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  addHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  addTitle: {
    color: colors.gray[200],
    fontSize: 24,
    fontWeight: "600",
  },
  label:{
    color: colors.gray[400],
    fontSize: 14,
    paddingHorizontal: 24,
  },
  form:{
    padding: 24,
    gap: 16,
  }
});
