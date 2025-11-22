<template>
  <!-- HERO SECTION -->
  <section class="relative bg-[url('/assets/images/hero.png')] bg-center bg-cover h-screen text-white flex flex-col justify-center items-center">
    <!-- Top floating badges -->
    <div class="hidden md:flex justify-between w-full px-8 absolute top-0 mt-8">
      <div class="bg-white/5 w-[200px] flex flex-col items-center p-4 rounded-3xl text-[14px]">
        <img loading="lazy" src="/assets/images/dev.svg" class="w-16 mb-2"/>
        Development
      </div>
      <div class="bg-white/5 w-[200px] flex flex-col items-center p-4 rounded-full text-[14px]">
        DENHAM & GREY
      </div>
    </div>

    <!-- Hero Text -->
    <div class="text-center md:text-left px-4 md:px-20 max-w-6xl z-10">
      <h1 class="text-[40px] md:text-[64px] font-bold md:w-3/4">
        Financing the SDGs, Ensuring Tomorrow
      </h1>
      <div class="mt-8 flex flex-col md:flex-row items-center gap-6 md:gap-4">
        <NuxtLink to="/#contact" class="bg-white text-black rounded-[30px] px-8 py-3 font-bold">
          PARTNER WITH US
        </NuxtLink>
        <img loading="lazy" src="/assets/images/Line.svg" />
        <p class="text-[18px] md:w-1/2">
          Leading sustainable development finance across Africa through innovative green banking solutions
        </p>
      </div>
    </div>
  </section>

  <!-- VALUE PROPOSITIONS -->
  <section class="hidden md:grid grid-cols-3 gap-4 px-6 md:px-20 py-12">
    <div class="bg-[url('/assets/images/people.svg')] bg-center bg-no-repeat p-6 flex flex-col justify-end h-72 rounded-lg shadow-lg">
      <h3 class="text-2xl font-bold text-[#474A4F]">Empowering Communities</h3>
      <p class="text-[#7B7B7B] font-semibold mt-2">Building sustainable communities through strategic investment and development initiatives.</p>
    </div>
    <div class="bg-[url('/assets/images/arrow-growth.svg')] bg-center bg-no-repeat p-6 flex flex-col justify-end h-72 rounded-lg shadow-lg">
      <h3 class="text-2xl font-bold text-[#474A4F]">Driving Economic Growth</h3>
      <p class="text-[#7B7B7B] font-semibold mt-2">Creating value through innovative financial solutions and strategic partnership.</p>
    </div>
    <div class="bg-[url('/assets/images/user-protect.svg')] bg-center bg-no-repeat p-6 flex flex-col justify-end h-72 rounded-lg shadow-lg">
      <h3 class="text-2xl font-bold text-[#474A4F]">Protecting the Environment</h3>
      <p class="text-[#7B7B7B] font-semibold mt-2">Commitment to sustainable practices and environmental responsibility in all our ventures.</p>
    </div>
  </section>

  <!-- ABOUT US -->
  <section class="py-12 md:px-12 font-dg flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
    <div class="space-y-4 md:w-1/2">
      <div class="bg-[#474A4F]/10 inline-block py-2 px-6 rounded-full font-bold">ESTABLISHED IN 2021</div>
      <h2 class="text-3xl md:text-5xl font-bold">Welcome to Denham & Grey</h2>
      <p class="text-[#7B7B7B] leading-relaxed">
        At Denham & Grey, we focus on structured excellence with expertise in structured lending and developmental finance...
        <br/><br/>
        We leverage management and ownership structures, originating lending rounds, implementing structured partnerships, aligning stakeholder needs and technical risks, and providing comprehensive solutions.
      </p>
      <button class="bg-white border border-[#EBEBEB] rounded-lg px-8 py-2 text-black flex gap-2 items-center font-bold">
        LEARN MORE ABOUT US
        <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.83679 17.4948L17.8368 10.8282C17.9842 10.7628 18.1094 10.656 18.1973 10.5208C18.2852 10.3856 18.332 10.2278 18.332 10.0665C18.332 9.90525 18.2852 9.74746 18.1973 9.61226C18.1094 9.47706 17.9842 9.37028 17.8368 9.30485L2.83679 2.63818C2.69406 2.57477 2.53637 2.55274 2.38172 2.57462C2.22708 2.5965 2.08169 2.6614 1.96214 2.76192C1.8426 2.86244 1.75371 2.99453 1.70562 3.14312C1.65752 3.29172 1.65215 3.45085 1.69013 3.60235L3.09763 9.23318H10.8318C11.0528 9.23318 11.2648 9.32098 11.421 9.47726C11.5773 9.63354 11.6651 9.8455 11.6651 10.0665C11.6651 10.2875 11.5773 10.4995 11.421 10.6558C11.2648 10.8121 11.0528 10.8998 10.8318 10.8998H3.09763L1.69013 16.5315C1.65235 16.683 1.65787 16.842 1.70605 16.9904C1.75423 17.1389 1.84314 17.2708 1.96265 17.3712C2.08216 17.4716 2.22746 17.5365 2.38201 17.5583C2.53655 17.5802 2.69413 17.5582 2.83679 17.4948Z" fill="#474A4F"/>
        </svg>
      </button>
    </div>
    <img loading="lazy" src="/assets/images/welcome.svg" class="md:w-1/2 w-full object-contain"/>
  </section>

  <!-- FINANCIAL OFFERINGS -->
  <section class="text-center bg-[#FBFBFC] py-12">
    <h2 class="text-3xl md:text-5xl font-bold mb-4">Our Financial Offerings</h2>
    <p class="text-[#7B7B7B] font-bold max-w-3xl mx-auto mb-8">
      Our financial offerings are specialised into three key areas, aligned with the risk profile and financial needs of our partners
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-20">
      <Card title="Impact Funding" img="/assets/images/pillar1.png" items="Measurable social impact,Environmental sustainability,Community development initiatives"/>
      <Card title="Wholesale Funding" img="/assets/images/pillar2.png" items="Large-scale development projects,Infrastructure financing,Institutional partnerships"/>
      <Card title="Strategic Finance" img="/assets/images/pillar3.png" items="Tailored financial strategies,Project optimization,Risk mitigation planning"/>
    </div>
  </section>

  <!-- CONTACT FORM -->
  <section class="bg-[url('/assets/images/handshake.png')] bg-cover bg-center py-12 px-6 md:px-20 text-white" id="contact">
    <div class="max-w-4xl mx-auto">
      <h3 class="text-3xl md:text-4xl font-bold text-center mb-8">Partner With Us</h3>
      <form @submit.prevent="submitForm" class="space-y-4 bg-white/10 p-6 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input v-model="name" type="text" placeholder="Name" class="p-2 rounded-lg w-full text-black"/>
          <input v-model="phone" type="tel" placeholder="Phone Number" class="p-2 rounded-lg w-full text-black"/>
        </div>
        <input v-model="email" type="email" placeholder="Email" class="p-2 rounded-lg w-full text-black"/>
        <textarea v-model="message" rows="4" placeholder="Tell us what you want" class="p-2 rounded-lg w-full text-black"></textarea>
        <button type="submit" class="bg-primary-theme text-black py-3 px-6 rounded-xl w-full font-bold">
          PARTNER WITH US
        </button>
      </form>
    </div>
  </section>

  <!-- SUCCESS MODAL -->
  <div v-if="showReviewModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg max-w-lg mx-auto relative">
      <button @click="showReviewModal = false" class="absolute right-4 top-4 font-bold text-black hover:text-gray-300">&times;</button>
      <h2 class="text-xl font-bold mb-4">Message Sent Successfully</h2>
      <p class="text-sm text-neutral-500">Thank you for your submission. We will review your message and take appropriate action.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const { $services } = useNuxtApp();

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const showReviewModal = ref(false);
const loading = ref(false);

const submitForm = async () => {
  loading.value = true;
  try {
    const fd = { name: name.value, phone: phone.value, email: email.value, notes: message.value };
    const response = await $services.base.contact(fd);
    console.log('Report submitted:', response);
    showReviewModal.value = true;
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    name.value = '';
    phone.value = '';
    email.value = '';
    message.value = '';
    loading.value = false;
  }
};
</script>

<!-- CARD COMPONENT -->
<script lang="ts" setup>
defineProps<{ title: string, img: string, items: string }>();
</script>

<template #Card>
  <div class="relative shadow-lg rounded-lg overflow-hidden">
    <img :src="img" alt="" class="w-full h-auto"/>
    <div class="p-4 bg-white">
      <h3 class="text-xl font-bold text-[#474A4F] mb-2">{{ title }}</h3>
      <ul class="list-disc pl-6 space-y-2 text-[#7B7B7B] font-bold text-sm">
        <li v-for="item in items.split(',')" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
