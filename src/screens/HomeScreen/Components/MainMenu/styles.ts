import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainMenuContainer: {
        marginHorizontal: 12,
        flexDirection: 'column',
        gap: 15
    },
    mainMenuSectionContainer: {
        flexDirection: 'row',
        gap: 10
    },
    mainMenuChildContainer: {
        flex: 1,
        borderRadius: 25,
        height: 100,
        overflow: 'hidden'
    },
});

export default styles;