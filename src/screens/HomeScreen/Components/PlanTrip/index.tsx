import { Text } from "@react-navigation/elements";
import { Alert, Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const PlanTrip = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>{'Continue planning your trip'}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', marginTop: 0, gap: 15, alignItems: 'center', borderWidth: 0.5, borderColor: 'lightgrey', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 15 }}>
                        <Image style={{ height: 40, width: 40, marginTop: 10 }} source={require('../../../../assets/icons/stays_planning.png')} />
                        <View style={{ gap: 2 }}>
                            <Text style={{ fontWeight: '700' }}>Stays in Kuala Lumpur</Text>
                            <Text style={{ fontWeight: '300', fontSize: 12 }}>{'Feb 21 - Feb 22 • 1 room • 2 Adults'}</Text>
                        </View>
                        <Image style={{ height: 18, width: 18 }} source={require('../../../../assets/icons/search.png')} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

export default PlanTrip;
