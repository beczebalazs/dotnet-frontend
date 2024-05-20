import { useMutation } from '@tanstack/react-query';

import { useSnackbar } from 'notistack';
import { postEntry } from '../../services/entry';

const usePostEntryMutation = () => {

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['entry'],
		mutationFn: (vars: { payload: any }) => postEntry(vars.payload),
		onError: () =>
			enqueueSnackbar('Membership not found', {
				variant: 'error',
			}),
		onSuccess: () => {
			enqueueSnackbar('Success entry!', {
				variant: 'success',
			});
		},
	});
};

export default usePostEntryMutation;

