import { useQuery } from '@tanstack/react-query';
import { getmySubcription } from 'libs/api-client/billings';

export const useSubcription = () => {
  return useQuery({
    queryFn: async () => await getmySubcription(),
    queryKey: ['subscriptions'],
  });
};
