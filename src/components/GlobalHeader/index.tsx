import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../constants/themes";
import { NavigationProp } from "../../types/RouteTypes";
import styles from "./styles";

interface GlobalHeaderProps {
    title?: string;
    withShadow?: boolean;
    isCloseButton?: boolean
}

const GlobalHeader = ({ title = "Header Title", withShadow = true, isCloseButton = false }: GlobalHeaderProps) => {
    const navigation = useNavigation<NavigationProp>()
    return (
        <View>
            <StatusBar backgroundColor={'white'} />
            <View style={[
                withShadow ? globalStyles.bottomShadow : undefined, {
                    ...styles.mainContainer,
                    paddingTop: !withShadow ? 0 : 20
                }
            ]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonContainer} >
                    <Image source={isCloseButton ?
                        require('../../assets/icons/x.png') :
                        require('../../assets/icons/chevron_left.png')}
                        style={[styles.button, { width: isCloseButton ? 20 : 14 }]}
                    />
                </TouchableOpacity>
                <Text style={styles.textTitle}>{title}</Text>
            </View>
        </View>
    )
}

export default GlobalHeader;