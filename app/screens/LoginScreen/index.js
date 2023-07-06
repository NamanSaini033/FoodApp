import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Keyboard,
    ScrollView,
    Alert,
    Image,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
const LoginScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }

        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        }

        if (isValid) {
            login();
        }
    };
    const login = () => {
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert('Error', 'Something went wrong');
            }
        }, 3000);
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    return (
        <SafeAreaView style={styles.container}>
            <Loader visible={loading} />
            <Text style={styles.heading}>Login</Text>
            <View>
                <Input
                    onChangeText={text => handleOnchange(text, 'email')}
                    onFocus={() => handleError(null, 'email')}
                    iconName="mail"
                    label="E-mail"
                    placeholder="Your Email"
                    error={errors.email}
                />

                <Input
                    onChangeText={text => handleOnchange(text, 'password')}
                    onFocus={() => handleError(null, 'password')}
                    iconName="lock"
                    label="Password"
                    placeholder="your password"
                    error={errors.password}
                    password
                />
                <View style={styles.smallBox}>
                    <Text style={styles.remember}>Remember Me</Text>
                    <Text style={styles.password}>Forgot Password</Text>
                </View>


            </View>
            <Button title="Login" onPress={validate} />
            <View style={styles.smallBox}>
                <View style={styles.line}></View>
                <Text style={styles.space}>or continue with</Text>
                <View style={styles.line}></View>
            </View>
            <View style={[styles.smallBox, styles.ssoImages]}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/facebook.png')}
                />
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/google.png')}
                />
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/linkedin.png')}
                />
            </View>
            <Text
                onPress={() => navigation.navigate('Welcome')}
                style={[styles.message, styles.centerText]}
            >
                Don't have an account? <Text onPress={() => { navigation.navigate("SignUp") }} style={styles.password}>Sign Up</Text>
            </Text>
        </SafeAreaView>
    )
}


export default LoginScreen