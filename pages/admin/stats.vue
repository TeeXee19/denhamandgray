<template>
    <h3 class="font-dg text-[28px] font-semibold mb-4">
        Infographics
    </h3>
    <div class="rounded-md bg-white">
      <table class="w-full text-sm text-center text-gray-500 rounded-md">
        <thead class="text-xs text-gray-700 uppercase rounded-lg bg-theme-blue border-b">
          <tr>
            <th scope="col-span-1" class="px-6 py-3">Numbers</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(stat, index) in statsArray"
            :key="index"
            class="bg-white border-b hover:bg-gray-100"
          >
            <td v-if="!isEditing(index)" class="py-2 font-medium text-[#43525A]">{{ stat.number }}</td>
            <td v-else class="py-2">
              <input
                v-model="editItem.number"
                type="text"
                class="border-gray-600 rounded-md shadow-sm"
              />
            </td>
  
            <td v-if="!isEditing(index)" class="py-2 font-medium text-[#43525A]">{{ stat.description }}</td>
            <td v-else class="py-2">
              <input
                v-model="editItem.description"
                type="text"
                class="border-gray-600 rounded-md shadow-sm"
              />
            </td>
  
            <td class="flex items-center">
              <button v-if="!isEditing(index)" @click="startEditing(stat, index)" class="px-2 py-2">
                <img src="/assets/images/edit-icon.svg" alt="Edit" />
              </button>
              <button v-else @click="saveChanges(index)" class="px-2 py-2">
                <img src="/assets/images/save-icon.svg" alt="Save" />
              </button>
              <button v-if="isEditing(index)" @click="cancelEditing" class="px-2 py-2">
                <img src="/assets/images/cancel-icon.svg" alt="Cancel" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  definePageMeta({
    layout: "admin",
  });
  
  const { $services } = useNuxtApp();
  const summary = ref<any>(null);
  const statsArray = ref<any[]>([]);
  const editingIndex = ref<number | null>(null);
  const editItem = ref<any>({ number: '', description: '' });
  
  onMounted(async () => {
    summary.value = await $services.base.summary();
  
    if (summary.value) {
      statsArray.value = [
        { number: summary.value.femaleBeneficiaries || 'N/A', description: 'of Beneficiaries are women' },
        { number: summary.value.bankBranchesTransitioned || 'N/A', description: 'Bank branches transitioned to green energy' },
        { number: summary.value.carbonEmissionsSaved || 'N/A', description: 'Tons of carbon emission saved' },
        { number: summary.value.greenTransactions || 'N/A', description: 'of Transactions financed are green' },
        { number: summary.value.businessesFinanced || 'N/A', description: 'MSMEs financed' },
        { number: summary.value.amountDisbursed || 'N/A', description: 'Amount disbursed' },
        { number: summary.value.amountApproved || 'N/A', description: 'Approved for onboarded banks' },
        { number: summary.value.financialInstitutions || 'N/A', description: 'Financial Institutions financed' }
      ];
    }
  });
  
  const startEditing = (item: any, index: number) => {
    editItem.value = { ...item };
    editingIndex.value = index;
  };
  
  const saveChanges = async (index: number) => {
  try {
    await $services.base.updateSummary(editItem.value);
    statsArray.value[index] = { ...editItem.value };
    editingIndex.value = null;
  } catch (error) {
    console.error('Error saving changes:', error);
  }
};
  
  const cancelEditing = () => {
    editingIndex.value = null;
  };
  
  const isEditing = (index: number) => editingIndex.value === index;
  </script>
  