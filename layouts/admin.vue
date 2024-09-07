<template>
  <admin-navbar />
  <div class="flex static" >
    <div class="w-[20%] fixed">
      <sidebar />
    </div>
    <div class="w-[80%] p-3 left-[20%] relative bg-theme-gray-2 h-[90vh] overflow-scroll">
      <slot />
    </div>
 </div>
</template>

<script lang="ts" setup>
</script>

<style>

</style>