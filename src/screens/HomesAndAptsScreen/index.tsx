import { Text, View, SafeAreaView } from "react-native"
import GlobalHeader from "../../components/GlobalHeader";

const HomesAndAptsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <GlobalHeader title="Home And Apartments" />
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Home and Apartments Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomesAndAptsScreen;