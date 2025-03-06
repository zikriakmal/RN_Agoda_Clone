import { Text, TextProps } from "react-native";

const Typography = (props: TextProps) => {
    return (
        <Text {...props}>{props.children}</Text>
    )
}

export default Typography;