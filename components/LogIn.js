import auth from '@react-native-firebase/auth';
import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {TextInput} from 'react-native-paper';
import IconButton from './button/IconButton';
import model from './Styles/model';

const LogIn = props => {
  const [Email, setEmail] = React.useState();
  const [Password, setPassword] = React.useState();

  //console.log(Email, Password);

  const createAccount = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const navigation = props.navigation;
  const window = Dimensions.get('window');
  return (
    <DropShadow style={model.shadow}>
      <View style={model.view}>
        <TextInput
          style={model.input}
          placeholder="E-mail................"
          value={Email}
          onChangeText={value => setEmail(value)}
          mode="flat"
        />
        <TextInput
          style={model.input}
          placeholder="Password................"
          value={Password}
          onChangeText={value => setPassword(value)}
          mode="flat"
          secureTextEntry
        />

        <IconButton
          style={{
            marginVertical: 10,
          }}
          label="Next"
          icon="skip-next"
          onPress={() => navigation.navigate('Home')}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={{fontSize: 22, marginVertical: 10}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forget');
          }}>
          <Text style={{fontSize: 15, marginVertical: 5}}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>
    </DropShadow>
  );
};

export default LogIn;
