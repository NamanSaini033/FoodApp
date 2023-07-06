import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Keyboard,
    ScrollView,
    Alert,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';


const SignUpScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
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

        if (!inputs.firstName) {
            handleError('Please input firstName', 'firstName');
            isValid = false;
        }

        if (!inputs.lastName) {
            handleError('Please input lastName', 'lastName');
            isValid = false;
        }
        if (!inputs.phone) {
            handleError('Please input phone number', 'phone');
            isValid = false;
        }

        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }

        if (isValid) {
            register();
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);
                navigation.navigate('Welcome');
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
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Icon
                    onPress={()=>{navigation.goBack()}}
                    name="arrow-back"
                    size={30}
                    style={styles.backIcon}
                />
                <Text style={styles.heading}>Sign up</Text>
                <View>
                    <Input
                        onChangeText={text => handleOnchange(text, 'firstName')}
                        onFocus={() => handleError(null, 'firstName')}
                        label="First Name"
                        placeholder="Your First Name"
                        error={errors.firstName}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'lastName')}
                        onFocus={() => handleError(null, 'lastName')}
                        label="Last Name"
                        placeholder=" Your Last Name"
                        error={errors.lastName}
                    />
                    <Input
                        keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'phone')}
                        onFocus={() => handleError(null, 'phone')}
                        label="Phone Number"
                        placeholder="Phone Number"
                        error={errors.phone}
                    />
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
                        placeholder="Your password"
                        error={errors.password}
                        password
                    />
                    <Text style={styles.message}>By signing up you agree to our <Text style={styles.blueText}>Terms & Condition</Text>  and <Text style={styles.blueText}>Privacy Policy</Text>.<Text style={styles.starText}>*</Text></Text>
                    <Button title="Continue" onPress={validate} />

                </View>
                <Text
                    style={[styles.message, styles.centerText]}
                >
                    Already signed up ? <Text onPress={()=>{navigation.navigate("Login")}} style={styles.starText}>Login</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;