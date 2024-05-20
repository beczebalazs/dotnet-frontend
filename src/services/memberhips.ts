import { httpClient } from '.';

export const getMemberhips = async () =>
	(await httpClient.get<any>(`/membership-types`)).data;

export const postMemberhip = async (payload: any) =>
	(await httpClient.post(`/purchase-membership`, payload)).data;
