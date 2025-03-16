import { Image, View } from "react-native";
import styles from "./styles";

const SplashScreen = () => {
    return (
        <View testID="splash-screen" style={styles.container}>
            <Image
                style={styles.mainImage}
                source={require('../../assets/icons/agod_icon.png')}
            />
        </View>
    )
}

export default SplashScreen;