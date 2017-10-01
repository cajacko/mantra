import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  View,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Button from 'components/Button/Button';
import style from 'components/Login/Login.style';

const Login = ({
  onChange,
  login,
  register,
  id,
  loginActivity,
  registerActivity,
}) => {
  let goActivityElement;
  let registerActivityElement;
  let modalElement;

  if (loginActivity) {
    goActivityElement = <ActivityIndicator style={style.activity} />;
  }

  if (registerActivity) {
    registerActivityElement = <ActivityIndicator style={style.activity} />;
  }

  return (
    <ScrollView
      contentContainerStyle={style.container}
      onPress={Keyboard.dismiss}
      keyboardShouldPersistTaps="never"
      scrollEnabled={false}
    >
      <StatusBar barStyle="dark-content" />
      {modalElement}
      <View style={style.header}>
        <Text style={style.description}>
          Create an account, or login to backup and sync your mantra accross
          devices
        </Text>
      </View>

      <View style={style.login}>
        <Text style={style.loginTitle}>Login</Text>
        <TextInput
          style={style.input}
          value={id}
          onChange={onChange}
          placeholder="Account ID"
          placeholderTextColor={style.placeholderColor}
          autoCapitalize="none"
          blurOnSubmit
          onSubmitEditing={login}
          returnKeyType="go"
        />
        <Button onPress={login} text="Go" theme="default" />
        {goActivityElement}
      </View>

      <View style={style.register}>
        <Button onPress={register} text="Register" theme="default" />
        {registerActivityElement}
      </View>
    </ScrollView>
  );
};

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  loginActivity: PropTypes.bool.isRequired,
  registerActivity: PropTypes.bool.isRequired,
};

export default Login;
