import { Image, StyleSheet, Text, View } from "react-native"

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


const styles = StyleSheet.create({
    mainImage: { height: 60, width: 120 },
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})


export default SplashScreen;