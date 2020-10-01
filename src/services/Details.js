import api from './api';

export async function getDetails( id, type ) {
  try {
    const { data } = await api.get(`/${ type }/${ id }`);

    return { success: true, message: '', data };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!' };
  }
};
