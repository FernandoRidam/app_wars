import api from './api';

export async function getFilms() {
  try {
    const { data } = await api.get('/films/');

    return { success: true, message: '', films: data.results };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!' };
  }
};
