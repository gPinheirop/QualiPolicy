import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Policy} from './types/policy';

interface HomeState {
  policies: Array<Policy>;
  updatePolicies: (policy: Policy) => void;
}

export const useReportStore = create<HomeState>()(
  persist(
    (set, get) => ({
      policies: [],
      updatePolicies: (policy: Policy) => {
        const updatedPolicies = get().policies;
        updatedPolicies.push(policy);

        set({policies: updatedPolicies});
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
