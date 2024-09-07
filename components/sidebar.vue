<template>

      <div class="border-r-t-15 h-screen flex flex-col gap-6 w-full bg-theme-dark-blue text-white p-4">
        <div class="flex flex-col gap-2 w-full">
          <div class="overview">
            <div class="flex flex-col gap-[10px] sm:gap-[10px] items-center">
              <div
                v-for="(option, index) in options"
                :key="option.to"
                class="w-full "
              >
                <NuxtLink
                  :to="option.to"
                  :class="{
                    'flex flex-row pl-4 p-1 md:p-2 font-bold text-ox text-theme-blue gap-3 md:gap-4': true,
                    'rounded-t-[15px]': isActive(index) && index === 0,
                    'border-theme-as rounded-r-full': isActive(index),
                  }"
                  exact-active-class="text-white bg-theme-blue"
                >
                  <img
                    :src="isActive(index) ? option.src2 : option.src"
                    :class="{
                      'w-10 h-10': isMediumScreen,
                      'w-6 h-6': !isMediumScreen,
                    }"
                    alt=""
                  />
                  <span
                    v-if="!isMediumScreen"
                    class="text-[12px] md:text-[14px] lg:text-[16px] sm:inline"
                    >{{ option.title }}</span
                  >
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="mt-[15%]">
            <div><!-- Settings and Log Out links can go here if needed --></div>
          </div>
        </div>
      </div>
  </template>
  
  <script lang="ts" setup>
  import { useRoute } from "vue-router";
  import { defineProps } from "vue";
  
  const route = useRoute();
  
  const props = defineProps({
    step: Boolean,
    isMediumScreen: {
      type: Boolean,
      default: false,
    },
  });
  
  const options = [
    {
      to: "/",
      src: "/assets/images/overview.svg",
      src2: "/assets/images/overview-white.svg",
      title: "Overview",
    },
    {
      to: "/stats",
      src: "/assets/images/patient.svg",
      src2: "/assets/images/patient-white.svg",
      title: "Stats",
    },
    {
      to: "/blog",
      src: "/assets/images/patient.svg",
      src2: "/assets/images/patient-white.svg",
      title: "Blog",
    },
  ];
  
  const isActive = (index: number): boolean => {
    return options[index] && route.path === options[index].to;
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  