import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalHeader } from "../../components";
import { NavigationProp } from "../../types/RouteTypes";

const INITIAL_GUEST_DETAILS = {
    room: 0,
    adult: 0,
    infants: 0,
    children: 0,
}

const GuestDetailsScreen = () => {
    const [guestDetails, setGuestDetails] = useState(INITIAL_GUEST_DETAILS)
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar backgroundColor={'white'} />
            <GlobalHeader isCloseButton={true} title={"Guest Details"} />
            <View style={{ flex: 1 }}>
                <CategoryDetail
                    setGuestDetails={setGuestDetails}
                    guestDetails={guestDetails}
                    name={'Room'}
                    paramName={'room'}
                    total={guestDetails.room} />
                <CategoryDetail
                    setGuestDetails={setGuestDetails}
                    guestDetails={guestDetails}
                    name={'Adult'}
                    paramName={'adult'}
                    total={guestDetails.adult} />
                <CategoryDetail
                    setGuestDetails={setGuestDetails}
                    guestDetails={guestDetails}
                    name={'Infants'}
                    paramName={'infants'}
                    total={guestDetails.infants}
                    isInfants={true} />
                <CategoryDetail
                    setGuestDetails={setGuestDetails}
                    guestDetails={guestDetails}
                    name={'Children'}
                    paramName={'children'}
                    total={guestDetails.children} />
            </View>
            <View style={{ marginHorizontal: 20, paddingBottom: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#2067DA', borderRadius: 25, height: 50 }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>OK</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const CategoryDetail = ({ name, total, paramName, setGuestDetails, isInfants = false, guestDetails }: { name: string, total: number, paramName: string, setGuestDetails: (guestDetails: any) => void, guestDetails: any, isInfants?: boolean }) => {

    return (
        <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 0.5, gap: 20 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: "black" }}>{total}</Text>
            </View>
            <View style={{ flex: 5 }}>
                <Text style={{ fontWeight: '600', fontSize: 20 }}> {name}</Text>
                {isInfants ? <Text style={{ fontWeight: '300', fontSize: 12 }}> Under 3 Year</Text> : null}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <TouchableOpacity onPress={() => guestDetails[paramName] > 0 ? setGuestDetails({ ...guestDetails, [paramName]: guestDetails[paramName] - 1 }) : null} style={{ borderRadius: 20, height: 40, width: 40, borderWidth: 1, justifyContent: 'center', borderColor: '#5390D9', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#5390D9" }}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGuestDetails({ ...guestDetails, [paramName]: guestDetails[paramName] + 1 })} style={{ borderRadius: 20, height: 40, width: 40, borderWidth: 1, justifyContent: 'center', borderColor: '#5390D9', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#5390D9" }}>+</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default GuestDetailsScreen;