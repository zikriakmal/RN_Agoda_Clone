import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={{ marginHorizontal: 12, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image source={require('../../../../assets/icons/agod_icon.png')} style={styles.leftImage} />
                <TouchableOpacity>
                    <Image source={require('../../../../assets/icons/member_banner.png')} style={styles.memberIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View style={[styles.discountContainer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                    <Image source={require('../../../../assets/icons/discount.png')} style={{ height: 15, width: 23 }} />
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Rp 183K</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header;