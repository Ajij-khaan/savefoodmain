import auth from '@react-native-firebase/auth';
import React from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {TextInput} from 'react-native-paper';
import IconButton from './button/IconButton';
import model from './Styles/model';

const SignUp = props => {
  const [Name, setName] = React.useState(null);
  const [Email, setEmail] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  const [Address, setAddress] = React.useState(null);
  const [Phone, setPhone] = React.useState(null);
  const [EmailError, setEmailError] = React.useState(false);
  const [PasswordError, setPasswordError] = React.useState(false);
  const [User, setUser] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const navigation = props.navigation;

  //   console.log(
  //     User,
  //     Name,
  //     Email,
  //     Phone,
  //     Address,
  //     Password,
  //     EmailError,
  //     PasswordError,
  //   );

  return (
    <DropShadow style={model.shadow}>
      <View style={model.view}>
        <TextInput
          style={model.input}
          placeholder="Name.................."
          value={Name}
          onChangeText={val => setName(val)}
          mode="flat"
        />
        <TextInput
          error={EmailError}
          style={model.input}
          placeholder="E-mail................"
          value={Email}
          onChangeText={val => {
            setEmail(val);
          }}
          mode="flat"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={model.input}
            placeholder="Phone................"
            value={Phone}
            onChangeText={val => setPhone(val)}
            mode="flat"
          />
        </View>
        <TextInput
          style={model.input}
          placeholder="Address................"
          value={Address}
          onChangeText={val => setAddress(val)}
          mode="flat"
        />
        <TextInput
          error={PasswordError}
          style={model.input}
          placeholder="Password................"
          value={Password}
          onChangeText={val => {
            setPassword(val);
          }}
          mode="flat"
          secureTextEntry
        />
        <IconButton
          onPress={() => {
            auth()
              .createUserWithEmailAndPassword(Email, Password)
              .then(userCredential => {
                //console.log(userCredential.user)
                setUser(userCredential.user);
                //StoreData(userCredential.user);
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
          }}
          label="Next"
          icon="skip-next"
        />
      </View>
    </DropShadow>
  );
};

export default SignUp;
