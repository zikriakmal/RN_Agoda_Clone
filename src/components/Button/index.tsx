import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const Button = (props: TouchableOpacityProps) => {
    return (
        <TouchableOpacity {...props}>
            {props.children}
        </TouchableOpacity>
    )
}

export default Button;