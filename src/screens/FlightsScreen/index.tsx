import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalHeader } from "../../components";
import styles from "./styles";


const FlightsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <GlobalHeader title="Flights" />
            <View style={styles.innerContainer}>
                <Text>Flights Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default FlightsScreen;