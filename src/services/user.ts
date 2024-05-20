import { httpClient } from '.';

export const getCurrentUser = async (userId?: string | undefined) =>
	(await httpClient.get(userId ? `/search-client/${userId}` : '/search-client')).data;

export const patchCurrentUser = async (id: string, payload: any) =>
	(await httpClient.put(`/modify-client/${id}`, payload)).data;

	export const deleteUser = async (id: string) =>
	(await httpClient.delete(`/delete-client/${id}`)).data;