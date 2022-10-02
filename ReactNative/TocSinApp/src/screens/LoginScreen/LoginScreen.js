import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../../components/FormInput/FormInput';
import SocialButton from '../../components/SocialButton/SocialButton';
import { useNavigation } from '@react-navigation/native'
import { Colours } from '../../utilities/Colours';
import { windowHeight } from '../../utilities/Dimension';



const LoginScreen = () => {

    const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

//   const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image
        source={require('../../../assets/images/board2.png')}
        style={styles.logo}
      /> */}
      <View style={styles.textLogo}>
        <Text style={styles.textSpan}>T</Text>
        <Text style={styles.text}>ocsin</Text>
      </View>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      {/* <FormButton
        buttonTitle="Sign In"
        // onPress={() => login(email, password)}
      /> */}
      <TouchableOpacity style={styles.formButtonContainer} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.formButtonText}>Sign In</Text>
    </TouchableOpacity>

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#e6eaf4"
            // color="#4867aa"
            backgroundColor="#4867aa"
            // backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: Colours.PRIMARY,
    height: '100%'
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  textLogo: {
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 60,
    marginBottom: 50,
    color: Colours.PRIMARY,
    fontWeight: '900',
    backgroundColor: Colours.RED,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingRight: 10
  },
  textSpan: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 60,
    marginBottom: 50,
    color: Colours.PRIMARY,
    fontWeight: '900',
    backgroundColor: Colours.LIGHTGRAY,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 10
    // width: 20
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colours.SECONDARY_SUP,
    // fontFamily: 'Lato-Regular',
  },
  formButtonContainer:{
    marginTop: 10,
    width: '100%',
    height: windowHeight/15,
    backgroundColor: Colours.RED,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
    },
    formButtonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: Colours.WHITE,
        // fontFamily: 'Lato-Regular',
    },
});