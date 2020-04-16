import api from '../services/api';

export async function createUser(username, email, password){
  try {
    const { status } = await api.post('user/', { username, email, password });
    if (status == '201')
      return true;
  } catch(error) {
    return false;
  }
}

export async function getUser(id) {
  const { data } = await api.get("user/"+id);
  return data;
}
