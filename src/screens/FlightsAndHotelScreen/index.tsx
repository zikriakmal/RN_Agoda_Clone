import { SafeAreaView, Text, View } from "react-native";
import { GlobalHeader } from "../../components";
import styles from "./styles";

const FlightsAndHotelScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <GlobalHeader title="Flights And Hotel" />
            <View style={styles.innerContainer}>
                <Text>{'Flights And Hotel Screen'}</Text>
            </View>
        </SafeAreaView>
    )
}

export default FlightsAndHotelScreen;