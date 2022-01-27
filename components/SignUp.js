import React from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {TextInput} from 'react-native-paper';
import IconButton from './button/IconButton';
import model from './Styles/model';

const SignUp = props => {
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [Address, setAddress] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [Gender, setGender] = React.useState('');
  const navigation = props.navigation;

  //console.log(Name, Email, Phone, Address, Password);

  return (
    <DropShadow style={model.shadow}>
      <View style={model.view}>
        <TextInput
          style={model.input}
          placeholder="Name.................."
          value={Name}
          onChangeText={value => setName(value)}
          mode="flat"
        />
        <TextInput
          style={model.input}
          placeholder="E-mail................"
          value={Email}
          onChangeText={value => setEmail(value)}
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
            onChangeText={value => setPhone(value)}
            mode="flat"
          />
        </View>
        <TextInput
          style={model.input}
          placeholder="Address................"
          value={Address}
          onChangeText={value => setAddress(value)}
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
        <IconButton label="Next" icon="skip-next" />
      </View>
    </DropShadow>
  );
};

export default SignUp;
