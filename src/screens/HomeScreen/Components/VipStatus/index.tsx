import { View, Text, Image } from "react-native";
import styles from "../../styles";

const VipStatus = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>{'VIP status'}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between', marginHorizontal: 12, padding: 15, borderRadius: 20, backgroundColor: 'white', borderWidth: 0.5, borderColor: 'lightgrey' }}>
                <Text>{'Your Past bookings have earned\nyou'}
                    <Text style={{ fontWeight: '700' }}>{' AgodaVIP Silver'}</Text>
                    {' status'}
                </Text>
                <Image source={require('../../../../assets/icons/member_banner.png')}
                    style={{ height: 18, width: 100 }}
                />
            </View>
        </View>
    )
}

export default VipStatus;
