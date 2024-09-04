<template>
    <section class="bg-[url('/assets/images/call-centre.png')] bg-contain bg-fixed  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-col py-[5%]">
        <h3 class="text-[96px]">Impact and Sustainability </h3>
        <div class="font-bold text-[20px]">
            <NuxtLink class="text-theme-green" to="/">Home &nbsp; >> &nbsp;</NuxtLink>
            Impact and Sustainability 
        </div>
    </section>
    <section class="py-[4%] px-[10%] font-dg  ">
        <div class="h-[30%] flex flex-col items-center space-y-4 pt-[3%] mb-[3%]">
            <h2 class="font-semibold text-[64px] leading-[50px]">Our Statistics</h2>
            <div class="flex flex-row w-[8%] gap-3">
                <div class="w-[20%] h-[4px] bg-theme-green"></div>
                <div class="w-[80%] h-[4px] bg-theme-green"></div>
            </div>
            <p class="font-dg text-[32px] text-theme-gray font-medium w-[70%] leading-[40px]">
                A client’s urgent issue was resolved within 24 hours thanks to our rapid response and efficient processes, reinforcing their trust in our swift and effective solutions.
            </p>
        </div>
        <div class="flex flex-row items-center justify-center">
        <mapComponent class="w-[50%]"/>    
        <div class="w-[50%]">
            <div class="flex flex-row gap-4 h-fit items-center">
                <h3 class=" font-bold font-in text-[48px] w-[70%]">Financial Institutions</h3>
                <img src="/assets/images/bank.svg" class="w-[30%]"/>
            </div>
            <div>

            </div>

        </div>
        </div>
    </section>
    </template>
    
    <script lang="ts" setup>
    
    </script>
    
    <style>
    
    </style>
    