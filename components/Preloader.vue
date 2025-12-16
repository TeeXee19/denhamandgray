<template>
  <div v-if="loading" class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-700" :class="{ 'opacity-0': fadeOut }">
    <div class="loader-container">
      <img src="/assets/images/logo-yellow.png" alt="Logo" class="w-24 h-24 animate-pulse">
    </div>
    <h2 class="mt-4 text-xl font-bold text-gray-800 animate-pulse">Denham & Gray</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  minDuration: {
    type: Number,
    default: 1500 // Minimum time to show loader in ms
  }
});

const loading = ref(true);
const fadeOut = ref(false);

onMounted(() => {
  const start = Date.now();
  
  const finishLoading = () => {
    const now = Date.now();
    const elapsed = now - start;
    const remaining = Math.max(0, props.minDuration - elapsed);

    setTimeout(() => {
      fadeOut.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 700); // Wait for transition to finish
    }, remaining);
  };

  if (document.readyState === 'complete') {
    finishLoading();
  } else {
    window.addEventListener('load', finishLoading);
    // Fallback: max 5 seconds
    setTimeout(finishLoading, 5000);
  }
});
</script>

<style scoped>
.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FACC15; /* yellow-400 */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
