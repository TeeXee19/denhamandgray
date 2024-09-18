<template>
    <Navbar @update:navbarHeight="updateNavbarHeight" />
    <div :style="{ marginTop: navbarHeight + 'px' }" class="my-0 w-full">
      <slot class="w-full"/>
    </div>
    <Footer />
</template>

<script lang="ts" setup>
// State to hold the navbar height
const navbarHeight = ref(0);

// Update function to adjust the margin based on navbar height
const updateNavbarHeight = (height: number) => {
  navbarHeight.value = height;
};
</script>
