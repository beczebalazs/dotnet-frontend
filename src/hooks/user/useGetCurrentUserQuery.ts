import { useQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../../services/user';
import { userIdSelector } from '../../store/auth/selector';
import { useAppSelector } from '../../store/redux';

const useGetCurrentUserQuery = () => {
	const userId = useAppSelector(userIdSelector);

	return useQuery({
		queryKey: ['currentUser'],
		queryFn: () => getCurrentUser(userId),
	});
};

export default useGetCurrentUserQuery;

