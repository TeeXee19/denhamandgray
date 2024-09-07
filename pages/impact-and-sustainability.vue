<template>
<section class="bg-[url('/assets/images/tractor.svg')] bg-center bg-cover h-[500px]  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-col py-[5%]">
    <h3 class="text-[96px]">Impact and Sustainability </h3>
    <div class="font-bold text-[20px]">
        <NuxtLink class="text-theme-green" to="/">Home &nbsp; >> &nbsp;</NuxtLink>
        Impact and Sustainability
    </div>
</section>
<section class="py-[2%] px-[10%] font-dg  ">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[3%] mb-[3%]">
        <h2 class="font-semibold text-[64px] leading-[50px]">Our Commitment to Sustainability</h2>
        <div class="flex flex-row w-[8%] gap-3">
            <div class="w-[20%] h-[4px] bg-theme-green"></div>
            <div class="w-[80%] h-[4px] bg-theme-green"></div>
        </div>
        <p class="font-dg text-[24px] text-theme-gray font-medium w-[70%] leading-[40px]">
            Sustainability is at the heart of everything we do. We believe that responsible investment is key to building a resilient and prosperous future for Nigeria. Our focus is on financing projects and businesses that align with the Sustainable Development Goals (SDGs), promoting economic growth that benefits people and protects the planet.
        </p>
        <p class="font-dg text-[24px] text-theme-gray font-medium w-[70%] leading-[40px]">
            Through our investments, we support renewable energy, financing for SMEs, financial inclusion for women, energy efficiency, and more, ensuring that every project we finance contributes to environmental stewardship and long-term prosperity. We work closely with our partners to reduce environmental risks, improve resource efficiency, and foster inclusive development.
        </p>
    </div>
</section>
<section class="py-[4%] md:px-[2%] lg:px-[2%] xl:px-[4%] font-dg  bg-[url('/assets/images/tractor-black.svg')] bg-cover  bg-clip-border bg-no-repeat bg-no-repeat">
    <div class="flex flex-row items-center justify-center ">
        <div class="w-[50%]">
            <mapComponent />
        </div>
        <div class="w-[50%] border-[10px] border-theme-gray p-10 space-y-[5%] float-center">
            <div class="mt-[-8.5%] flex justify-center">
                <h3 class="text-white text-center font-bold font-in text-[26px] bg-[#2a2a2a] w-1/2"> IMPACT</h3>
            </div>
            <div class="grid grid-cols-2 gap-14">
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/co2.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">XXX</span> Tons of Carbon Emissions saved</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/bank-leaf.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.bankBranchesTransitioned}}</span> Bank branches Transitioned to Green Energy</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/woman.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.femaleBeneficiaries}}</span> of Beneficiaries are women
                            <meter :value="meterBen" class="w-full h-4 border-0 rounded-lg white">{{summary.femaleBeneficiaries}}</meter>
                        </h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/world-leaf.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.greenTransactions}}</span> of Transactions Financed are Green
                            <meter :value="meterGreen" class="w-full h-4 border-0 rounded-lg white">{{summary.greenTransactions}}</meter>
                        </h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/kiosk.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.businessesFinanced}}</span> MSME’s Financed</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/coins.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.amountDisbursed}}</span> Amount Disbursed</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/hand-naira.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.amountApproved}}</span> Approved for Onboarded Banks</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/handcase.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.financialInstitutions}}</span> Financial Institutions Onboarded</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="font-bold font-italic text-[32px] text-white w-[80%] mx-auto py-[5%]">
        "Our success with these pilot institutions is just the beginning. We are poised to onboard 10 more partners this year, expanding our impact and ensuring that every region in Nigeria benefits from inclusive and sustainable financing."
    </div>
</section>
</template>

<script lang="ts" setup>
import {
    StatusCode
} from "~/helpers/statusCodes";

const {
    $services
} = useNuxtApp();

const summary = ref('')
const meterGreen = ref('')
const meterBen = ref('')
onMounted(async () => {
    summary.value = await $services.base.summary();
    meterGreen.value = parseInt(summary.value.greenTransactions, 10) / 100
    meterBen.value = parseInt(summary.value.femaleBeneficiaries, 10) / 100
});
</script>
