import { httpClient } from ".";

export const postEntry = async (payload: any) =>
  (await httpClient.post("/entry-to-gym", payload)).data;

export const getEntries = async () =>
  (await httpClient.get("/get-all-entries")).data;
