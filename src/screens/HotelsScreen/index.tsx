import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HotelsScreen = () => {
    const navigation = useNavigation();
    // const [isSheetVisible, setSheetVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text> Hotel Screen </Text>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={{ fontWeight: '800' }}>Go Back</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => setSheetVisible(true)} >
                <Text>test</Text>
            </TouchableOpacity> */}
            {/* {isSheetVisible && <BottomSheet isVisible={isSheetVisible} onClose={() => setSheetVisible(false)} />} */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default HotelsScreen;