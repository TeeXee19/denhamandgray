<template>
<section class="bg-[url('/assets/images/iands.png')] md:bg-[url('/assets/images/iands.png')] bg-center bg-cover bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center  space-y-0 flex flex-col py-[20%] md:py-[5%] h-[515px]">
    <h3 class="text-[24px] lg:text-[60px] font-gt">Impact and Sustainability </h3>
</section>
<section class=" bg-white flex flex-col md:flex-row space-y-[4%] md:pt-[2%]">
    <div class=" items-center space-y-4 pt-[4%] px-[6%] lg:w-[55%]">
        <h2 class="font-bold text-[20px] lg:text-[34px] 2xl:text-[44px] leading-[50px] font-gt">Our Commitment to Sustainability</h2>
        <p class="font-ar text-[14px] lg:text-[20px] 2xl:text-[24px] text-black font-normal lg:leading-[25px]">
            Sustainability is at the heart of everything we do. We believe that responsible investment is key to building a resilient and prosperous future for Nigeria. Our focus is on financing projects and businesses that align with the Sustainable Development Goals (SDGs), promoting economic growth that benefits people and protects the planet. 
        </p>
        <p class="font-ar text-[14px] lg:text-[20px] 2xl:text-[24px] text-black font-normal lg:leading-[25px] pt-3">
            Through our investments, we support renewable energy, financing for SMEs, financial inclusion for women, energy efficiency, and more, ensuring that every project we finance contributes to environmental stewardship and long-term prosperity. We work closely with our partners to reduce environmental risks, improve resource efficiency, and foster inclusive development.
        </p>
    </div>
        <img src="/assets/images/earth.png"  class="lg:w-[45%]"/>
</section>
<section class="bg-[url('/assets/images/impact2.png')] bg-center bg-cover bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center  space-y-0 flex flex-col py-[1%] hidden md:block">
</section>
<section class=" md:px-[4%] lg:px-[4%] xl:px-[10%] bg-white">
    <h2 class="font-bold text-[24px] md:text-[44px] md:leading-[50px] font-gt text-center p-4 py-[8%]">Our Impact Story</h2>
    <div class="flex flex-col lg:flex-row items-center justify-center space-y-6">
        <!-- <div class="lg:w-[55%]">
            <mapComponent />
        </div> -->
        <div class=" border-[10px] border-theme-gray p-3 md:p-10 md:space-y-[8%] float-center h-fit">
            <div class="px-[10px] sm:flex sm:flex-col md:grid md:grid-cols-3 gap-[6%] md:gap-14 space-y-[5%] md:space-y-0">
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/co2.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">XXX</span> Tons of Carbon Emissions saved</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/bank-leaf.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]"> <span class="text-blue-500">10</span> Bank branches Transitioned to Green Energy
                        </h3>
                    </div>
                </div>
                
                
                <!-- <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/hand-naira.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]">Average loan tenor <span class="text-blue-500">5</span> Years
                        </h3>
                    </div>
                </div> -->
                 <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/woman.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.femaleBeneficiaries}}</span> of Beneficiaries are Women
                            <meter :value="meterBen" class="w-full h-4 border-0 rounded-lg black">{{summary.femaleBeneficiaries}}</meter>
                        </h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/world-leaf.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.greenTransactions}}</span> of Transactions Financed are Green
                            <meter :value="meterGreen" class="w-full h-4 border-0 rounded-lg black">{{summary.greenTransactions}}</meter>
                        </h3>
                    </div>
                </div>
               
                <!-- <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/bank-leaf.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]">Financed transition of <span class="text-blue-500">{{summary.bankBranchesTransitioned}}</span> Bank Branches to Green Energy</h3>
                    </div>
                </div> -->
                
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/kiosk.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]">Over <span class="text-blue-500">1,000</span> MSMEs Financed
                        </h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/coins.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.amountDisbursed}}</span> Amount Disbursed</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/hand-naira.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <!-- <h3 class="text-[20px]"><span class="text-blue-500">{{summary.amountApproved}}</span> Approved for Onboarded Banks</h3> -->
                        <h3 class="text-[20px]"><span class="text-blue-500">N30billion</span> Approved for Onboarded Banks</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/handcase.svg" />
                    <div class="font-in text-black font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">{{summary.financialInstitutions}}</span> Financial Institutions Onboarded</h3>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="relative md:text-[20px] font-oblique font-bold  mx-auto py-[5%] text-[#474A4F] flex  items-center">
        <div class="lg:w-[55%]">
            <mapComponent />
        </div>
        <p class="md:text-justify w-[45%] font-gt">
            <span class=" -left-4 md:-left-7 text-[34px] md:text-[24px] leading-none text-black ">&ldquo;</span>
            Our success with these pilot institutions is just the beginning. We are poised to onboard 10 more partners this year, expanding our impact and ensuring that every region in Nigeria benefits from inclusive and sustainable financing.<span class="static  text-[34px] md:text-[24px] leading-none text-black">&rdquo;</span>
        </p>
        
    </div>
    

</section>
<section class="bg-[url('/assets/images/sm-impact2.png')] md:bg-[url('/assets/images/impact2.png')] bg-center bg-cover bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center  space-y-0 flex flex-col py-[7%] md:py-[5%]">
</section>
</template>

<script lang="ts" setup>
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
