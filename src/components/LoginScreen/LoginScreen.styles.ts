import {StyleSheet} from 'react-native';

export const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2BEB5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
    width: 300,
    backgroundColor: '#FFFFFF',
  },
  inputWithError: {
    marginBottom: 0,
  },
  errorText: {
    color: '#880808',
    marginBottom: 10,
  },
  button: {
    borderColor: '#000000',
    borderRadius: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    backgroundColor: '#40B5AD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 800,
    color: '#000000',
    textAlign: 'center',
  },
  announcementContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  announcementMessage: {
    fontWeight: 800,
    textAlign: 'center',
  },
  announcementItem: {
    fontWeight: 400,
    textAlign: 'center',
  },
});
