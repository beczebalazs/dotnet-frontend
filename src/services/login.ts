import { AxiosResponse } from 'axios';

import { httpClient } from '.';
import { LoginPayload } from '../types/auth';

interface LoginRes {
	clientId: string;
}

const postLogin = async (payload: LoginPayload) =>
	(await httpClient.post<LoginRes, AxiosResponse<LoginRes>, LoginPayload>('login', payload)).data;

export { postLogin };
