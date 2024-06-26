import { useMutation } from '@tanstack/react-query';

import { useSnackbar } from 'notistack';
import { postMembership } from '../../services/memberhips';

const usePostMembershipMutation = () => {

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['buy-membership'],
		mutationFn: (vars: { payload: any }) => postMembership(vars.payload),
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

export default usePostMembershipMutation;

