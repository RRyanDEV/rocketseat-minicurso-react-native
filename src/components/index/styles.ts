import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const stylesIndex =  StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 55,
    },
    header:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        marginBottom: 30,
    },
    logo:{
        height: 32,
        width: 38,
    },
    title: {
        color: colors.green[900],
        fontSize: 22,
    }
})