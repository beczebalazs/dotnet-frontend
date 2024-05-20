import { useQuery } from '@tanstack/react-query';

import { getClientMemberships } from '../../services/memberhips';

const useGetClientMembershipsQuery = (id: string) => {
	
	return useQuery({
		queryKey: ['client-memberships', id],
		queryFn: () => getClientMemberships(id),
	});
};

export default useGetClientMembershipsQuery;

