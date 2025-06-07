import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {loginScreenStyles} from './LoginScreen.styles';
import {LoginProps} from '@/config/api/auth.types';
import {useAuthWithSocket} from './LoginScreen.utils';

const LoginScreen = React.memo((): React.JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginProps>();
  const {announcement, errorMessage, loading, onLoginAndConnect} =
    useAuthWithSocket();

  return (
    <View style={loginScreenStyles.container}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Emails is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            style={[
              loginScreenStyles.input,
              errors?.email && loginScreenStyles.inputWithError,
            ]}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        )}
      />

      {errors?.email && (
        <Text style={loginScreenStyles.errorText}>
          {errors?.email?.message}
        </Text>
      )}

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {value: 6, message: 'Minimum length is 6 characters'},
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="Password"
            value={value}
            onChangeText={onChange}
            style={[
              loginScreenStyles.input,
              errors?.password && loginScreenStyles.inputWithError,
            ]}
            autoCapitalize="none"
            secureTextEntry
          />
        )}
      />

      {errors?.password && (
        <Text style={loginScreenStyles.errorText}>
          {errors?.password?.message}
        </Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onLoginAndConnect)}
        disabled={loading}
        style={loginScreenStyles.button}>
        {loading ? (
          <ActivityIndicator color={'#000000'} />
        ) : (
          <Text style={loginScreenStyles.buttonText}>{'Log In'}</Text>
        )}
      </TouchableOpacity>

      {errorMessage && (
        <Text style={loginScreenStyles.errorText}>{errorMessage}</Text>
      )}

      {announcement && (
        <View style={loginScreenStyles.announcementContainer}>
          <Text style={loginScreenStyles.announcementMessage}>
            {announcement?.message}
          </Text>
          {announcement?.numbers?.map((item, index) => (
            <Text
              key={`${item}_${index}`}
              style={loginScreenStyles.announcementItem}>
              {item.toString()}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
});

export default LoginScreen;
