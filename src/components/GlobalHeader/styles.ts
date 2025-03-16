import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: { width: 40, height: 20, zIndex: 999 },
    textTitle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
        marginLeft: -40
    },
    mainContainer: {
        flexDirection: 'row',
        position: 'relative',
        borderRadius: 0,
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: { height: 20 }
});

export default styles;