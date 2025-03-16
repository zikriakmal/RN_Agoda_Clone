import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../constants/themes";
import { NavigationProp } from "../../types/RouteTypes";

const GlobalHeader = ({ title = "Header Title", withShadow = true, isCloseButton = false }: { title?: string, withShadow?: boolean, isCloseButton?: boolean }) => {
    const navigation = useNavigation<NavigationProp>()
    return (
        <>
            <StatusBar backgroundColor={'white'} />
            <View style={[withShadow ? globalStyles.bottomShadow : undefined, { flexDirection: 'row', position: 'relative', borderRadius: 0, paddingHorizontal: 30, alignItems: 'center', backgroundColor: 'white', paddingTop: !withShadow ? 0 : 20 }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 40, height: 20, zIndex: 999 }} >
                    <Image source={isCloseButton ? require('../../assets/icons/x.png') : require('../../assets/icons/chevron_left.png')} style={{ height: 20, width: isCloseButton ? 20 : 14 }} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '500', fontSize: 20, marginLeft: -40 }}>{title}</Text>

            </View>
        </>
    )
}

export default GlobalHeader;