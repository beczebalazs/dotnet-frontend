import { useMutation } from '@tanstack/react-query';

import { useSnackbar } from 'notistack';
import { postNewMembership } from '../../services/memberhips';

const usePostNewMembershipMutation = () => {

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['new-membership'],
		mutationFn: (vars: { payload: any }) => postNewMembership(vars.payload),
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

export default usePostNewMembershipMutation;

