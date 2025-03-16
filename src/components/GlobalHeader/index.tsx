import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../constants/themes";
import { NavigationProp } from "../../types/RouteTypes";

const GlobalHeader = ({ title = "Header Title", isCloseButton = false }: { title?: string, isCloseButton?: boolean }) => {
    const navigation = useNavigation<NavigationProp>()
    return (
        <>
            <StatusBar backgroundColor={'white'} />
            <View style={{ ...globalStyles.bottomShadow, flexDirection: 'row', position: 'relative', borderRadius: 0, paddingHorizontal: 30 }}>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '500', fontSize: 20 }}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 15, width: 40, height: 20, padding: 15 }} >
                    <Image source={isCloseButton ? require('../../assets/icons/x.png') : require('../../assets/icons/chevron_left.png')} style={{ height: 20, width: isCloseButton ? 20 : 14 }} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default GlobalHeader;