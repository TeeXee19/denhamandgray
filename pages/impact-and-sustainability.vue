<template>
<section class="bg-[url('/assets/images/impact.png')] bg-center bg-cover bg-clip-border bg-no-repeat">
    <section class=" text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-col py-[5%]">
        <h3 class="text-[96px]">Impact and Sustainability </h3>
    </section>
    <section class="font-dg  bg-white flex flex-row">
        <div class="h-[30%] items-center space-y-4 pt-[3%] mb-[3%] px-6">
            <h2 class="font-bold text-[64px] leading-[50px]">Our Commitment to Sustainability</h2>
            <p class="font-ar text-[18px] text-black font-normal leading-[20px]">
                Sustainability is at the heart of everything we do. We believe that responsible investment is key to building a resilient and prosperous future for Nigeria. Our focus is on financing projects and businesses that align with the Sustainable Development Goals (SDGs), promoting economic growth that benefits people and protects the planet. Through our investments, we support renewable energy, financing for SMEs, financial inclusion for women, energy efficiency, and more, ensuring that every project we finance contributes to environmental stewardship and long-term prosperity. We work closely with our partners to reduce environmental risks, improve resource efficiency, and foster inclusive development.
            </p>
            <p class="font-ar text-[18px] text-black font-normal leading-[20px]">
                Through our investments, we support renewable energy, financing for SMEs, financial inclusion for women, energy efficiency, and more, ensuring that every project we finance contributes to environmental stewardship and long-term prosperity. We work closely with our partners to reduce environmental risks, improve resource efficiency, and foster inclusive development.
            </p>
        </div>
        <div>
            <img src="/assets/images/about.svg"/>
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
                        <img src="/assets/images/handcase.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <h3 class="text-[20px]"><span class="text-blue-500">{{summary.financialInstitutions}}</span> Financial Institutions Onboarded</h3>
                        </div>
                    </div>
                    <div class="flex gap-4 h-fit items-center">
                        <img src="/assets/images/bank-leaf.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <h3 class="text-[20px]">Over <span class="text-blue-500">50</span> Branch/distribution channels of impact 
                            </h3>
                        </div>
                    </div>
                    <div class="flex gap-4 h-fit items-center">
                        <img src="/assets/images/hand-naira.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <!-- <h3 class="text-[20px]"><span class="text-blue-500">{{summary.amountApproved}}</span> Approved for Onboarded Banks</h3> -->
                            <h3 class="text-[20px]"><span class="text-blue-500">N30billion</span> Approved for Onboarded Banks</h3>
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
                            <!-- <h3 class="text-[20px]"><span class="text-blue-500">{{summary.amountApproved}}</span> Approved for Onboarded Banks</h3> -->
                            <h3 class="text-[20px]">Average loan tenor <span class="text-blue-500">5</span> Years
                                 </h3>
                        </div>
                    </div>
                    <div class="flex gap-4 h-fit items-center">
                        <img src="/assets/images/kiosk.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <h3 class="text-[20px]">Over <span class="text-blue-500">{{summary.businessesFinanced}}</span> MSMEs Financed
                            </h3>
                        </div>
                    </div>
                    <div class="flex gap-4 h-fit items-center">
                        <img src="/assets/images/world-leaf.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <h3 class="text-[20px]"><span class="text-blue-500">{{summary.greenTransactions}}</span> are green transactions 
                                <meter :value="meterGreen" class="w-full h-4 border-0 rounded-lg white">{{summary.greenTransactions}}</meter>
                            </h3>
                        </div>
                    </div>
                    <div class="flex gap-4 h-fit items-center">
                        <img src="/assets/images/woman.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <h3 class="text-[20px]"><span class="text-blue-500">{{summary.femaleBeneficiaries}}</span> of Beneficiaries are Women
                                <meter :value="meterBen" class="w-full h-4 border-0 rounded-lg white">{{summary.femaleBeneficiaries}}</meter>
                            </h3>
                        </div>
                    </div>
                    <div class="flex gap-4 h-fit items-center">
                        <img src="/assets/images/bank-leaf.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <h3 class="text-[20px]">Financed transition of <span class="text-blue-500">{{summary.bankBranchesTransitioned}}</span> Bank Branches to Green Energy</h3>
                        </div>
                    </div>
                    <div class="flex gap-4 h-fit items-center">
                        <img src="/assets/images/co2.svg" />
                        <div class="font-in text-white font-semibold leading-8">
                            <h3 class="text-[20px]"><span class="text-blue-500">XXX</span> Tons of Carbon Emissions saved</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="font-bold font-italic text-[32px] text-white w-[80%] mx-auto py-[5%]">
            "Our success with these pilot institutions is just the beginning. We are poised to onboard 10 more partners this year, expanding our impact and ensuring that every region in Nigeria benefits from inclusive and sustainable financing."
        </div>
    </section>
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
