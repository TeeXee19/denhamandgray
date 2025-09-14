<template>
    <footer class="text-white bg-[#474A4F] font-dg w-full h-[300px] py-3">
      <div class="h-full flex flex-col justify-center items-center space-y-6 lg:space-y-0">
        <div class="mx-auto w-full max-w-[1080px]  px-2 lg:p-6 flex flex-col lg:flex-row lg:justify-between items-center h-[inherit] lg:space-y-0 space-y-6">
          <!-- Left Side: Logo -->
          <div class="flex flex-col text-xs text-gray-400 mt-2 space-y-4">
            <NuxtLink to="/" class="flex items-center">
              <img src="/assets/images/logo.svg" class="h-12" alt="Denham & Grey Logo" />
            </NuxtLink>
            <span>Copyright © {{ currentYear }} DENHAM & GREY. All rights reserved.</span>
            <div class="flex justify-start space-x-6 mt-4">
              <NuxtLink to="/">
                <img src="/assets/images/youtube.svg" alt="LinkedIn" class="h-5 w-5" />
              </NuxtLink>
              <NuxtLink to="/">
                <img src="/assets/images/x.svg" alt="Twitter" class="h-5 w-5" />
              </NuxtLink>
              <NuxtLink to="/">
                <img src="/assets/images/instagram.svg" alt="Instagram" class="h-5 w-5" />
              </NuxtLink>
              <NuxtLink to="/">
                <img src="/assets/images/facebook.svg" alt="Facebook" class="h-5 w-5" />
              </NuxtLink>
            </div>
          </div>
    
          <div class="flex flex-col lg:flex-row lg:space-x-20 space-y-6 lg:space-y-0">
            <!-- Right Side: Address, Contact, Social Icons -->
          <div class="text-left font-ar font-bold text-white">
            <p class="space-y-6">
              <NuxtLink to="https://maps.app.goo.gl/Zuk77meWv4vrnadh8">2nd floor, Silverbird Galleria, Abuja, FCT</NuxtLink>
              <br />
              <a href="tel:+3519393370835">+351 939 337 0835</a>
              <br />
              <a href="mailto:info@denhamandgrey.com">info@denhamandgrey.com
              </a>
            </p>
          </div>
           <div class="text-left font-ar font-bold text-white space-y-4">
            <p class="font-gt text-primary-theme">Contact Info</p>
            <p class="space-y-6 space-y-4">
              <NuxtLink to="https://maps.app.goo.gl/Zuk77meWv4vrnadh8">2nd floor, Silverbird Galleria, Abuja, FCT</NuxtLink>
              <br />
              <a href="tel:+3519393370835">+351 939 337 0835</a>
              <br />
              <a href="mailto:info@denhamandgrey.com">info@denhamandgrey.com
              </a>
            </p>
          </div>
          </div>
        </div>
        <span class="border-t-2 w-[60%] text-center py-3">Copyright © {{ currentYear }} DENHAM &amp; GREY. All rights reserved.</span>
      </div>

    </footer>
  </template>
  
  <script lang="ts" setup>
  const currentYear = new Date().getFullYear();
  </script>
  
  <style scoped>

  .text-white {
    color: #fff;
  }
  .text-gray-400 {
    color: #ccc;
  }
  </style>
  