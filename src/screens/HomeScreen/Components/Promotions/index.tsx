import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";

const Promotions = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Flights & Activities Promotions</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../../../assets/brand/brand2.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../../../assets/brand/brand2.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

export default Promotions;