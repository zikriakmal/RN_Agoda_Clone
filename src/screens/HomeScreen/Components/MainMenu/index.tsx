import { useNavigation } from "@react-navigation/native";
import { ColorValue, Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import colors from "../../../../constants/colors";
import NavigationProp from "../../../../types/RouteTypes";
import styles from "./styles";

const MainMenu = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={styles.mainMenuContainer} >
            <View style={styles.mainMenuSectionContainer}>
                <MainMenuChild
                    name="Hotels"
                    icon={require('../../../../assets/icons/hotels.png')}
                    bgColor={colors.hotels}
                    onPress={() => navigation.navigate('HotelsScreen')}
                />
                <MainMenuChild
                    name="Hotels"
                    icon={require('../../../../assets/icons/flights.png')}
                    bgColor={colors.flights}
                    onPress={() => navigation.navigate('FlightsScreen', { hasBackButton: false })}
                />
            </View>
            <View style={styles.mainMenuSectionContainer}>
                <MainMenuChild
                    name="Flights And Hotels"
                    icon={require('../../../../assets/icons/flights_hotels.png')}
                    bgColor={colors.flightsAndHotel}
                    onPress={() => navigation.navigate('FlightsAndHotelScreen', { hasBackButton: false })}
                />
                <MainMenuChild
                    name="Activities"
                    icon={require('../../../../assets/icons/activities.png')}
                    bgColor={colors.activities}
                    onPress={() => navigation.navigate('ActivitiesScreen', { hasBackButton: false })}
                />
                <MainMenuChild
                    name="Home And Apts"
                    icon={require('../../../../assets/icons/hones_apts.png')}
                    bgColor={colors.homesAndApts}
                    onPress={() => navigation.navigate('HomesAndAptsScreen', { hasBackButton: false })}
                />
            </View>
        </View>)
}

const MainMenuChild = ({ name, icon, bgColor, onPress }: { name: string, bgColor: ColorValue | undefined, icon: ImageSourcePropType | undefined, onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.mainMenuChildContainer, { backgroundColor: bgColor }]} >
            <Text style={{ marginBottom: 10, padding: 15, paddingVertical: 10, fontWeight: '600', fontSize: 16 }}>{name}</Text>
            <Image style={{ height: 55, width: 95, position: 'absolute', bottom: 0, right: 0 }} source={icon} />
        </TouchableOpacity>
    )
}

export default MainMenu;