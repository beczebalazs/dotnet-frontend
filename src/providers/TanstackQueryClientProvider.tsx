import { FC, PropsWithChildren, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TanstackQueryClientProvider: FC<PropsWithChildren> = props => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false, // default: true
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			{props.children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default TanstackQueryClientProvider;
