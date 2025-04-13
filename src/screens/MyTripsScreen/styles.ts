import { StyleSheet } from "react-native";
import { globalStyles } from "../../constants/themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        color: 'grey'
    },
    buttonText: {
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 10,
        fontWeight: '800'
    },
    image: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    headerContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey'
    },
    headerTitleText: {
        fontWeight: '300',
        textAlign: 'center',
        paddingVertical: 10
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        ...globalStyles.normalShadow
    },
    tabSelectionContainer: {
        flex: 1,
        borderBottomWidth: 2.5,
        paddingVertical: 15,
    },
    tabSelectionText: {
        textAlign: 'center',
        fontWeight: '700'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#EFF4FC'
    },
    menuContainer: {
        marginTop: 20,
        backgroundColor: 'white'
    },
    menuContentContainer: {
        paddingLeft: 10,
        paddingVertical: 20,
        gap: 10
    },
    menuIconContainer: {
        width: 110,
        height: 140,
        gap: 15,
        paddingVertical: 25,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 20,
        paddingHorizontal: 20
    },
    menuIconImage: {
        height: 35,
        width: 35
    },
    menuIconText: {
        fontWeight: '700'
    },
    noTripContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 40,
        gap: 40
    },
    noTripText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    }

});

export default styles;