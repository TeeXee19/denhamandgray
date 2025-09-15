<template>
<section class="bg-[url('/assets/images/call-centre.png')] bg-center bg-cover h-[200px]  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-ti space-y-0 flex flex-col py-[5%]">
    <h3 class="font-ti text-[34px] md:text-[76px]">Contact Us</h3>
</section>
<section class="py-[4%] md:px-[6%] font-dg ">

  <div class="grid md:grid-cols-2 font-dg md:px-[10%] gap-4">
      <div class=" space-y-[10%] md:w-[90%] p-4">
        <form @submit="submitForm" class="space-y-6">
          <h3 class="font-dg font-medium text-[48px]">
            Send us a message
          </h3>
          <div class="space-y-3">
              <div class="flex flex-col md:flex-row gap-3">
                  <input type="text" id="name" v-model="name" class=" border-2 text-md text-black block w-full p-2.5 " placeholder="Name" required>
                  <input type="tel" id="tel" v-model="lastname" class="border-2 text-md text-black block w-full p-2.5" placeholder="Phone Number" required>
                  
              </div>
              <div>
                  <input type="email" id="email" v-model="lastname" class=" border-2 text-md text-black block w-full p-2.5 " placeholder="Email" required>
              </div>
              <div>
                  <textarea id="message" v-model="message" rows="4" class="block p-2.5 w-full text-[14px] font-dg text-black  border-2 bg-white " placeholder="Tell us what you want"></textarea>
              </div>
          </div>
          <div class="">
              <!-- <div class="relative inline-block"> -->
                  <button class="bg-primary-theme py-3 px-[20%] text-black font-bold text-[16px]">
                      Submit
                  </button>
                  <!-- <div class="absolute inset-0 flex justify-center items-center">
                      <div class="w-full h-px bg-theme-gray transform translate-y-8 translate-x-5"></div>
                      <div class="h-full w-px bg-theme-gray transform translate-x-1 translate-y-5"></div>
                  </div>
              </div> -->
          </div>
      </form>
      </div>
      <div class="bg-[url('/assets/images/contactRight.svg')] md:w-[80%] h-full bg-center bg-cover bg-clip-border bg-no-repeat  p-6 text-white space-y-4 order-first md:order-last">
          <h3 class="font-dg font-medium text-[24px]">Our Contact details</h3>
          <p class="font-dg font-medium text-[18px]">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
          <div class="flex gap-2 h-fit">
            <img src="/assets/images/home.svg" />
            <div class="font-dg font-semibold leading-tight">
              <h3 class="text-[16px]">Address</h3>
              <NuxtLink to="https://maps.app.goo.gl/Zuk77meWv4vrnadh8" class="font-medium text-[14px] hover:text-theme-green">  2nd floor, Silverbird Galleria, Abuja, FCT</NuxtLink>
            </div>
          </div>
          <div class="flex gap-2 h-fit">
            <img src="/assets/images/email.svg" />
            <div class="font-dg font-semibold leading-tight">
              <h3 class="text-[16px]">Email</h3>
              <a href="mailto:info@denhamangrey.com" class="font-medium text-[14px] hover:text-theme-green">info@denhamangrey.com</a>
            </div>
          </div>
          
          <div class="flex gap-2 h-fit">
            <img src="/assets/images/phone.svg" />
            <div class="font-dg font-semibold leading-tight">
              <h3 class="text-[16px]">Phone Number</h3>
              <a href="tel:+2347067939313" class="font-medium text-[14px] hover:text-theme-green">+234 (706) 793 9313</a>
            </div>
          </div>
          <h3 class="font-dg font-bold text-[14px]">Socials</h3>
          <div class="flex justify-start space-x-4 mt-2">
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

</section>
<section class="">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32633153.85138364!2d0.026524122631017194!3d3.2148771789038095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ada00c64b5f%3A0x3a37b6743c0cf37e!2s6%20Jerry%20Gana%20Cl%2C%20Utako%2C%20Abuja%20900104%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sru!4v1726013250289!5m2!1sen!2sru" class="w-full h-[600px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
