<template>
<section class="bg-[url('/assets/images/career-bg.svg')] bg-center bg-cover h-[500px]  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-col py-[5%]">
    <h3 class="text-[96px]">CAREER</h3>
    <div class="font-bold text-[20px]">
        <NuxtLink class="text-theme-green" to="/">Home &nbsp; >> &nbsp;</NuxtLink>
        Career
    </div>
</section>
<section class="py-[2%] px-[10%] font-dg bg-theme-gray-2 ">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[3%] mb-[3%]">
        <h2 class="font-semibold text-[64px] leading-[50px]">Our Career Opportunity</h2>
        <div class="flex flex-row w-[8%] gap-3">
            <div class="w-[20%] h-[4px] bg-theme-green"></div>
            <div class="w-[80%] h-[4px] bg-theme-green"></div>
        </div>
        <div class="font-dg flex items-center">
            <div class="p-10 bg-white space-y-[2%]  w-1/2 z-[2] mr-[-8%] m-[5%] h-[50%]">
                <h5 class="font-dg text-[24px] leading-[1em] font-semibold">Embracing Diversity and Inclusion</h5>
                <p class="font-medium text-theme-gray">
                    At Denham and Grey, we are committed to fostering an inclusive and diverse work environment. As an equal opportunity employer, we ensure that all employment activities are conducted without regard to age, color, disability, marital status, national origin, citizenship status, race, religion, gender, or any other legally protected category. Our dedication to diversity and inclusiveness is central to creating a dynamic and innovative workplace that drives our success.
                </p>
                <div class="relative inline-block float-right">
                    <button class="bg-theme-green text-white py-3 px-14 ">
                        Apply Now
                    </button>
                    <div class="absolute inset-0 flex justify-center items-center">
                        <div class="w-full h-px bg-theme-gray transform translate-y-7 translate-x-5"></div>
                        <div class="h-full w-px bg-theme-gray transform translate-x-1.5 translate-y-4"></div>
                    </div>
                </div>
            </div>
            <div class="items-right w-1/2 ">
                <img src="/assets/images/career.svg" alt="" class="w-full h-auto">
            </div>
        </div>
    </div>
</section>
<section class="py-[2%] px-[10%] font-dg  ">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[3%] mb-[3%]">
        <h2 class="font-semibold text-[64px] leading-[50px]">Our Core Values</h2>
        <div class="flex flex-row w-[8%] gap-3">
            <div class="w-[20%] h-[4px] bg-theme-green"></div>
            <div class="w-[80%] h-[4px] bg-theme-green"></div>
        </div>
        <div class="grid grid-cols-3 text-white gap-8 px-[12%]">
          <div class="relative group">
              <img src="/assets/images/value1.png" alt="" class="w-full h-auto transition-opacity duration-300">
          </div>
          <div class="relative group">
              <img src="/assets/images/value2.png" alt="" class="w-full h-auto transition-opacity duration-300">

          </div>
           <div class="relative group">
              <img src="/assets/images/value3.png" alt="" class="w-full h-auto transition-opacity duration-300">

          </div>
          <div class="relative group">
              <img src="/assets/images/value4.png" alt="" class="w-full h-auto transition-opacity duration-300">
          </div>
          <div class="relative group">
              <img src="/assets/images/value5.png" alt="" class="w-full h-auto transition-opacity duration-300">
          </div>
          <div class="relative group">
              <img src="/assets/images/value6.png" alt="" class="w-full h-auto transition-opacity duration-300">
          </div>
      </div>
    </div>
</section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
