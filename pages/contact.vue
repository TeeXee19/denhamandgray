 <template>
  <!-- HERO SECTION -->
  <section class="bg-[url('/assets/images/call-centre.png')] bg-center bg-cover text-center text-white flex flex-col justify-center items-center py-[5%] h-[515px] font-ti">
    <h3 class="text-[34px] md:text-[76px] font-ti">Contact Us</h3>
  </section>

  <!-- CONTACT FORM & DETAILS -->
  <section class="py-[4%] md:px-[6%] font-dg">
    <div class="grid md:grid-cols-2 gap-4 md:px-[10%]">

      <!-- FORM -->
      <div class="space-y-[10%] md:w-[90%] p-4">
        <form @submit.prevent="submitForm" class="space-y-6">
          <h3 class="font-medium text-[48px]">Send us a message</h3>

          <div class="space-y-5">
            <div class="flex flex-col md:flex-row gap-5">
              <div class="w-full group">
                <input 
                  type="text" 
                  v-model="name" 
                  class="w-full rounded-xl border border-yellow-400 px-5 py-4 text-[18px] font-medium text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 shadow-sm hover:border-yellow-400" 
                  placeholder="Your Name" 
                  required
                >
              </div>
              <div class="w-full group">
                <input 
                  type="tel" 
                  v-model="phone" 
                  class="w-full rounded-xl border border-yellow-400 px-5 py-4 text-[18px]  text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 shadow-sm hover:border-yellow-400" 
                  placeholder="Phone Number" 
                  required
                >
              </div>
            </div>

            <div class="group">
              <input 
                type="email" 
                v-model="email" 
                class="w-full rounded-xl border border-yellow-400 px-5 py-4 text-[18px] text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 shadow-sm hover:border-yellow-400" 
                placeholder="Email Address" 
                required
              >
            </div>

            <div class="group">
              <textarea 
                v-model="message" 
                rows="5" 
                class="w-full rounded-xl border border-yellow-400 px-5 py-4 text-[18px] text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10 shadow-sm hover:border-yellow-400 resize-none" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>

          <div>
            <button type="submit" class="bg-primary-theme py-3 px-[20%] text-black font-bold text-[16px] flex justify-center items-center gap-2" :disabled="loading">
              <span v-if="loading" class="loader"></span>
              <span v-if="!loading">Submit</span>
            </button>
          </div>
        </form>
      </div>

      <!-- CONTACT DETAILS -->
      <div class="bg-[url('/assets/images/contactRight.svg')] md:w-[80%] h-full bg-center bg-cover p-6 text-white space-y-4 order-first md:order-last">
        <h3 class="text-[24px] font-medium">Our Contact details</h3>
        <p class="text-[18px] font-medium">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>

        <div class="flex gap-2">
          <img src="/assets/images/home.svg" alt="Address" />
          <div>
            <h3 class="text-[16px] font-semibold">Address</h3>
            <NuxtLink to="https://maps.app.goo.gl/bXinnSKpGqMmaVLa8" class="font-medium text-[14px] hover:text-theme-green">
              2nd floor, Silverbird Galleria, Memorial Drive M, Central Business District, Abuja, FCT
            </NuxtLink>
          </div>
        </div>

        <div class="flex gap-2">
          <img src="/assets/images/email.svg" alt="Email" />
          <div>
            <h3 class="text-[16px] font-semibold">Email</h3>
            <a href="mailto:info@denhamangrey.com" class="font-medium text-[14px] hover:text-theme-green">info@denhamangrey.com</a>
          </div>
        </div>

        <div class="flex gap-2">
          <img src="/assets/images/phone.svg" alt="Phone" />
          <div>
            <h3 class="text-[16px] font-semibold">Phone Number</h3>
            <a href="tel:+2347067939313" class="font-medium text-[14px] hover:text-theme-green">+234 (706) 793 9313</a>
          </div>
        </div>

        <h3 class="text-[14px] font-bold">Socials</h3>
        <div class="flex space-x-4 mt-2">
          <NuxtLink to="/"><img src="/assets/images/youtube.svg" alt="YouTube" class="h-5 w-5" /></NuxtLink>
          <NuxtLink to="/"><img src="/assets/images/x.svg" alt="X" class="h-5 w-5" /></NuxtLink>
          <NuxtLink to="/"><img src="/assets/images/instagram.svg" alt="Instagram" class="h-5 w-5" /></NuxtLink>
          <NuxtLink to="/"><img src="/assets/images/facebook.svg" alt="Facebook" class="h-5 w-5" /></NuxtLink>
        </div>
      </div>

    </div>
  </section>

  <!-- GOOGLE MAP -->
  <section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.958390120746!2d7.48316167581189!3d9.067555388382644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bbf4137ac87%3A0xd09286891907849b!2sSilverbird%20Galleria%2C%20Abuja!5e0!3m2!1sen!2sng!4v1760103454333!5m2!1sen!2sng"
      class="w-full h-[600px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </section>

  <!-- SUCCESS MODAL -->
  <div v-if="showReviewModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-lg mx-auto relative">
      <button @click="showReviewModal = false" class="absolute right-4 top-4 text-black font-bold hover:text-gray-300">&times;</button>
      <h2 class="text-xl font-bold mb-4">Message Sent Successfully</h2>
      <p class="text-sm text-neutral-text/70">Thank you for your submission. We will review your message and take appropriate action.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const { $services } = useNuxtApp();

const name = ref('');
const phone = ref('');
const email = ref('');
const message = ref('');
const showReviewModal = ref(false);
const loading = ref(false);

const submitForm = async () => {
  loading.value = true;
  try {
    const fd = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      notes: message.value,
    };
    const response = await $services.base.contact(fd);
    console.log("Report submitted:", response);
    showReviewModal.value = true;
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    // Reset form
    name.value = '';
    phone.value = '';
    email.value = '';
    message.value = '';
    loading.value = false;
  }
};
</script>

<style>
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
