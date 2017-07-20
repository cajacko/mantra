import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  View,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from 'components/Login/Login.style';

const Login = ({
  onChange,
  login,
  register,
  id,
  loginActivity,
  registerActivity,
  modal,
  modalClose,
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

  if (modal) {
    modalElement = (
      <View style={style.modal}>
        <View style={style.modalBackground} />
        <View style={style.modalWrapper}>
          <Text style={style.modalText}>{modal}</Text>
          <TouchableOpacity onPress={modalClose}>
            <View style={style.modalButton}>
              <Text style={style.modalButtonText}>Dismiss</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
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
        <Text style={style.title}>Mantra</Text>
        <Text style={style.description}>
          Remember the lessons you have learnt
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
        <TouchableOpacity onPress={login}>
          <View style={style.button}>
            <Text style={style.buttonText}>Go</Text>
          </View>
        </TouchableOpacity>
        {goActivityElement}
      </View>

      <View style={style.register}>
        <TouchableOpacity onPress={register}>
          <View style={style.button}>
            <Text style={style.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
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
  modal: PropTypes.string,
  modalClose: PropTypes.func.isRequired,
};

Login.defaultProps = {
  modal: null,
};

export default Login;
