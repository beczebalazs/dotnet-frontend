import { httpClient } from '.';
import { User } from '../types/User';

export const getCurrentUser = async (userId?: string | undefined) =>
	(await httpClient.get<User>(`/search-client/${userId}`)).data;

export const patchCurrentUser = async (id: string, payload: any) =>
	(await httpClient.put(`/modify-client/${id}`, payload)).data;
