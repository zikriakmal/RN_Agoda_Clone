import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from "react-native";

const DiscoverHotels = () => {
    return (
        <View style={{ marginVertical: 10, gap: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Discover hotels in top destinations</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ gap: 10 }}>
                        <Image style={{ height: 136, width: 205 }} source={require('../../../../assets/brand/brand7.png')} />
                        <View style={{ gap: 2 }}>
                            <Text style={{ fontWeight: '600' }}>Jakarta</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12 }}>1.413 km away</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12 }}>shoping | restaurants</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12 }}>Rp 565.168 per night average</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ gap: 10 }}>
                        <Image style={{ height: 136, width: 205 }} source={require('../../../../assets/brand/brand7.png')} />
                        <View style={{ gap: 2 }}>
                            <Text style={{ fontWeight: '600' }}>Malang</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12 }}>2.413 km away</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12 }}>nature | restaurants</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12 }}>Rp 337.168 per night average</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

export default DiscoverHotels;