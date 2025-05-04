<template>
    <nav ref="navbar" id="navigation" class="bg-white  fixed top-0 left-0 w-full z-40 font-body shadow-card hover:shadow-cardhover transition-all duration-500">
      <div class="flex items-center justify-between lg:justify-center flex-wrap max-w-full  px-4 md:px-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0 lg:w-[30%]">
          <img src="/assets/images/logo.svg" class="h-[50px] md:h-[50px] w-auto" alt="logo" title="Go Home" />
        </NuxtLink>
  
        <!-- Mobile Menu Button -->
        <div class="block md:hidden lg:w-3/4">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" @click="toggleVisibility">
            <span class="sr-only">Open main menu</span>
  
            <svg v-if="!isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
  
            <svg v-if="isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <!-- Desktop Menu -->
        <div class="hidden md:flex md:items-center md:justify-center space-x-4 text-black font-light">
          <template v-for="(link, index) in menuItems" :key="index">
            <NuxtLink :to="link.path" @click="closeMenu" class="hover:text-primary-theme">
              {{ link.name }}
            </NuxtLink>
            <span v-if="index < menuItems.length - 1" class="text-theme-gray">|</span>
          </template>
        </div>
  
  
        <!-- Mobile Menu -->
        <div :class="{'hidden': !isVisible, 'block': isVisible}" class="flex flex-col justify-between fixed top-0 right-0 bottom-0 w-[80%] bg-black text-white z-50 transition-transform transform" :style="{ transform: isVisible ? 'translateX(0)' : 'translateX(100%)' }">
          <div class="flex flex-col gap-8 p-6">
            <!-- Close Button -->
            <button type="button" class="self-end text-white" @click="toggleVisibility">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            <!-- Menu Links -->
            <NuxtLink v-for="(link, index) in menuItems" :key="index" :to="link.path" @click="closeMenu" class="text-lg hover:text-blue-400 border-b py-3 md:py-[10%]">
              {{ link.name }}
            </NuxtLink>
  
            <!-- Contact Info (Mobile) -->
           
          </div>
           <div class="flex flex-row px-6 py-8 space-x-2 ">
                <img src="/assets/images/logo-solo.svg" />
            </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts" setup>
  // Menu Items
  const menuItems = ref([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Impact and Sustainability', path: '/impact-and-sustainability' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Whistle Blower', path: '/whistleblowing' },
  ]);
  
  const emit = defineEmits(['update:navbarHeight']);
  const isVisible = ref(false);
  const navbar = ref<HTMLElement | null>(null);
  
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  
  onMounted(() => {
    if (navbar.value) {
      emitHeight();
    }
  });
  
  watch(isVisible, () => {
    emitHeight();
  });
  
  const closeMenu = () => {
    isVisible.value = false;
  };
  
  const emitHeight = () => {
    if (navbar.value) {
      const height = navbar.value.offsetHeight;
      emit('update:navbarHeight', height);
    }
  };
  </script>
  