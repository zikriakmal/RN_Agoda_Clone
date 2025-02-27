import { View } from "react-native";

const Gap = ({ height = 0, width = 0 }: { height?: number, width?: number }) => {
    return (
        <View style={{ height: height, width }} />
    )
}

export default Gap;