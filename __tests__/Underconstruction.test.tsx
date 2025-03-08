import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import UnderconstructionScreen from "../src/screens/UnderconstructionScreen";

jest.mock("@react-navigation/native", () => ({
    useNavigation: jest.fn(),
    useRoute: jest.fn(),
}));

describe(" test", () => {
    it("renders correctly", () => {
        // Mock route and navigation
        (useNavigation as jest.Mock).mockReturnValue({
            goBack: jest.fn(),
        });

        (useRoute as jest.Mock).mockReturnValue({
            params: { hasBackButton: true },
        });

        const { getByText } = render(<UnderconstructionScreen />);
        expect(getByText("Underconstruction")).toBeTruthy();
    });

    it("shows the Back button when hasBackButton is true", () => {
        const mockGoBack = jest.fn();

        (useNavigation as jest.Mock).mockReturnValue({
            goBack: mockGoBack,
        });

        (useRoute as jest.Mock).mockReturnValue({
            params: { hasBackButton: true },
        });

        const { getByText } = render(<UnderconstructionScreen />);
        const backButton = getByText("Back");

        expect(backButton).toBeTruthy();

        // Simulate pressing the back button
        fireEvent.press(backButton);
        expect(mockGoBack).toHaveBeenCalled();
    });

    it("hides the Back button when hasBackButton is false", () => {
        (useRoute as jest.Mock).mockReturnValue({
            params: { hasBackButton: false },
        });

        const { queryByText } = render(<UnderconstructionScreen />);
        expect(queryByText("Back")).toBeNull();
    });
});
