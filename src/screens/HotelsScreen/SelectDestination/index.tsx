import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Line } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../types/RouteTypes";

const SelectDestination = () => {
    const navigation = useNavigation<NavigationProp>()
    {

        return (
            <SafeAreaView style={{ backgroundColor: 'white', flex: 1, paddingVertical: 20 }}>
                <View style={{ marginHorizontal: 20, marginBottom: 20, gap: 15, flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', gap: 16 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../../assets/icons/x.png')} style={{ height: 18, width: 18 }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>Select destination</Text>
                    </View>
                    <View style={{ backgroundColor: '#EDF0F9', height: 50, borderRadius: 25, flexDirection: 'row', justifyContent: 'flex-start', gap: 20, alignItems: 'center', paddingHorizontal: 15 }}>
                        <Image source={require('../../../assets/icons/search.png')} style={{ height: 18, width: 18 }} />
                        <TextInput autoFocus={true} placeholder="Location, landmark or property" />
                    </View>
                </View>
                <Line />
                <View style={{ marginHorizontal: 20, marginVertical: 20, gap: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }} onPress={() => Alert.alert('underconstruction')}>
                        <Image source={require('../../../assets/icons/location.png')} style={{ height: 18, width: 18 }} />
                        <Text style={{ color: "#2067DA", fontWeight: '300' }}>Near Me</Text>
                    </TouchableOpacity>
                    <Line />
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }} onPress={() => Alert.alert('underconstruction')}>
                        <Image source={require('../../../assets/icons/maps.png')} style={{ height: 18, width: 18 }} />
                        <Text style={{ color: "#2067DA", fontWeight: '300' }}>Choose on map</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView >
        )
    }
}

export default SelectDestination;