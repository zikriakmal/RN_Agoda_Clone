import { useNavigation, useTheme } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const UnderconstructionScreen = ({ route }: { route: any }) => {
    const navigation = useNavigation();
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/blank_bg.png')} style={{ height: '100%', width: '100%', position: 'absolute' }} />
            <Text style={styles.text}>{'Underconstruction'}</Text>
            {
                route?.params?.hasBackButton ?
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity> : null
            }
        </View>
    )
}


export default UnderconstructionScreen;