import { SafeAreaView, Text, View } from "react-native";
import GlobalHeader from "../../components/GlobalHeader";
import styles from "./styles";

const ActivitiesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
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