import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const SliderMenu = () => {
    return (
        <View style={{ paddingHorizontal: 12 }}>
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }} >
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../../../../assets/icons/airport_transfer.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Airport\nTransfer'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 32 }} source={require('../../../../assets/icons/car_rentals.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Car Rentals'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../../../assets/icons/esim.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'eSim'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../../../assets/icons/train_tickets.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Train tickets'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../../../assets/icons/train_tickets.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Bus Ticket'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 65, gap: 10, alignItems: 'center' }}>
                        <Image style={{ height: 30, width: 24 }} source={require('../../../../assets/icons/train_tickets.png')} />
                        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '600' }}>{'Another Feature'}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default SliderMenu;