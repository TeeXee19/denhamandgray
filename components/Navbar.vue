<template>
<nav ref="navbar" id="navigation" class="bg-theme-dark-blue py-4 fixed top-0 left-0 w-full z-40 font-body shadow-card hover:shadow-cardhover transition-all duration-500">
    <div class="flex items-center justify-between flex-wrap max-w-full mx-auto px-4 md:px-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0">
            <img src="/assets/images/yellow-logo.svg" class="h-[50px] md:h-[50px] w-auto" alt="logo" title="Go Home" />
        </NuxtLink>

        <!-- Dynamic Menu Items -->
        <div class="hidden md:flex md:items-center space-x-4 text-white font-light">
            <template v-for="(link, index) in menuItems" :key="index">
                <NuxtLink :to="link.path" @click="closeMenu" class="hover:text-blue-400">
                    {{ link.name }}
                </NuxtLink>
                <span v-if="index < menuItems.length - 1">|</span>
            </template>
        </div>

        <!-- Contact Info -->
        <div class="hidden md:flex md:items-center text-white">
            <img src="/assets/images/phone.svg" />
            <span>+234 803 227 0835</span>
        </div>

        <!-- Mobile Menu Button -->
        <div class="block md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" @click="toggleVisibility">
                <span class="sr-only">Open main menu</span>

                <svg v-if="!isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg v-if="isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div :class="{
            'hidden': !isVisible,
            'block': isVisible,
          }" class="md:hidden w-full bg-dark-navy text-white mt-4">
            <div class="flex flex-col space-y-4 text-center">
                <NuxtLink v-for="(link, index) in menuItems" :key="index" :to="link.path" @click="closeMenu" class="hover:text-blue-400">
                    {{ link.name }}
                </NuxtLink>
            </div>
            <div class="text-center mt-4">
                <img src="/assets/images/phone.svg" />
                <span>+234 803 227 0835</span>
            </div>
        </div>
    </div>
</nav>
</template>

  
<script lang="ts" setup>
// Menu Items
const menuItems = ref([
    {
        name: 'Home',
        path: '/'
    },{
        name: 'About Us',
        path: '/about'
    },{
        name: 'Impact and Sustainability',
        path: '/impact-and-sustainability'
    },
    
    {
        name: 'Career',
        path: '/career'
    },
    // {
    //     name: 'FAQ',
    //     path: '/'
    // },
    {
        name: 'Contact Us',
        path: '/contact'
    },
]);

const emit = defineEmits(['update:navbarHeight']);
const isVisible = ref(false);
const navbar = ref < HTMLElement | null > (null);

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
