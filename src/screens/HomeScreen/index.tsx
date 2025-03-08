import { useCallback, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import { Gap, Line, Modal } from '../../components';
import { DiscoverHotels, GrabCoupon, Header, MainMenu, MorePlaces, NewUserWelcomePack, PlanTrip, Promotions, SliderMenu, SpecialDeals, VipStatus } from "./Components";
import styles from "./styles";

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(true);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 500);
    }, []);

    return (
        <SafeAreaView testID="dashboard-screen" style={styles.mainContainer}  >
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Modal isOpen={isPromotionModalOpen} setIsOpen={setIsPromotionModalOpen} />
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh} />
            } >
                <Header />

                <Gap height={20} />
                <MainMenu />

                <Gap height={20} />
                <SliderMenu />

                <Gap height={0} />
                <NewUserWelcomePack />

                <Gap height={0} />
                <PlanTrip />

                <Gap height={0} />
                <GrabCoupon />

                <Line />
                <SpecialDeals />

                <Line />
                <Promotions />

                <Line />
                <VipStatus />

                <Line />
                <DiscoverHotels />

                <Line />
                <MorePlaces />
            </ScrollView >
        </SafeAreaView >
    )
}





export default HomeScreen;