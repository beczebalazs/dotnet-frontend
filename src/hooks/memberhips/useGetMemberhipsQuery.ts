import { useQuery } from '@tanstack/react-query';

import { getMemberhips } from '../../services/memberhips';

const useGetMemberhipsQuery = () => {

	return useQuery({
		queryKey: ['memberhips'],
		queryFn: () => getMemberhips(),
	});
};

export default useGetMemberhipsQuery;

