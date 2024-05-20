import { useMutation } from '@tanstack/react-query';

import { useSnackbar } from 'notistack';
import { putMembership } from '../../services/memberhips';

const usePutMembershipMutation = () => {

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['modify-membership'],
		mutationFn: (vars: { id: string, payload: any }) => putMembership(vars.id, vars.payload),
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

export default usePutMembershipMutation;

