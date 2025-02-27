import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the type for your navigation stack
type RootStackParamList = {
    HotelsScreen: undefined; // Add other screens if needed
    SplashScreen: undefined;
    UnderconstructionScreen: { hasBackButton?: boolean };
};

// Specify the navigation prop type
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HotelsScreen'>;

export default NavigationProp;
