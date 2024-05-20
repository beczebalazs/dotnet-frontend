import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { patchCurrentUser } from '../../services/user';

const usePatchCurrentUserMutation = () => {
	const queryClient = useQueryClient();

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['currentUser'],
		onError: () => {
			enqueueSnackbar('Saving error!', {
				variant: 'error',
			});
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['currentUser'] });
			enqueueSnackbar('Succes! The changes updated.', {
				variant: 'success',
			});
		},
		mutationFn: (vars: { id: string; payload: any }) => patchCurrentUser(vars.id, vars.payload),
	});
};

export default usePatchCurrentUserMutation;

