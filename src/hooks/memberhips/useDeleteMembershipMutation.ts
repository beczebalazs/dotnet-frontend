import { useMutation } from '@tanstack/react-query';

import { useSnackbar } from 'notistack';
import { deleteMembership } from '../../services/memberhips';

const useDeleteMembershipMutation = () => {

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['delete-membership'],
		mutationFn: (vars: { id: string }) => deleteMembership(vars.id),
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

export default useDeleteMembershipMutation;

