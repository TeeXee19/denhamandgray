<template>
    <NuxtLink :to="href">
        <div class="shadow-lg flex flex-col hover:shadow-xl bg-[#E4E9F1]">
                <img :src="img" alt="offering image"/>
                <div class="mt-2 flex flex-row justify-between py-2 px-4">
                    <div v-for="(tag, index) in tags" :key="index">
                        <span class="bg-grayTheme-100 text-theme-green font-dg text-[20px]  py-1 px-2 mr-2 hover:bg-grayTheme-500 hover:text-white">{{ tag }}</span>
                    </div>
                    <p class="font-dm text-dm-md md:text-dm-sm text-grayTheme-gray-600 flex-end md:text-justify">{{ formattedDate }}</p>
                </div>
                
            </div>
            <h3 class="font-dg text-[32px] py-4 font-bold capitalize w-full">{{heading}}</h3>
                <div class="">
                    <p class="font-dg text-[20px] text-grayTheme-gray-600 md:w-full line-clamp-4" v-html="description"></p><span><NuxtLink :to="href" class="text-theme-green">Read More</NuxtLink></span>
                </div>
    </NuxtLink>
    
</template>

<script lang="ts" setup>
interface Props {
  href: string;
  heading: string;
  description: string;
  img: string;
  tags: string[];
  date: Date | string;
}

const { href, heading, description, img, tags, date } = defineProps<Props>();

const parsedDate = computed(() => {
  if (typeof date === 'string') {
    return new Date(date);
  }
  return date;
});

const formattedDate = computed(() => {
  if (parsedDate.value instanceof Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return parsedDate.value.toLocaleDateString(undefined, options);
  }
  return ''; 
});
</script>
