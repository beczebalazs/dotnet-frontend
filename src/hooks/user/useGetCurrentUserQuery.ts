import { useQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../../services/user';

const useGetCurrentUserQuery = (id?: string) => {
	

	return useQuery({
		queryKey: ['currentUser', id],
		queryFn: () => getCurrentUser(id),
	});
};

export default useGetCurrentUserQuery;

