import { Text, View, SafeAreaView } from "react-native"
import GlobalHeader from "../../components/GlobalHeader";

const FlightsAndHotelScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <GlobalHeader title="Flights And Hotel" />
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Flights And Hotel Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default FlightsAndHotelScreen;