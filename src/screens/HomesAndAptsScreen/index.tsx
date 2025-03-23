import { SafeAreaView, Text, View } from "react-native";
import { GlobalHeader } from "../../components";
import styles from "./styles";

const HomesAndAptsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <GlobalHeader title="Home And Apartments" />
            <View style={styles.innerContainer}>
                <Text>{'Home and Apartments Screen'}</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomesAndAptsScreen;