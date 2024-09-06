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
                        <h3 class="text-[20px]"><span class="text-blue-500">10</span> Bank branches Transitioned to Green Energy</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/woman.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">70%</span> of Beneficiaries are women
                            <meter value="0.7" class="w-full h-4 border-0 rounded-lg white">70%</meter>
                        </h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/world-leaf.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">50%</span> of Transactions Financed are Green
                            <meter value="0.5" class="w-full h-4 border-0 rounded-lg white">50%</meter>
                        </h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/kiosk.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">1000</span> MSME’s Financed</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/coins.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">&#8358;300 Million</span> Amount Disbursed</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/hand-naira.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">&#8358;5 billion</span> Approved for Onboarded Banks</h3>
                    </div>
                </div>
                <div class="flex gap-4 h-fit items-center">
                    <img src="/assets/images/handcase.svg" />
                    <div class="font-in text-white font-semibold leading-8">
                        <h3 class="text-[20px]"><span class="text-blue-500">3</span> Financial Institutions Onboarded</h3>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
</section>
<!-- <section class="grid md:grid-cols-2 gap-3 py-16 px-[12%] items-center">

    <div class="space-y-4">
        <h5 class="font-dg text-[48px] leading-[1em] font-medium">Our Commitment to Sustainability</h5>
        <p class="font-dg font-medium text-theme-gray text-[24px] leading-auto">Sustainability is at the heart of everything we do. We believe that responsible investment is key to building a resilient and prosperous future for Nigeria. Our focus is on financing projects and businesses that align with the Sustainable Development Goals (SDGs), promoting economic growth that benefits people and protects the planet.</p>
        <p class="font-dg font-medium text-theme-gray text-[24px] leading-auto">
            Through our investments, we support renewable energy, financing for SMEs, financial inclusion for women, energy efficiency, and more, ensuring that every project we finance contributes to environmental stewardship and long-term prosperity. We work closely with our partners to reduce environmental risks, improve resource efficiency, and foster inclusive development.</p>
    </div>
    <div>
        <img src="/assets/images/man-typing.svg" class="" alt="">
    </div>
</section> -->
</template>

<script lang="ts" setup>

    </script>

<style>

    </style>
