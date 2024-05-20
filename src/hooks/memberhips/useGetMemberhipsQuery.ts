import { useQuery } from '@tanstack/react-query';

import { getMemberships } from '../../services/memberhips';

const useGetMemberhipsQuery = () => {

	return useQuery({
		queryKey: ['memberships'],
		queryFn: () => getMemberships(),
	});
};

export default useGetMemberhipsQuery;

