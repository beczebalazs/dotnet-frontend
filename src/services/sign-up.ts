import { AxiosResponse } from 'axios';

import { httpClient } from '.';
import { SignUpPayload } from '../types/auth';

interface SignUpRes {
	statusCode: number;
	message: string;
}

const postSignUp = async (payload: SignUpPayload) =>
	(await httpClient.post<SignUpRes, AxiosResponse<SignUpRes>, SignUpPayload>('register', payload))
		.data;

export { postSignUp };
