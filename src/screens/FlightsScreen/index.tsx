import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalHeader } from "../../components";


const FlightsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <GlobalHeader title="Flights" />
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Flights Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default FlightsScreen;