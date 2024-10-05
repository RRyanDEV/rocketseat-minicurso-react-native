import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const stylesModal = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: "flex-end" },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400],
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[200],
  },
  modalUrl: {
    fontSize: 14,
    color: colors.gray[400],
  },
  modalFooter:{
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
}
});
