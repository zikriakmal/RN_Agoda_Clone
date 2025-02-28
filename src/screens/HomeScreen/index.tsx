import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, Dimensions, Image, Modal, RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Gap from "../../components/Gap";
import Line from "../../components/Line";
import NavigationProp from "../../types/RouteTypes";

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
            <Modal
                animationType="fade"
                transparent={true}
                visible={isPromotionModalOpen}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setIsPromotionModalOpen(!isPromotionModalOpen);
                }}>
                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    height: '100%',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View>
                        <View style={{ backgroundColor: '#009A00', borderRadius: 40, marginTop: 40, width: Dimensions.get('screen').width - 40 }} >
                            <View style={{ alignItems: 'center', marginTop: -60, gap: 20, marginBottom: 20 }}>
                                <Image source={require('../../assets/icons/mid_month_sale.png')} style={{ height: 90, width: 200 }} />
                                <Image source={require('../../assets/icons/special_event.png')} style={{ height: 30, width: 200 }} />
                                <Text style={{ fontSize: 24, color: 'white', fontWeight: '800', textAlign: 'center' }}> {'Zikri, Get up to 99% OFF\n selected Hotels\n worldwide!'}</Text>
                                <Text style={{ fontSize: 16, color: 'white', fontWeight: '300', textAlign: 'center' }}> {'Activate Special prices on selected hotels\nfor up to 24 hours'}</Text>
                            </View>
                            <TouchableOpacity style={{ height: 50, marginBottom: 30, marginHorizontal: 20, backgroundColor: 'white', borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '800' }}>ACTIVATE NOW</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, top: 0, backgroundColor: 'rgba(199, 196, 202, 0.9)', borderRadius: 20, height: 40, width: 40 }} onPress={() => { setIsPromotionModalOpen(false) }}>
                            <Image source={require('../../assets/icons/x.png')} style={{ height: 14, width: 14 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView >
    )
}

const Header = () => {
    return (
        <View style={{ marginHorizontal: 12, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image source={require('../../assets/icons/agod_icon.png')} style={styles.leftImage} />
                <TouchableOpacity>
                    <Image source={require('../../assets/icons/member_banner.png')} style={styles.memberIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View style={[styles.discountContainer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                    <Image source={require('../../assets/icons/discount.png')} style={{ height: 15, width: 23 }} />
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Rp 183K</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const MainMenu = () => {
    const navigation = useNavigation<NavigationProp>();
    return (<View style={{ marginHorizontal: 12, flexDirection: 'column', gap: 15 }} >
        <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('HotelsScreen')} style={[styles.mainMenuChildContainer]} >
                <Text style={{ marginBottom: 10, padding: 15, paddingVertical: 10, fontWeight: '600', fontSize: 16 }}>Hotels</Text>
                <Image style={{ height: 55, width: 95, position: 'absolute', bottom: 0, right: 0 }} source={require('../../assets/icons/hotels.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FlightsScreen', { hasBackButton: true })} style={{ flex: 1, backgroundColor: "#F1DFFF", borderRadius: 25, height: 100, overflow: 'hidden' }} >
                <Text style={{ marginBottom: 10, padding: 15, paddingVertical: 10, fontWeight: '600', fontSize: 16 }}>Flights</Text>
                <Image style={{ height: 55, width: 95, position: 'absolute', bottom: 0, right: 0 }} source={require('../../assets/icons/flights.png')} />
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('FlightsAndHotelScreen', { hasBackButton: true })} style={{ flex: 1, backgroundColor: "#DFF7FF", borderRadius: 25, height: 100, overflow: 'hidden' }} >
                <Text style={{ marginBottom: 10, padding: 15, paddingVertical: 10, fontWeight: '600', fontSize: 16 }}>{'Flights\n+Hotel'}</Text>
                <Image style={{ height: 55, width: 99, position: 'absolute', bottom: 0, right: 0 }} source={require('../../assets/icons/flights_hotels.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ActivitiesScreen', { hasBackButton: true })} style={{ flex: 1, backgroundColor: "#FBF3D5", borderRadius: 25, height: 100, overflow: 'hidden' }} >
                <Text style={{ marginBottom: 10, padding: 15, paddingVertical: 10, fontWeight: '600', fontSize: 16 }}>{'Activities'}</Text>
                <Image style={{ height: 55, width: 95, position: 'absolute', bottom: 0, right: 0 }} source={require('../../assets/icons/activities.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HomesAndAptsScreen', { hasBackButton: true })} style={{ flex: 1, backgroundColor: "#EDFBD0", borderRadius: 25, height: 100, overflow: 'hidden' }} >
                <Text style={{ marginBottom: 10, padding: 15, paddingVertical: 10, fontWeight: '600', fontSize: 16 }}>{'Homes\n& Apts'}</Text>
                <Image style={{ height: 55, width: 95, position: 'absolute', bottom: 0, right: 0 }} source={require('../../assets/icons/hones_apts.png')} />
            </TouchableOpacity>
        </View>
    </View>)
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

const SliderMenu = () => {
    return (
        <View style={{ paddingHorizontal: 12 }}>
            <View style={{
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1, },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 10,
                paddingVertical: 12,
                marginBottom: 5,
                borderRadius: 15
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }} >
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../../assets/icons/airport_transfer.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Airport\nTransfer'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 32 }} source={require('../../assets/icons/car_rentals.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Car Rentals'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../assets/icons/esim.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'eSim'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../assets/icons/train_tickets.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Train tickets'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../assets/icons/train_tickets.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Bus Ticket'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../assets/icons/train_tickets.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Another Feature'}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
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

const styles = StyleSheet.create({
    mainMenuChildContainer: {
        flex: 1,
        backgroundColor: "#FFDFDF",
        borderRadius: 25,
        height: 100,
        overflow: 'hidden'
    },
    mainContainer: { backgroundColor: 'white' },
    leftImage: { height: 25, width: 50.5 },
    memberIcon: { height: 19, width: 100 },
    discountContainer: {
        backgroundColor: '#E2F2E5',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        gap: 10
    },
    sectionContainer: {
        marginTop: 10,
        marginBottom: 8,
        gap: 10,
    },
})

export default HomeScreen;