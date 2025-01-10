import apiClient from './index';
import { billingHistoryData } from '@/data/billing-history';
import { billingHistoryDataFiltered } from '@/data/filtered-plans';
import { allPlanData } from '@/data/all-plans';

export type BillingHistoryDataType = (typeof billingHistoryData)[number];
export type BillingHistoryDataFilteredType =
  (typeof billingHistoryDataFiltered)[number];
export type AllPlanDataType = (typeof allPlanData)[number];
export const getAllPlans = async (): Promise<AllPlanDataType[]> => {
  const { data } = await apiClient.get(`plans`);
  return data;
};

export const getFilteredPlans = async (): Promise<
  BillingHistoryDataFilteredType[]
> => {
  const { data } = await apiClient.get(`plans/filter`);
  return data;
};

export const getmySubcription = async (): Promise<BillingHistoryDataType[]> => {
  const { data } = await apiClient.get(`subscription/my-subscriptions`);
  return data;
};

export const createSubcription = async (
  plan_id: number,
  duration: string
): Promise<any> => {
  const { data } = await apiClient.post(`subscription/create-with-payment`, {
    plan_id: plan_id,
    duration: duration,
  });
  return data;
};
