import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Dashboard: undefined;
    SplashScreen: undefined;
    UnderconstructionScreen: { hasBackButton?: boolean };
    HotelsScreen: undefined;
    FlightsScreen: { hasBackButton?: boolean };
    FlightsAndHotelScreen: { hasBackButton?: boolean };
    ActivitiesScreen: { hasBackButton?: boolean };
    HomesAndAptsScreen: { hasBackButton?: boolean };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HotelsScreen'>;

export default NavigationProp;
