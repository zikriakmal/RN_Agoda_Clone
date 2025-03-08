import { Text } from "@react-navigation/elements"
import { Alert, Image, ScrollView, TouchableOpacity, View } from "react-native"
import styles from "./styles"

const NewUserWelcomePack = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>New user welcome pack!</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 10, marginTop: 0 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ paddingVertical: 2, width: 40, height: 8, zIndex: 999, borderRadius: 2, alignItems: 'center' }} />
                    <View style={{ flexDirection: 'row', marginTop: 0, gap: 18, alignItems: 'center', borderWidth: 0.5, borderColor: 'lightgrey', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 15 }}>
                        <Image style={{ height: 24, width: 24 }} source={require('../../../../assets/icons/discount_green.png')} />
                        <View style={{ gap: 2 }}>
                            <Text style={{ fontWeight: '700' }}>Up to 10% off</Text>
                            <Text style={{ fontWeight: '300', fontSize: 12 }}>Second hotel booking</Text>
                        </View>
                        <Text style={{ color: 'blue', fontWeight: '600' }}>Use</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ backgroundColor: 'red', marginLeft: 15, paddingVertical: 2, width: 35, zIndex: 999, borderRadius: 2, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 10 }}>New</Text>
                    </View>
                    <View style={{ marginTop: -10, flexDirection: 'row', gap: 18, alignItems: 'center', borderWidth: 0.5, borderColor: 'lightgrey', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 15 }} >
                        <Image style={{ height: 24, width: 24 }} source={require('../../../../assets/icons/vip.png')} />
                        <View style={{ gap: 2 }}>
                            <Text style={{ fontWeight: '700' }}>VIP Gold trial</Text>
                            <Text style={{ fontWeight: '300', fontSize: 12 }}>Up to 18% off</Text>
                        </View>
                        <Text style={{ color: 'blue', fontWeight: '600' }}>Claim</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default NewUserWelcomePack;