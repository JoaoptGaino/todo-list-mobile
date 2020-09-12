import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 35,
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        marginBottom: 40,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    inputBlock: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    inputBox: {
        width: 200,
        borderColor: 'purple',
        borderRadius: 8,
        borderWidth: 2,
        paddingLeft: 8
    },
    taskTitle: {
        fontSize: 20,
        marginBottom: 20,
        color: 'purple'
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 10
    },
    addButton: {
        alignItems: "flex-end"
    },
    task: {
        width: 200
    },
    error: {
        color: "red"
    }
});

export default styles;