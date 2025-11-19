<template>
  <!-- HERO SECTION -->
  <section
    class="bg-[url('/assets/images/call-centre.png')] bg-center bg-cover bg-no-repeat text-center text-white flex flex-col justify-center items-center h-[180px] sm:h-[260px] md:h-[320px] px-4"
  >
    <h3 class="font-ti text-[32px] sm:text-[48px] md:text-[72px] font-bold drop-shadow-lg">
      Whistleblowing
    </h3>
  </section>

  <!-- MAIN FORM WRAPPER -->
  <main class="flex justify-center py-8 sm:py-12 px-4 bg-slate-400/10 font-gt">
    <div class="w-full max-w-3xl flex flex-col gap-8" id="report-form">
      
      <!-- FORM HEADING -->
      <div class="text-center flex flex-col gap-3">
        <h1 class="text-neutral-heading text-2xl sm:text-4xl font-black">
          Submit a Confidential Report
        </h1>
        <p class="text-neutral-text text-sm sm:text-base leading-relaxed max-w-xl mx-auto px-2">
          Your report is encrypted and submitted securely. We are committed to maintaining a safe and ethical environment for everyone.
        </p>
      </div>

      <!-- FORM START -->
      <form @submit.prevent="showReviewModal = true">
        <div class="space-y-8">

          <!-- SECTION 1 -->
          <div class="bg-white dark:bg-background-dark/50 rounded-xl border shadow-sm overflow-hidden">
            <div class="p-5 border-b">
              <h2 class="text-neutral-heading text-lg sm:text-xl font-bold">1. Tell Us What Happened</h2>
            </div>

            <div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Nature of Incident -->
              <div class="flex flex-col">
                <label class="text-sm  pb-2 font-bold" for="nature-of-incident">Nature of Incident</label>
                <select
                  id="nature-of-incident"
                  required
                  class="form-select rounded-lg border h-12 px-3 text-sm"
                  x-model="formData.nature"
                >
                  <option disabled value="">Select a category...</option>
                  <option>Fraud</option>
                  <option>Harassment</option>
                  <option>Safety Violation</option>
                  <option>Theft</option>
                  <option>Other</option>
                </select>
              </div>

              <!-- Date & Time -->
              <div class="flex flex-col">
                <label class="text-sm  pb-2 font-bold" for="incident-date">Date & Time of Incident</label>
                <input
                  id="incident-date"
                  type="datetime-local"
                  required
                  class="form-input rounded-lg border h-12 px-3 text-sm"
                  x-model="formData.datetime"
                />
              </div>

              <!-- Location -->
              <div class="flex flex-col md:col-span-2">
                <label class="text-sm  pb-2 font-bold" for="incident-location">Location of Incident</label>
                <input
                  id="incident-location"
                  required
                  type="text"
                  placeholder="e.g., Office Building, Floor 3, Warehouse Section B"
                  class="form-input rounded-lg border h-12 px-3 text-sm"
                  x-model="formData.location"
                />
              </div>

              <!-- Individuals -->
              <div class="flex flex-col md:col-span-2">
                <label class="text-sm  pb-2 font-bold" for="individuals-involved">Individuals Involved</label>
                <input
                  id="individuals-involved"
                  type="text"
                  placeholder="Names or descriptions (comma separated)"
                  class="form-input rounded-lg border h-12 px-3 text-sm"
                  x-model="formData.involved"
                />
              </div>

              <!-- Description -->
              <div class="flex flex-col md:col-span-2">
                <label class="text-sm  pb-2 font-bold" for="incident-description">Detailed Description</label>
                <textarea
                  id="incident-description"
                  required
                  rows="6"
                  placeholder="Provide a clear and detailed account of the incident..."
                  class="form-textarea rounded-lg border p-3 text-sm"
                  x-model="formData.description"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- SECTION 2: Upload -->
          <div class="bg-white dark:bg-background-dark/50 rounded-xl border shadow-sm overflow-hidden">
            <div class="p-5 border-b">
              <h2 class="text-neutral-heading text-lg sm:text-xl font-bold">2. Upload Supporting Files</h2>
            </div>

            <div class="p-5 flex flex-col gap-4">
              <label
                class="flex flex-col items-center justify-center w-full p-6 sm:p-8 border-2 border-dashed rounded-lg cursor-pointer hover:bg-neutral-border/30 transition"
              >
                <span class="material-symbols-outlined text-4xl">upload_file</span>
                <p class="mt-2 text-sm">
                  <span class="font-semibold text-primary">Click to upload</span> or drag & drop
                </p>
                <p class="text-xs text-neutral-text/60">PDF, DOCX, JPG, PNG — Max 10MB per file</p>
                <input
                  type="file"
                  multiple
                  class="hidden"
                  @change="formData.files = Array.from($event.target.files).map(f => f.name)"
                />
              </label>

              <!-- File list -->
              <div v-if="formData.files.length > 0" class="flex flex-col gap-3">
                <template v-for="(file, index) in formData.files" :key="index">
                  <div class="flex items-center justify-between p-3 border rounded-md">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-green-600">check_circle</span>
                      <p class="text-sm font-medium" >{{ file }}</p>
                    </div>
                    <button @click.prevent="formData.files.splice(index, 1)" class="hover:text-red-500">
                      <span class="material-symbols-outlined text-base">close</span>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- SECTION 3: Contact Info -->
          <div class="bg-white dark:bg-background-dark/50 rounded-xl border shadow-sm overflow-hidden">
            <div class="p-5 border-b">
              <h2 class="text-neutral-heading text-lg sm:text-xl font-bold">3. Contact Information (Optional)</h2>
              <p class="text-sm text-neutral-text/70 mt-1">
                If provided, your details will remain confidential.
              </p>
            </div>

            <div class="p-5 flex flex-col gap-6">
              
              <!-- Radio Options -->
              <div class="flex flex-col sm:flex-row gap-4">
              
                <button type="button" class="flex-1" @click="currentTab = 'anonymous'">
                  <label
                    for="anonymous"
                    class="block p-4 border rounded-lg cursor-pointer peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/40"
                  >
                    <p class="font-semibold">Remain Anonymous</p>
                    <p class="text-sm text-neutral-text/70">No personal information will be attached.</p>
                  </label>
                </button>

                <button type="button" class="flex-1" @click="currentTab = 'provide-details'">

                  <label
                    for="provide-details"
                    class="block p-4 border rounded-lg cursor-pointer peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/40"
                  >
                    <p class="font-semibold">Provide Contact Details</p>
                    <p class="text-sm text-neutral-text/70">Kept strictly confidential.</p>
                  </label>
                </button>
              </div>

              <!-- Contact inputs -->
              <div
                class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t font-gt"
                v-if="currentTab === 'provide-details'"
              >
                <div class="flex flex-col">
                  <label for="contact-name" class="text-sm font-bold pb-2">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    :required="anonymous === 'provide-details'"
                    placeholder="Enter full name"
                    class="form-input rounded-lg border h-12 px-3 text-sm"
                    x-model="formData.name"
                  />
                </div>

                <div class="flex flex-col">
                  <label for="contact-email" class="text-sm font-bold pb-2">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    :required="anonymous === 'provide-details'"
                    placeholder="you@example.com"
                    class="form-input rounded-lg border h-12 px-3 text-sm"
                    x-model="formData.email"
                  />
                </div>
              </div>
            </div>

            
          </div>

          <!-- SECTION 4: Submit -->
          <div class="bg-white dark:bg-background-dark/50 rounded-xl border shadow-sm overflow-hidden">
            <div class="p-5 border-b">
              <h2 class="text-neutral-heading text-lg sm:text-xl font-bold">4. Review and Submit</h2>
            </div>

            <div class="p-5 flex flex-col gap-6">
              <label class="flex items-start space-x-3">
                <input type="checkbox" id="policy-agreement" required class="h-5 w-5 rounded" />
                <span class="text-sm">
                  I agree to the
                  <a href="#" class="text-primary font-medium underline">Whistleblowing Policy</a> and confirm all provided information is accurate.
                </span>
              </label>

              <div class="flex justify-end pt-4 border-t">
                <button
                  type="submit"
                  class="flex items-center justify-center gap-2 min-w-[140px] h-12 px-6 bg-primary-theme text-black font-bold rounded-lg hover:bg-primary/80"
                >
                  <span class="material-symbols-outlined">lock</span>
                  Submit Securely
                </button>
              </div>

            </div>
          </div>

        </div>
      </form>
    </div>
  </main>
  <div
    v-if="showReviewModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    
    <div class="bg-white rounded-lg p-6 max-w-lg mx-auto">
    <div class=" right-4">
      <button
        @click="showReviewModal = false"
        class="text-black text-[15px] font-bold hover:text-gray-300"
      >
        &times;
      </button>
    </div>
      <h2 class="text-xl font-bold mb-4">Report Sent Successfully</h2>
      <p class="text-sm text-neutral-text/70">Thank you for your submission. We will review your report and take appropriate action.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const showReviewModal = ref(false);
const currentTab = ref('anonymous');
const formData = ref({
  nature: '',
  datetime: '',
  location: '',
  involved: '',
  description: '',
  files: [] as string[],
  name: '',
  email: ''
});


const submitForm = () => {
  // Handle form submission logic here
  showReviewModal.value = true;
  console.log('Form Data:', formData.value);
  // Reset form data after submission
  formData.value = {
    nature: '',
    datetime: '',
    location: '',
    involved: '',
    description: '',
    files: [] as string[],
    name: '',
    email: ''
  };

  currentTab.value = 'anonymous';
  showModal.value = false;
};


</script>

<style>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
[x-cloak] {
  display: none !important;
}
</style>
