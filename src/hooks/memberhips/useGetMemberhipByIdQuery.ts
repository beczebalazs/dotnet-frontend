import { useQuery } from '@tanstack/react-query';

import { getMembershipById } from '../../services/memberhips';

const useGetMemberhipByIdQuery = (id: string) => {

	return useQuery({
		queryKey: ['memberships-by-id'],
		queryFn: () => getMembershipById(id),
	});
};

export default useGetMemberhipByIdQuery;

