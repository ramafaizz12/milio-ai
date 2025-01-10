import { useQuery } from '@tanstack/react-query';
import { getAllPlans, getFilteredPlans } from 'libs/api-client/billings';

export const usePlans = () => {
  return useQuery({
    queryFn: async () => getAllPlans(),
    queryKey: ['plans'],
  });
};

export const useFilteredPlans = () => {
  return useQuery({
    queryFn: async () => getFilteredPlans(),
    queryKey: ['filteredplans'],
  });
};
