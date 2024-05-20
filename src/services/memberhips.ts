import { httpClient } from ".";

export const getMemberships = async () =>
  (await httpClient.get<any>(`/membership-types`)).data;

export const postMembership = async (payload: any) =>
  (await httpClient.post(`/purchase-membership`, payload)).data;

export const putMembership = async (id: string, payload: any) =>
  (await httpClient.put(`/modify-membership/${id}`, payload)).data;

export const postNewMembership = async (payload: any) =>
  (await httpClient.post(`/add-membership`, payload)).data;

export const deleteMembership = async (id: string) =>
  (await httpClient.delete(`/remove-membership/${id}`)).data;

export const getClientMemberships = async (id: string) =>
  (await httpClient.get(`/get-client-memberships/${id}`)).data;

  export const getMembershipById = async (id: string) =>
  (await httpClient.get(`/get-membership-by-id/${id}`)).data;