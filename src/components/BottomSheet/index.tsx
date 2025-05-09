import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, PanResponder } from 'react-native';
import styles from './styles';

const { height } = Dimensions.get('window');

const BottomSheet = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
    const translateY = useRef(new Animated.Value(height)).current; // Start off-screen

    // Animate the bottom sheet in and out
    const slideUp = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () => {
        Animated.timing(translateY, {
            toValue: height,
            duration: 300,
            useNativeDriver: true,
        }).start(() => onClose());
    };

    // Drag down to close behavior
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gesture) => gesture.dy > 5,
            onPanResponderMove: (_, gesture) => {
                if (gesture.dy > 0) {
                    translateY.setValue(gesture.dy);
                }
            },
            onPanResponderRelease: (_, gesture) => {
                if (gesture.dy > 100) {
                    slideDown();
                } else {
                    slideUp();
                }
            },
        })
    ).current;

    React.useEffect(() => {
        if (isVisible) {
            slideUp();
        } else {
            slideDown();
        }
    }, [isVisible]);

    return (
        <Animated.View
            style={[styles.bottomSheet, { transform: [{ translateY }] }]}
            {...panResponder.panHandlers}
        >
            <View style={styles.sheetHandle} />
            <Text style={styles.sheetText}>This is a custom Bottom Sheet</Text>
            <TouchableOpacity onPress={slideDown} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default BottomSheet;
