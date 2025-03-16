import { SafeAreaView, Text, View } from "react-native";
import GlobalHeader from "../../components/GlobalHeader";

const ActivitiesScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <GlobalHeader title="Activities" />
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Activities Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default ActivitiesScreen;