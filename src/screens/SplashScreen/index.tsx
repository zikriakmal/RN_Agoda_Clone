import { Image, StyleSheet, Text, View } from "react-native"
import styles from "./styles";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.mainImage}
                source={require('../../assets/icons/agod_icon.png')}
            />
        </View>
    )
}




export default SplashScreen;