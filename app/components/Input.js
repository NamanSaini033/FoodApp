import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../const/color';
import FONTS from '../const/fonts';
const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => { },
    ...props
}) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View
                style={[
                    styles.inputContainer,
                    {
                        borderColor: error
                            ? COLORS.red
                            : isFocused
                                ? COLORS.darkBlue
                                : COLORS.light,
                        alignItems: 'center',
                    },
                ]}>
                {iconName && <Icon
                    name={iconName}
                    style={styles.icon}
                />}
                <TextInput
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    style={styles.textInput}
                    {...props}
                />
                {password && (
                    <Icon
                        onPress={() => setHidePassword(!hidePassword)}
                        name={hidePassword ? 'eye-off' : 'eye'}
                        style={styles.password}
                    />
                )}
            </View>
            {error && (
                <Text style={styles.error}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        marginBottom: 10,
        fontSize: 14,
        color: COLORS.black,
        lineHeight: 17,
        fontFamily: FONTS.semiBold,
    },
    inputContainer: {
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 4,
    },
    container: {
        marginBottom: 20
    },
    icon: {
        color: COLORS.black,
        fontSize: 22,
        marginRight: 10
    },
    textInput: {
        color: COLORS.black,
        fontFamily:FONTS.normal,
        flex: 1
    },
    password: {
        color: COLORS.darkBlue,
        fontSize: 22
    },
    error: {
        marginTop: 7,
        color: COLORS.red,
        fontSize: 12
    }
});

export default Input;