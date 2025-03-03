import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const HotelsScreen = () => {
    const navigation = useNavigation();
    // const [isSheetVisible, setSheetVisible] = useState(false);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text>{'Hotel Screen'}</Text>
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

export default HotelsScreen;