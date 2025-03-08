import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";

const MorePlaces = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>{'Explore more places in Kuala Lumpur'}</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 10 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', gap: 5, borderWidth: 1.5, backgroundColor: '#E5EFFF', borderColor: '#2067DA', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 15 }}>
                        <Image style={{ height: 12, width: 12 }} source={require('../../../../assets/icons/recommended.png')} />
                        <Text style={{ fontSize: 12, color: '#2067DA' }}>Recommended</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', gap: 5, borderWidth: 1.5, borderColor: 'lightgrey', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 15 }}>
                        <Image style={{ height: 12, width: 12 }} source={require('../../../../assets/icons/shopping.png')} />
                        <Text style={{ fontSize: 12, color: 'black' }}>Shopping</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', gap: 5, borderWidth: 1.5, borderColor: 'lightgrey', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 15 }}>
                        <Image style={{ height: 12, width: 12 }} source={require('../../../../assets/icons/value_for_money.png')} />
                        <Text style={{ fontSize: 12, color: 'black' }}>Value For Money</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ flexDirection: 'row', marginHorizontal: 12, gap: 10 }}>
                <View style={{ flex: 1, gap: 10 }}>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 180, width: 'auto', borderRadius: 15 }} source={require('../../../../assets/brand/brand3.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 200, width: 'auto', borderRadius: 15 }} source={require('../../../../assets/brand/brand6.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Pudu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, gap: 10 }}>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 120, width: 'auto', borderRadius: 15 }} source={require('../../../../assets/brand/brand4.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 130, width: 'auto', borderRadius: 15 }} source={require('../../../../assets/brand/brand5.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 120, width: 'auto', borderRadius: 15 }} source={require('../../../../assets/brand/brand6.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MorePlaces;