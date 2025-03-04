import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainMenuChildContainer: {
        flex: 1,
        backgroundColor: "#FFDFDF",
        borderRadius: 25,
        height: 100,
        overflow: 'hidden'
    },
    mainContainer: { backgroundColor: 'white' },
    leftImage: { height: 25, width: 50.5 },
    memberIcon: { height: 19, width: 100 },
    discountContainer: {
        backgroundColor: '#E2F2E5',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        gap: 10
    },
    sectionContainer: {
        marginTop: 10,
        marginBottom: 8,
        gap: 10,
    },
});

export default styles;