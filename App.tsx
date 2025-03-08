import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { NavigationContainer, useNavigationContainerRef, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ActivitiesScreen from './src/screens/ActivitiesScreen';
import FlightsAndHotelScreen from './src/screens/FlightsAndHotelScreen';
import FlightsScreen from './src/screens/FlightsScreen';
import HomesAndAptsScreen from './src/screens/HomesAndAptsScreen';
import HomeScreen from './src/screens/HomeScreen';
import HotelsScreen from './src/screens/HotelsScreen';
import SplashScreen from './src/screens/SplashScreen';
import UnderconstructionScreen from './src/screens/UnderconstructionScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabBar = ({ state, descriptors, navigation }: { state: any, descriptors: any, navigation: any }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 30, backgroundColor: 'white', borderWidth: 0.5, borderColor: 'lightgrey', paddingTop: 15 }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon = <Image source={isFocused ? require('./src/assets/bottom_nav/home_active.png') : require('./src/assets/bottom_nav/home.png')} style={{ height: 24, width: 24 }} />
        switch (route.name) {
          case 'Home': {
            icon = <Image source={isFocused ? require('./src/assets/bottom_nav/home_active.png') : require('./src/assets/bottom_nav/home.png')} style={{ height: 24, width: 24 }} />
            break;
          }
          case 'MyTrips': {
            icon = <Image source={isFocused ? require('./src/assets/bottom_nav/my_trips_active.png') : require('./src/assets/bottom_nav/my_trips.png')} style={{ height: 24, width: 24 }} />
            break;
          }
          case 'Deals': {
            icon = <Image source={isFocused ? require('./src/assets/bottom_nav/deals_active.png') : require('./src/assets/bottom_nav/deals.png')} style={{ height: 24, width: 28 }} />
            break;
          }
          case 'Cart': {
            icon = <Image source={isFocused ? require('./src/assets/bottom_nav/cart_active.png') : require('./src/assets/bottom_nav/cart.png')} style={{ height: 24, width: 25 }} />
            break;
          }
          case 'More': {
            icon = <Image source={isFocused ? require('./src/assets/bottom_nav/more_active.png') : require('./src/assets/bottom_nav/more.png')} style={{ height: 24, width: 18 }} />

            break;
          }
          default: {
            icon = <Image source={isFocused ? require('./src/assets/bottom_nav/home_active.png') : require('./src/assets/bottom_nav/home.png')} style={{ height: 24, width: 24 }} />
            break;
          }
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', gap: 6 }}
          >
            {icon}
            <Text style={{ color: isFocused ? colors.primary : 'grey', fontWeight: '600', fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }} tabBar={(props) => <MyTabBar {...props} />} >
      <Tab.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
      <Tab.Screen name="MyTrips" options={{ title: 'My Trips' }} component={UnderconstructionScreen} />
      <Tab.Screen name="Deals" options={{ title: 'Deals' }} component={UnderconstructionScreen} />
      <Tab.Screen name="Cart" options={{ title: 'Cart' }} component={UnderconstructionScreen} />
      <Tab.Screen name="More" options={{ title: 'More' }} component={UnderconstructionScreen} />
    </Tab.Navigator>
  );
}
function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();
  useEffect(() => {
    setTimeout(() => {
      if (navigationRef.isReady()) {
        navigationRef.resetRoot({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        });
      }
    }, 1000);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
          component={SplashScreen} />
        <Stack.Screen name="Dashboard"
          options={{ headerShown: false }}
          component={MyTabs} />
        <Stack.Screen
          name="UnderconstructionScreen"
          options={{
            headerShown: false,
            title: 'UnderconstructionScreen',
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom'
          }}
          component={UnderconstructionScreen} />
        <Stack.Screen
          name="HotelsScreen"
          options={{ headerShown: false }}
          component={HotelsScreen} />
        <Stack.Screen
          name="FlightsScreen"
          options={{ headerShown: false }}
          component={FlightsScreen}
        />
        <Stack.Screen
          name="FlightsAndHotelScreen"
          options={{ headerShown: false }}
          component={FlightsAndHotelScreen}
        />
        <Stack.Screen
          name="ActivitiesScreen"
          options={{ headerShown: false }}
          component={ActivitiesScreen} />
        <Stack.Screen
          name="HomesAndAptsScreen"
          options={{ headerShown: false }}
          component={HomesAndAptsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
