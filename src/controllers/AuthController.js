import api from '../services/api';

export async function login(email, password){
  try {
    const { data: [ { status, user } ] } = await api.post('login/', { email, password });
    if (status == '200')
      return user;
  } catch(error) {
    return false;
  }
}
