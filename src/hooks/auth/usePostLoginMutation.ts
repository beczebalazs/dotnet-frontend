import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postLogin } from '../../services/login';
import { setUserId } from '../../store/auth/slice';
import { useSnackbar } from 'notistack';
import { useAppDispatch } from '../../store/redux';
import { LoginPayload } from '../../types/auth';

const usePostLoginMutation = () => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['login'],
		onError: () =>
			enqueueSnackbar('Login error! Incorrect user data.', {
				variant: 'error',
			}),
		onSuccess: data => {
			dispatch(setUserId(data.clientId));
			navigate('/');
			enqueueSnackbar('Login success!', {
				variant: 'success',
			});
		},
		mutationFn: (vars: { payload: LoginPayload }) => postLogin(vars.payload),
	});
};

export default usePostLoginMutation;
