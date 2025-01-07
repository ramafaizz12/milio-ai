import apiClient from './index';

export const getAllPlans = () => {
  return apiClient.get(`plans`, {});
};

export const getmySubcription = (token: string) => {
  return apiClient.get(`subscription/my-subscriptions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
