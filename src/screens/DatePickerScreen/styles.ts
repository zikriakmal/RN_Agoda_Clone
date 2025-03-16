import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 0,
        paddingBottom:5,
    },
    month: {
        marginLeft: 5
    },
    year: {
        marginRight: 5
    }
});

export default styles;