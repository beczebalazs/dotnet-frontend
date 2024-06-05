
import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/user';

const useGetCurrentUserQuery = (id?: string, searchQuery?: string) => {
  return useQuery({
    queryKey: ['currentUser', id, searchQuery],
    queryFn: () => getCurrentUser(id, searchQuery),
  });
};

export default useGetCurrentUserQuery;
