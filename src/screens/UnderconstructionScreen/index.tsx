import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const UnderconstructionScreen = ({ route }: { route: any }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>{'Underconstruction'}</Text>
            {route?.params?.hasBackButton ?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 10,
        fontWeight: '800'
    }
});

export default UnderconstructionScreen;