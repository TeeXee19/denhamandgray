<template>
    <footer class="text-white font-dg w-full">
      <div class="mx-auto w-full max-w-[1080px]  px-2 lg:p-6 flex flex-col lg:flex-row lg:justify-between">
        <!-- Left Side: Logo -->
        <div class="flex flex-col text-xs text-gray-400 mt-2 space-y-4">
          <NuxtLink to="/" class="flex items-center">
            <img src="/assets/images/logo.svg" class="h-12" alt="Denham & Grey Logo" />
          </NuxtLink>
          <!-- <span>Copyright © {{ currentYear }} DENHAM & GREY. All rights reserved.</span> -->
        </div>
  
        <!-- Right Side: Address, Contact, Social Icons -->
        <div class="text-left font-ar font-bold text-black">
          <p class="space-y-6">
            <NuxtLink to="https://maps.app.goo.gl/Zuk77meWv4vrnadh8">No 6, Jerry Gana Close, Utako Abuja, Nigeria.</NuxtLink>
            <br />
            <a href="tel:+2347067939313">+234 (706) 793 9313</a>
            <br />
            <a href="mailto:info@denhamandgrey.com">info@denhamandgrey.com
            </a>
          </p>
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
  