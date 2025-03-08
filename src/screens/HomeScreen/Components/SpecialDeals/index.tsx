import { View, Image, TouchableOpacity, Alert, ScrollView, Text } from 'react-native'
import styles from '../../styles';

const SpecialDeals = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingHorizontal: 12, fontWeight: '700' }}>Special deals</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 20 }}>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../../../assets/brand/brand1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Underconstruction!')} >
                    <Image style={{ height: 136, width: 205 }} source={require('../../../../assets/brand/brand1.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default SpecialDeals;