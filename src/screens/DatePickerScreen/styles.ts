import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    stickyMonthHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 0,
        paddingBottom: 5,
    },
    headerContainer: {
        position: 'absolute',
        width: '100%',
        zIndex: 998,
        backgroundColor: 'white'
    },
    buttonSubmit: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blueMark,
        borderRadius: 25,
        height: 50,
        margin: 20,
        marginBottom: 30
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    buttonText: {
        color: 'white', fontWeight: '500', fontSize: 16
    },
    month: {
        marginLeft: 5
    },
    year: {
        marginRight: 5
    }
});

export default styles;