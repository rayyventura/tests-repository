import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
function createConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

interface User {
  email: string;
  password: string;
}

export async function createUser(user: User) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

export async function signin(data: User) {
  const token = await axios.post(`${BASE_URL}/sign-in`, data);
  return token;
}

export async function getTestsByDisciplines(auth: string) {
  const config = createConfig(auth);
  const token = await axios.get(`${BASE_URL}/tests/disciplines`, config);
  return token;
}
export async function getTestsByTeacher(auth: string) {
  const config = createConfig(auth);
  const token = await axios.get(`${BASE_URL}/tests/teachers`, config);
  return token;
}
