import { useMutation } from '@tanstack/react-query';

import { useSnackbar } from 'notistack';
import { deleteUser } from '../../services/user';

const useDeleteUserMutation = () => {

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['delete-user'],
		mutationFn: (vars: { id: string }) => deleteUser(vars.id),
		onError: () =>
			enqueueSnackbar('Error', {
				variant: 'error',
			}),
		onSuccess: () => {
			enqueueSnackbar('Success!', {
				variant: 'success',
			});
		},
	});
};

export default useDeleteUserMutation;

