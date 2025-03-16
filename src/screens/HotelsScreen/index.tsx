import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Dimensions, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Gap, Line } from "../../components";
import colors from "../../constants/colors";
import { globalStyles } from '../../constants/themes';
import { NavigationProp } from "../../types/RouteTypes";

type TabActive = 'overnight' | 'day_use';

const HotelsScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const [tabActive, setTabActive] = useState<TabActive>('overnight');
    const [isLimitedTime, setIsLimitedTime] = useState<boolean>(false);

    return (
        <View style={{ backgroundColor: 'white' }}>
            <StatusBar backgroundColor={colors.hotels} />
            <View style={{ backgroundColor: colors.hotels, padding: 20, paddingTop: 30, paddingBottom: 10, borderBottomStartRadius: 40, borderBottomEndRadius: 40, gap: 15 }}>
                <Image source={require('../../assets/icons/bg_hotels.png')} style={{ height: 120, width: 115, position: 'absolute', bottom: 0, right: 0 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[globalStyles.shadow, { borderRadius: 20, height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }]}>
                        <Image source={require('../../assets/icons/chevron_left.png')} style={{ height: 18, width: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Underconstruction')} style={[globalStyles.shadow, { borderRadius: 20, height: 40, gap: 10, padding: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }]}>
                        <Image source={require('../../assets/icons/currency.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontWeight: '600', fontSize: 14 }}>IDR</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 24, fontWeight: '700', color: 'black', marginBottom: 20, paddingBottom: 20 }}>{'All rooms'}</Text>
            </View>
            <Gap height={10} />
            <ScrollView style={{ zIndex: 99, marginTop: -60, height: '100%' }}>
                <View style={[{ borderWidth: 0.5, borderColor: '#DDE2F0', marginTop: 20, marginHorizontal: 20, borderRadius: 15, backgroundColor: 'white' }]}>
                    <View style={{ borderBottomWidth: 0.5, borderColor: 'grey', flexDirection: 'row', paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => setTabActive('overnight')} style={{ borderBottomColor: tabActive === 'overnight' ? '#2067DA' : 'transparent', borderBottomWidth: 2, padding: 15, paddingHorizontal: 15 }}>
                            <Text style={{ fontWeight: '600', color: tabActive === 'overnight' ? '#2067DA' : 'black', fontSize: 14 }}>{'Overnight'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setTabActive('day_use')} style={{ borderBottomColor: tabActive === 'day_use' ? '#2067DA' : 'transparent', borderBottomWidth: 2, padding: 15, paddingHorizontal: 15 }}>
                            <View style={{ position: 'absolute', top: -15, right: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C53829', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 }}>
                                <Text style={{ color: 'white', fontSize: 10 }}>New!</Text>
                            </View>
                            <Text style={{ fontWeight: '600', color: tabActive === 'day_use' ? '#2067DA' : 'black', fontSize: 14 }}>{'Day Use'}</Text>
                        </TouchableOpacity>
                    </View>
                    {tabActive === 'overnight' ?
                        (<View style={{ margin: 10, marginVertical: 15, gap: 15, overflow: 'hidden' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SelectDestination')} style={{ backgroundColor: '#EDF0F9', height: 50, borderRadius: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                                <Image source={require('../../assets/icons/search.png')} style={{ height: 18, width: 18 }} />
                                <Text style={{ fontWeight: '400', flex: 1, paddingHorizontal: 20 }}>{'Kuala Lumpur'}</Text>
                                <Image source={require('../../assets/icons/location.png')} style={{ height: 18, width: 18 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('DatePickerScreen', { hasBackButton: true })} style={{ backgroundColor: '#EDF0F9', height: 50, borderRadius: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, flex: 1 }}>
                                    <Image source={require('../../assets/icons/calendar.png')} style={{ height: 20, width: 19 }} />
                                    <Text numberOfLines={1} style={{ fontWeight: '400', flex: 1, fontSize: 14, paddingHorizontal: 15 }}>{'Thu, 27 Feb'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('DatePickerScreen', { hasBackButton: true })} style={{ backgroundColor: '#EDF0F9', height: 50, borderRadius: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, flex: 1 }}>
                                    <Image source={require('../../assets/icons/calendar.png')} style={{ height: 20, width: 19 }} />
                                    <Text numberOfLines={1} style={{ fontWeight: '400', fontSize: 14, flex: 1, paddingHorizontal: 15 }}>{'Fri, 28 Feb'}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('GuestDetailsScreen', { hasBackButton: true })} style={{ backgroundColor: '#EDF0F9', height: 50, borderRadius: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                                <Image source={require('../../assets/icons/person.png')} style={{ height: 20, width: 16 }} />
                                <Text style={{ fontWeight: '400', flex: 1, paddingHorizontal: 20 }}>{'1 room 1 adults 0 children'}</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center', flex: 1 }}>
                                    <TouchableOpacity onPress={() => setIsLimitedTime(!isLimitedTime)} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: isLimitedTime ? '#2067DA' : 'white', height: 20, width: 20, borderWidth: 0.5, borderColor: 'grey', borderRadius: 5 }}>
                                        <Text style={{ color: 'white' }}>✓</Text>
                                    </TouchableOpacity>
                                    <Image source={require('../../assets/icons/timer.png')} style={{ height: 20, width: 16 }} />
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontWeight: '700', fontSize: 16 }}>{'Show limited time\noffers first'}</Text>
                                    </View>
                                </View>

                                <View style={{ backgroundColor: '#C53829', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 2 }}>
                                    <Text style={{ fontSize: 10, color: 'white' }}>Save up to 20 %</Text>
                                </View>
                            </View>
                            <Line />
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <TouchableOpacity onPress={() => Alert.alert('Underconstruction')} style={{ borderWidth: 0.5, borderColor: 'grey', height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                                    <Image source={require('../../assets/icons/maps.png')} style={{ height: 18, width: 18 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Alert.alert('Underconstruction')} style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#2067DA', borderRadius: 25, height: 50 }}>
                                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>Search</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)
                        :
                        <View style={{ height: 240, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontWeight: '700' }}>UnderConstruction</Text></View>
                    }
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ marginHorizontal: 20, fontSize: 18, fontWeight: '600', marginVertical: 10 }}>{'Discount Coupons'}</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ marginHorizontal: 20, gap: 15 }}>
                        <TouchableOpacity onPress={() => Alert.alert('Underconstruction')} style={{
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderWidth: 0.5,
                            borderColor: 'lightgrey',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            width: Dimensions.get('screen').width - 100,
                            overflow: 'hidden',
                            borderRadius: 10
                        }}>
                            <View>
                                <Image source={require('../../assets/icons/up_to_5.png')} style={{ height: 80, width: 80 }} />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 10, paddingRight: 10, gap: 10 }}>
                                <View style={{ gap: 2 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }} numberOfLines={1}>Up to Rp500,000 Off white</Text>
                                    <Text style={{ fontWeight: '400', color: 'grey', fontSize: 12 }}>{'Min. spend Rp450,000 |\nExpires in 3 days'}</Text>
                                </View>
                                <Text style={{ textAlign: 'right', fontWeight: '800', color: colors.blueMark }}>Collect</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Underconstruction')} style={{
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderWidth: 0.5,
                            borderColor: 'lightgrey',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            width: Dimensions.get('screen').width - 100,
                            overflow: 'hidden',
                            borderRadius: 10
                        }}>
                            <View>
                                <Image source={require('../../assets/icons/up_to_8.png')} style={{ height: 80, width: 80 }} />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 10, paddingRight: 10, gap: 10 }}>
                                <View style={{ gap: 2 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }} numberOfLines={1}>Up to Rp500,000 Off white</Text>
                                    <Text style={{ fontWeight: '400', color: 'grey', fontSize: 12 }}>{'Min. spend Rp450,000 |\nExpires in 3 days'}</Text>
                                </View>
                                <Text style={{ textAlign: 'right', fontWeight: '800', color: '#2067DA' }}>Collect</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default HotelsScreen;