import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from '../../styles'

const GrabCoupon = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Use Grab Advance Booking</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 12, borderWidth: 0.5, borderColor: 'lightgrey', borderRadius: 10, overflow: 'hidden' }}>
                <View style={{ backgroundColor: "#00B14F", padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 28, width: 80 }} source={require('../../../../assets/icons/grab.png')} />
                </View>
                <View style={{ padding: 15, flex: 1, gap: 20 }}>
                    <TouchableOpacity >
                        <Image source={require('../../../../assets/icons/chevron_right.png')} style={{ height: 21, width: 12, position: 'absolute', right: 0, top: 10, zIndex: 999 }} />
                        <Text style={{ fontSize: 14 }}>{'Book a ride to the airport up to 7\ndays ahead and'} <Text style={{ color: 'darkgreen' }}>save up to 25%</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#E9EFFA', padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 20 }}>
                        <Text style={{ color: 'grey', paddingHorizontal: 10 }}>AGODA</Text>
                        <Image source={require('../../../../assets/icons/copy.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#2067DA', fontWeight: '800' }}>Terms & Conditions</Text>
                </View>
            </View>
        </View>
    )
}

export default GrabCoupon;