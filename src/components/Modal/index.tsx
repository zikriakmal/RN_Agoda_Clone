import { Text } from "@react-navigation/elements";
import { Alert, Dimensions, Image, Modal as RnModal, TouchableOpacity, View } from "react-native";

const Modal = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <RnModal
            animationType="fade"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setIsOpen(!isOpen);
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
                    <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, top: 0, backgroundColor: 'rgba(199, 196, 202, 0.9)', borderRadius: 20, height: 40, width: 40 }} onPress={() => { setIsOpen(false) }}>
                        <Image source={require('../../assets/icons/x.png')} style={{ height: 14, width: 14 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </RnModal>
    )
}

export default Modal;