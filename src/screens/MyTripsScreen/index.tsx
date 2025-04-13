import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert, GestureResponderEvent, Image, ImageSourcePropType, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import colors from "../../constants/colors";
import { NavigationProp, RootStackParamList } from "../../types/RouteTypes";
import styles from "./styles";

type SelectedTabType = 'upcoming' | 'completed' | 'cancelled'

const MyTripsScreen = (): React.JSX.Element => {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<RouteProp<RootStackParamList, "UnderconstructionScreen">>();
    const [selectedTab, setSelectedTab] = useState<SelectedTabType>('upcoming');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitleText}>{'Bookings'}</Text>
            </View>
            <View style={styles.tabContainer}>
                <TabSelectHeader
                    title="Upcoming"
                    tabName={'upcoming'}
                    setSelectedTab={() => setSelectedTab('upcoming')}
                    isSelected={selectedTab === 'upcoming'}
                />
                <TabSelectHeader
                    title="Completed"
                    tabName={'completed'}
                    setSelectedTab={() => setSelectedTab('completed')}
                    isSelected={selectedTab === 'completed'}
                />
                <TabSelectHeader
                    title="Cancelled"
                    tabName={'cancelled'}
                    setSelectedTab={() => setSelectedTab('cancelled')}
                    isSelected={selectedTab === 'cancelled'}
                />
            </View>
            <ScrollView style={styles.mainContainer}>
                <View>
                    <NoTrip />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={styles.menuContainer}
                        contentContainerStyle={styles.menuContentContainer}
                    >
                        <MenuIconButton
                            onPress={() => Alert.alert('underconstruction')}
                            imageSrc={require('../../assets/icons/find_activities.png')}
                            title="Find Activities"
                        />
                        <MenuIconButton
                            onPress={() => Alert.alert('underconstruction')}
                            imageSrc={require('../../assets/icons/find_places_to_stay.png')}
                            title="Find Places to Stay"
                        />
                        <MenuIconButton
                            onPress={() => Alert.alert('underconstruction')}
                            imageSrc={require('../../assets/icons/find_flights.png')}
                            title="Find Flights"
                        />
                        <MenuIconButton
                            onPress={() => Alert.alert('underconstruction')}
                            imageSrc={require('../../assets/icons/find_airport_transport.png')}
                            title="Find Airport Transport"
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const NoTrip = () => {
    return (
        <View style={styles.noTripContainer}>
            <Image source={require('../../assets/icons/empty_cart.png')} style={{ height: 140, width: 180 }} />
            <Text style={styles.noTripText}>{'Zikri A., you have no upcoming trips'}</Text>
        </View>
    )
}

const TabSelectHeader = ({
    isSelected,
    tabName,
    title,
    setSelectedTab
}: {
    isSelected: boolean,
    tabName: SelectedTabType,
    title: string,
    setSelectedTab: (value: React.SetStateAction<SelectedTabType>) => void
}) => {
    return (
        <TouchableOpacity onPress={() => setSelectedTab(tabName)}
            style={[styles.tabSelectionContainer, {
                borderBottomColor: isSelected ? colors.blueMark : 'transparent'
            }]} >
            <Text style={[styles.tabSelectionText, {
                color: isSelected ? colors.blueMark : 'grey'
            }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const MenuIconButton = ({
    imageSrc,
    onPress,
    title
}: {
    imageSrc: ImageSourcePropType | undefined,
    onPress: ((event: GestureResponderEvent) => void) | undefined,
    title: string
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={['#E3EDFF', '#FFFFFF', '#FFFFFF']}
                style={{ borderRadius: 20 }}
            >
                <View style={styles.menuIconContainer}>
                    <Image source={imageSrc} style={styles.menuIconImage} />
                    <Text style={styles.menuIconText}>{title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default MyTripsScreen;