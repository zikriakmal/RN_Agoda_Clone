import { useCallback, useState } from "react";
import { Alert, Image, RefreshControl, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Gap, Line, Modal } from '../../components';
import { MainMenu, SliderMenu, Header } from "./Components";
import styles from "./styles";

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(true);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 500);
    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}  >
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Modal isOpen={isPromotionModalOpen} setIsOpen={setIsPromotionModalOpen} />
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
                <Header />
                <Gap height={20} />
                <MainMenu />
                <Gap height={20} />
                <SliderMenu />
                <Gap height={0} />
                <NewUserWelcomePack />
                <Gap height={0} />
                <ContinuePlanning />
                <Gap height={0} />
                <GrabCoupon />
                <Line />
                <SpecialDeals />
                <Line />
                <Promotions />
                <Line />
                <VipStatus />
                <Line />
                <DiscoverHotels />
                <Line />
                <MorePlaces />
            </ScrollView >
        </SafeAreaView >
    )
}

const DiscoverHotels = () => {
    return (
        <View style={{ marginVertical: 10, gap: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Discover hotels in top destinations</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ gap: 10 }}>
                        <Image style={{ height: 136, width: 205 }} source={require('../../assets/brand/brand7.png')} />
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
                        <Image style={{ height: 136, width: 205 }} source={require('../../assets/brand/brand7.png')} />
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
}

const NewUserWelcomePack = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>New user welcome pack!</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 10, marginTop: 0 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ paddingVertical: 2, width: 40, height: 8, zIndex: 999, borderRadius: 2, alignItems: 'center' }} />
                    <View style={{ flexDirection: 'row', marginTop: 0, gap: 18, alignItems: 'center', borderWidth: 0.5, borderColor: 'lightgrey', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 15 }}>
                        <Image style={{ height: 24, width: 24 }} source={require('../../assets/icons/discount_green.png')} />
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
                        <Image style={{ height: 24, width: 24 }} source={require('../../assets/icons/vip.png')} />
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

const ContinuePlanning = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Continue planning your trip</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', marginTop: 0, gap: 15, alignItems: 'center', borderWidth: 0.5, borderColor: 'lightgrey', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 15 }}>
                        <Image style={{ height: 40, width: 40, marginTop: 10 }} source={require('../../assets/icons/stays_planning.png')} />
                        <View style={{ gap: 2 }}>
                            <Text style={{ fontWeight: '700' }}>Stays in Kuala Lumpur</Text>
                            <Text style={{ fontWeight: '300', fontSize: 12 }}>Feb 21 - Feb 22 • 1 room • 2 Adults</Text>
                        </View>
                        <Image style={{ height: 18, width: 18 }} source={require('../../assets/icons/search.png')} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>

    )
}

const GrabCoupon = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Use Grab Advance Booking</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 12, borderWidth: 0.5, borderColor: 'lightgrey', borderRadius: 10, overflow: 'hidden' }}>
                <View style={{ backgroundColor: "#00B14F", padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 28, width: 80 }} source={require('../../assets/icons/grab.png')} />
                </View>
                <View style={{ padding: 15, flex: 1, gap: 20 }}>
                    <TouchableOpacity >
                        <Image source={require('../../assets/icons/chevron_right.png')} style={{ height: 21, width: 12, position: 'absolute', right: 0, top: 10, zIndex: 999 }} />
                        <Text style={{ fontSize: 14 }}>{'Book a ride to the airport up to 7\ndays ahead and'} <Text style={{ color: 'darkgreen' }}>save up to 25%</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#E9EFFA', padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 20 }}>
                        <Text style={{ color: 'grey', paddingHorizontal: 10 }}>AGODA</Text>
                        <Image source={require('../../assets/icons/copy.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#2067DA', fontWeight: '800' }}>Terms & Conditions</Text>
                </View>
            </View>
        </View>
    )
}

const SpecialDeals = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Special deals</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../assets/brand/brand1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../assets/brand/brand1.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const Promotions = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Flights & Activities Promotions</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../assets/brand/brand2.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../assets/brand/brand2.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const VipStatus = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>VIP status</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between', marginHorizontal: 12, padding: 15, borderRadius: 20, backgroundColor: 'white', borderWidth: 0.5, borderColor: 'lightgrey' }}>
                <Text>{'Your Past bookings have earned\nyou'}<Text style={{ fontWeight: '700' }}> AgodaVIP Silver</Text> {'status'}</Text>
                <Image source={require('../../assets/icons/member_banner.png')} style={{ height: 18, width: 100 }} />
            </View>
        </View>
    )
}

const MorePlaces = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Explore more places in Kuala Lumpur</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 10 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', gap: 5, borderWidth: 1.5, backgroundColor: '#E5EFFF', borderColor: '#2067DA', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 15 }}>
                        <Image style={{ height: 12, width: 12 }} source={require('../../assets/icons/recommended.png')} />
                        <Text style={{ fontSize: 12, color: '#2067DA' }}>Recommended</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', gap: 5, borderWidth: 1.5, borderColor: 'lightgrey', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 15 }}>
                        <Image style={{ height: 12, width: 12 }} source={require('../../assets/icons/shopping.png')} />
                        <Text style={{ fontSize: 12, color: 'black' }}>Shopping</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <View style={{ flexDirection: 'row', gap: 5, borderWidth: 1.5, borderColor: 'lightgrey', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 15 }}>
                        <Image style={{ height: 12, width: 12 }} source={require('../../assets/icons/value_for_money.png')} />
                        <Text style={{ fontSize: 12, color: 'black' }}>Value For Money</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ flexDirection: 'row', marginHorizontal: 12, gap: 10 }}>
                <View style={{ flex: 1, gap: 10 }}>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 180, width: 'auto', borderRadius: 15 }} source={require('../../assets/brand/brand3.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 200, width: 'auto', borderRadius: 15 }} source={require('../../assets/brand/brand6.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Pudu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, gap: 10 }}>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 120, width: 'auto', borderRadius: 15 }} source={require('../../assets/brand/brand4.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 130, width: 'auto', borderRadius: 15 }} source={require('../../assets/brand/brand5.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} style={{ gap: 10 }} >
                        <Image style={{ height: 120, width: 'auto', borderRadius: 15 }} source={require('../../assets/brand/brand6.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../../assets/icons/location.png')} style={{ height: 14, width: 10 }} />
                            <Text style={{ fontWeight: '600' }}>Kuala Lumpur Sentral</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;