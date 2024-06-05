import { httpClient } from '.';

export const getCurrentUser = async (userId?: string, searchQuery?: string) => {
  const endpoint = userId ? `/search-client/${userId}` : '/search-client';
  const params = searchQuery ? { email: searchQuery } : {};
  return (await httpClient.get(endpoint, { params })).data;
};

export const patchCurrentUser = async (id: string, payload: any) =>
	(await httpClient.put(`/modify-client/${id}`, payload)).data;

	export const deleteUser = async (id: string) =>
	(await httpClient.delete(`/delete-client/${id}`)).data;