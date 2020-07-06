import {observable, decorate, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class Store {
  email = '';
  password = '';
  confirmPassword = '';
  error = null;
  userID = null;
  startLoading = true;

  onChange = (name, text) => {
    this[name] = text;
  };

  getData = async () => {
    try {
      const id = await AsyncStorage.getItem('userID');
      if (id !== null) {
        this.userID = id;
        console.log(id);
        this.startLoading = false;
      }
    } catch (e) {
      console.log(e);
    }
  };

  onLogin = async () => {
    const loginFormData = new FormData();
    const {email, password} = this;

    loginFormData.append('email', email);
    loginFormData.append('password', password);

    try {
      const res = await fetch(
        'https://dev.addictivelearning.io/api/v1/login ',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: loginFormData,
        },
      );
      if (res.ok) {
        const {data} = await res.json();
        this.userID = data.user.id;
        await AsyncStorage.setItem('userID', String(data.user.id));
      } else {
        console.log(await res.json());
      }
    } catch (e) {
      console.log(e);
    }
  };

  onRegistration = async () => {
    const registerFormData = new FormData();
    const {email, password, confirmPassword} = this;

    registerFormData.append('email', email);
    registerFormData.append('password', password);
    registerFormData.append('password_confirmation', confirmPassword);
    registerFormData.append('terms_of_use', true);
    try {
      const res = await fetch(
        'https://dev.addictivelearning.io/api/v1/register ',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: registerFormData,
        },
      );
      if (res.ok) {
        const {data} = await res.json();
        this.userID = data.user.id;
        await AsyncStorage.setItem('userID', String(data.user.id));
      } else {
        console.log(await res.json());
      }
    } catch (e) {
      console.log(e);
    }
  };

  onLogout = async () => {
    try {
      const res = await fetch(
        'https://dev.addictivelearning.io/api/v1/logout',
        {method: 'POST'},
      );
      if (res.ok) {
        await AsyncStorage.removeItem('userID');
        this.userID = null;
        console.log(await res.json());
      } else {
        console.log('logout failure');
      }
    } catch (e) {
      console.log(e);
    }
  };
}

Store = decorate(Store, {
  email: observable,
  password: observable,
  confirmPassword: observable,
  error: observable,
  userID: observable,
  onChange: action,
  onRegistration: action,
  onLogin: action,
  onLogout: action,
  startLoading: observable,
});

const store = new Store();
store.getData();
export default store;
