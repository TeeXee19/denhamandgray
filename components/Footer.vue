<template>
  <footer class="bg-[#474A4F] text-white font-dg w-full py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
        
        <!-- Left Side: Logo + Description + Socials -->
        <div class="flex flex-col max-w-sm space-y-4 text-center lg:text-left">
          <NuxtLink to="/" class="flex justify-center lg:justify-start">
            <img src="/assets/images/logo2.svg" class="h-12" alt="Denham & Grey Logo" />
          </NuxtLink>
          <p class="text-xs text-gray-300 font-gt leading-relaxed">
            Financing the SDGs, Ensuring Tomorrow through sustainable development,
            finance and green banking solutions.
          </p>
          <div class="flex justify-center lg:justify-start space-x-6 mt-2">
            <NuxtLink to="/">
              <img src="/assets/images/youtube.svg" alt="YouTube" class="h-5 w-5 hover:opacity-80 transition" />
            </NuxtLink>
            <NuxtLink to="/">
              <img src="/assets/images/x.svg" alt="Twitter/X" class="h-5 w-5 hover:opacity-80 transition" />
            </NuxtLink>
            <NuxtLink to="/">
              <img src="/assets/images/instagram.svg" alt="Instagram" class="h-5 w-5 hover:opacity-80 transition" />
            </NuxtLink>
            <NuxtLink to="/">
              <img src="/assets/images/facebook.svg" alt="Facebook" class="h-5 w-5 hover:opacity-80 transition" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right Side: Links + Contact Info -->
        <div class="flex flex-col sm:flex-row gap-12 lg:gap-20 text-center sm:text-left">
          <!-- Quick Links -->
          <div>
            <p class="font-gt font-bold text-primary-theme mb-4">Quick Links</p>
            <ul class="space-y-3 text-sm">
              <li><NuxtLink to="/about" class="hover:text-primary-theme transition">About Us</NuxtLink></li>
              <li><NuxtLink to="/impact-and-sustainability" class="hover:text-primary-theme transition">Impact and Sustainability</NuxtLink></li>
              <li><NuxtLink to="/career" class="hover:text-primary-theme transition">Career</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-primary-theme transition">Contact Us</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <p class="font-gt font-bold text-primary-theme mb-4">Contact Info</p>
            <ul class="space-y-3 text-sm">
              <li>
                <NuxtLink to="https://maps.app.goo.gl/Zuk77meWv4vrnadh8" target="_blank" rel="noopener noreferrer" class="hover:text-primary-theme transition">
                  2nd floor, Silverbird Galleria, Abuja, FCT
                </NuxtLink>
              </li>
              <li>
                <a href="tel:+3519393370835" class="hover:text-primary-theme transition">+351 939 337 0835</a>
              </li>
              <li>
                <a href="mailto:info@denhamandgrey.com" class="hover:text-primary-theme transition">info@denhamandgrey.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-600 mt-10 pt-4 text-center text-xs text-gray-400">
        © {{ currentYear }} DENHAM &amp; GREY. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
