import { useQuery } from '@tanstack/react-query';

import { getEntries } from '../../services/entry';

const useGetEntriesQuery = () => {
	
	return useQuery({
		queryKey: ['entries'],
		queryFn: () => getEntries(),
	});
};

export default useGetEntriesQuery;

