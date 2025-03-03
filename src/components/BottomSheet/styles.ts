import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    sheetHandle: {
        width: 40,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginBottom: 10,
    },
    sheetText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#d32f2f',
        padding: 10,
        borderRadius: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;