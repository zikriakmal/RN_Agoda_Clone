import { StyleSheet } from "react-native";

// Types
interface spacingType {
    borderRadius: number;
    layoutPaddingH: number;
    containerPaddingV: number;
    cardMarginB: number;
}

interface typeSizesType {
    FONT_SIZE_SMALL: number;
    FONT_SIZE_MEDIUM: number;
    FONT_SIZE_LARGE: number;
    FONT_WEIGHT_LIGHT: number;
    FONT_WEIGHT_MEDIUM: number;
    FONT_WEIGHT_HEAVY: number;
}

export interface themeType {
    name: string;
    color: string;
    primary: string;
    layoutBg: string;
    cardBg: string;
    cardBorderColor: string;
    accent: string;
    error: string;
}

interface themesType {
    light: themeType;
    dark: themeType;
}

// Spacing:- Common margins and paddings
const spacing: spacingType = {
    borderRadius: 16,
    layoutPaddingH: 16,
    containerPaddingV: 22,
    cardMarginB: 16,
};

// Type Sizes:- Font sizes and weights
const typeSizes: typeSizesType = {
    FONT_SIZE_LARGE: 16,
    FONT_SIZE_MEDIUM: 14,
    FONT_SIZE_SMALL: 12,
    FONT_WEIGHT_LIGHT: 200,
    FONT_WEIGHT_MEDIUM: 600,
    FONT_WEIGHT_HEAVY: 700,
};

const typeVariants = {
    titleLarge: {
        fontFamily: 'Poppins-Bold',
        fontSize: typeSizes.FONT_SIZE_LARGE,
    },
    titleSmall: {
        fontFamily: 'Poppins-Bold',
        fontSize: typeSizes.FONT_SIZE_SMALL,
    },
    bodyMedium: {
        fontFamily: 'Poppins-Regular',
        fontSize: typeSizes.FONT_SIZE_MEDIUM,
    },
    bodySmall: {
        fontFamily: 'Poppins-Regular',
        fontSize: typeSizes.FONT_SIZE_SMALL,
    },
};

// Themes:- Can alter values here. Can only be consumed through Context (see useTheme.js file)
const themes: themesType = {
    light: {
        name: 'light',
        color: '#695D5D',
        primary: '#2bbca2',
        layoutBg: '#e0eeec',
        cardBg: '#ffffff',
        cardBorderColor: '#EEECEC',
        accent: '#0071ff',
        error: '#B00020',
    },
    dark: {
        name: 'dark',
        color: '#ffffff',
        primary: '#2bbca2',
        layoutBg: '#121212',
        cardBg: '#1e1e1e',
        cardBorderColor: '#1A1A1A',
        accent: '#0071ff',
        error: '#B00020',
    },
};

const globalStyles = StyleSheet.create({
    shadow: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
        paddingVertical: 12,
        marginBottom: 5,
        borderRadius: 15
    },
    bottomShadow: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 15,
        paddingVertical: 12,
        marginBottom: 0,
        borderRadius: 15
    },
    normalShadow:{
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.50,
        borderBottomWidth:0.35,
        borderBottomColor:'lightgrey',
        shadowRadius: 5.85,
        elevation: 15,
    }
});

export { globalStyles, spacing, themes, typeSizes, typeVariants };
