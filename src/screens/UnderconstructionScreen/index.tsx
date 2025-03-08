import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { NavigationProp, RootStackParamList } from "../../types/RouteTypes";

const UnderconstructionScreen = (): React.JSX.Element => {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<RouteProp<RootStackParamList, "UnderconstructionScreen">>();
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/blank_bg.png')} style={{ height: '100%', width: '100%', position: 'absolute' }} />
            <Text style={styles.text}>{'Underconstruction'}</Text>
            {
                route?.params?.hasBackButton ?
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>{'Back'}</Text>
                    </TouchableOpacity> : null
            }
        </View>
    )
}


export default UnderconstructionScreen;