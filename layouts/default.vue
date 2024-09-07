<template>
  <div >
    <Navbar @update:navbarHeight="updateNavbarHeight" />

    <div :style="{ marginTop: navbarHeight + 'px' }" class="my-0">
      <slot />
    </div>
    <Footer />
 </div>
</template>

<script lang="ts" setup>
// State to hold the navbar height
const navbarHeight = ref(0);

// Update function to adjust the margin based on navbar height
const updateNavbarHeight = (height: number) => {
  navbarHeight.value = height;
};
</script>
