import React from 'react';
import {
    useWindowDimensions,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import COLORS from '../const/color';
import FONTS from '../const/fonts';
const Loader = ({ visible = false }) => {
    const { width, height } = useWindowDimensions();
    return (
        visible && (
            <View style={[style.container, { height, width }]}>
                <View style={style.loader}>
                    <ActivityIndicator size="large" color={COLORS.blue} />
                    <Text style={style.text}>Loading...</Text>
                </View>
            </View>
        )
    );
};

const style = StyleSheet.create({
    loader: {
        height: 70,
        backgroundColor: COLORS.white,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily:FONTS.normal
    },
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
});

export default Loader;