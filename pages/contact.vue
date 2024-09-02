<template>
<section class="bg-[url('/assets/images/about.svg')] bg-center bg-cover bg-fixed  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-col py-[5%]">
    <h3 class="text-[96px]">CONTACT US</h3>
    <div class="font-bold text-[20px]">
        <NuxtLink class="text-theme-green" to="/">Home &nbsp; >> &nbsp;</NuxtLink>
        About Us
    </div>
</section>
<section class="py-[4%] px-[10%] font-dg ">

  <div class="grid grid-cols-2 font-dg px-[20%] gap-8">
      <div class=" space-y-[15%] w-[80%]">
        <form @submit="" class="space-y-6">
          <h3 class="font-dg font-medium text-[48px]">
            Send us a message
          </h3>
          <h3 class="font-dg text-[18px]">
            Your email address will not be published.
          </h3>
          <div class="space-y-3">
              <div class="flex flex-row gap-3">
                  <input type="text" id="name" v-model="name" class=" border text-gray-300 text-sm block w-full p-2.5 " placeholder="Name" required>
                  <input type="email" id="email" v-model="lastname" class=" border text-gray-300 text-sm block w-full p-2.5 " placeholder="Email" required>
              </div>
              <div>
                  <textarea id="message" v-model="message" rows="4" class="block p-2.5 w-full text-sm text-gray-400  border " placeholder="Tell us what you want"></textarea>
              </div>
          </div>
          <div class="">
              <div class="relative inline-block">
                  <button class="bg-theme-green text-white py-3 px-14 ">
                      Submit
                  </button>
                  <div class="absolute inset-0 flex justify-center items-center">
                      <div class="w-full h-px bg-theme-gray transform translate-y-8 translate-x-5"></div>
                      <div class="h-full w-px bg-theme-gray transform translate-x-1 translate-y-5"></div>
                  </div>
              </div>
          </div>
      </form>
      </div>
      <div class="bg-[url('/assets/images/contactRight.svg')] w-[60%] h-full bg-center bg-cover bg-clip-border bg-no-repeat  p-6 text-white">
          <h3 class="font-dg font-medium text-[24px]">Our Contact details</h3>
          <h3 class="font-dg font-medium text-[14px]">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</h3>
          <h3 class="font-dg font-bold text-[14px]">Socials</h3>
          <div class="flex justify-start space-x-4 mt-2">
            <NuxtLink to="/linkedin">
              <img src="/assets/images/youtube.svg" alt="LinkedIn" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink to="/twitter">
              <img src="/assets/images/x.svg" alt="Twitter" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink to="/instagram">
              <img src="/assets/images/instagram.svg" alt="Instagram" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink to="/facebook">
              <img src="/assets/images/facebook.svg" alt="Facebook" class="h-5 w-5" />
            </NuxtLink>
          </div>
      </div>
  </div>

</section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
