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
          <span class="inline-flex items-center ml-2 relative group">
            <button
              type="button"
              aria-describedby="report-tooltip"
              class="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-black hover:bg-white/20"
            >
              <span class="material-symbols-outlined text-[18px]">info</span>
            </button>

            <span
              id="report-tooltip"
              role="tooltip"
              class="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-normal bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-[250px]"
            >
              Denham &amp; Grey is dedicated to the highest standards of openness,
              integrity, accountability, and ethical behaviour by fostering an environment
              where employees and other relevant stakeholders can act appropriately without
              fear of reprisal. To uphold these standards, the Firm encourages employees and
              stakeholders with material concerns about suspected misconduct or any breach
              of law or regulation that may adversely impact the Firm to report them through
              appropriate channels, including confidential means, without fear of
              retribution or unfair treatment.
              <br /><br />
              The Firm operates on principles of fairness, honesty, openness, decency,
              integrity, and respect. This policy aims to encourage employees and
              stakeholders to report and disclose improper or illegal practices. Denham
              &amp; Grey is committed to promptly investigating any reported misconduct and
              protecting those who report such activities, ensuring that all reports are
              treated with strict confidence. Whistleblower reports will be handled with
              sensitivity, discretion, and confidentiality, and the Firm will protect
              whistleblowers from all forms of victimization, retaliation, discrimination,
              and harassment.
            </span>

          </span>
        </h1>
        <p class="text-neutral-text text-sm sm:text-base leading-relaxed max-w-xl mx-auto px-2">
          Your report is encrypted and submitted securely. We are committed to maintaining a safe and ethical environment for everyone.
        </p>
      </div>

      <form @submit.prevent="submitForm">
        <div class="space-y-8">

          <!-- SECTION 1 -->
          <div class="bg-white dark:bg-background-dark/50 rounded-xl border shadow-sm overflow-hidden">
            <div class="p-5 border-b">
              <h2 class="text-neutral-heading text-lg sm:text-xl font-bold">1. Tell Us What Happened</h2>
            </div>

            <div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Nature of Incident -->
              <div class="flex flex-col">
                <label class="text-sm pb-2 font-bold">Nature of Incident</label>
                <select
                  required
                  class="form-select rounded-lg border h-12 px-3 text-sm"
                  v-model="formData.nature"
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
                <label class="text-sm pb-2 font-bold">Date &amp; Time of Incident</label>
                <input
                  type="datetime-local"
                  required
                  class="form-input rounded-lg border h-12 px-3 text-sm"
                  v-model="formData.datetime"
                />
              </div>

              <!-- Location -->
              <div class="flex flex-col md:col-span-2">
                <label class="text-sm pb-2 font-bold">Location of Incident</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Office Building, Floor 3, Warehouse Section B"
                  class="form-input rounded-lg border h-12 px-3 text-sm"
                  v-model="formData.location"
                />
              </div>

              <!-- Individuals -->
              <div class="flex flex-col md:col-span-2">
                <label class="text-sm pb-2 font-bold">Individuals Involved</label>
                <input
                  type="text"
                  placeholder="Names or descriptions (comma separated)"
                  class="form-input rounded-lg border h-12 px-3 text-sm"
                  v-model="formData.involved"
                />
              </div>

              <!-- Description -->
              <div class="flex flex-col md:col-span-2">
                <label class="text-sm pb-2 font-bold">Detailed Description</label>
                <textarea
                  rows="6"
                  required
                  placeholder="Provide a clear and detailed account of the incident..."
                  class="form-textarea rounded-lg border p-3 text-sm"
                  v-model="formData.description"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- SECTION 2: Upload -->
          <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
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
                  @change="formData.files = Array.from($event.target.files)"
                />
              </label>

              <!-- File list -->
              <div v-if="formData.files.length > 0" class="flex flex-col gap-3">
                <div
                  v-for="(file, index) in formData.files"
                  :key="index"
                  class="flex items-center justify-between p-3 border rounded-md"
                >
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-green-600">check_circle</span>
                    <p class="text-sm font-medium">{{ file.name }}</p>
                  </div>
                  <button @click.prevent="removeFile(index)" class="hover:text-red-500">
                    <span class="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION 3: Contact Info -->
          <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
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
                  <div
                    class="p-4 border rounded-lg cursor-pointer"
                    :class="currentTab === 'anonymous' ? 'ring-2 ring-yellow-400 border-yellow-400' : ''"
                  >
                    <p class="font-semibold">Remain Anonymous</p>
                    <p class="text-sm text-neutral-text/70">No personal information will be attached.</p>
                  </div>
                </button>

                <button type="button" class="flex-1" @click="currentTab = 'provide-details'">
                  <div
                    class="p-4 border rounded-lg cursor-pointer"
                    :class="currentTab === 'provide-details' ? 'ring-2 ring-yellow-400 border-yellow-400' : ''"
                  >
                    <p class="font-semibold">Provide Contact Details</p>
                    <p class="text-sm text-neutral-text/70">Kept strictly confidential.</p>
                  </div>
                </button>
              </div>

              <!-- Contact inputs -->
              <div
                v-if="currentTab === 'provide-details'"
                class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t"
              >
                <div class="flex flex-col">
                  <label class="text-sm font-bold pb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    class="form-input rounded-lg border h-12 px-3 text-sm"
                    v-model="formData.name"
                  />
                </div>

                <div class="flex flex-col">
                  <label class="text-sm font-bold pb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    class="form-input rounded-lg border h-12 px-3 text-sm"
                    v-model="formData.email"
                  />
                </div>
              </div>

            </div>
          </div>

          <!-- SECTION 4: Submit -->
          <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div class="p-5 border-b">
              <h2 class="text-neutral-heading text-lg sm:text-xl font-bold">4. Review and Submit</h2>
            </div>

            <div class="p-5 flex flex-col gap-6">
              <label class="flex items-start space-x-3">
                <input type="checkbox" required class="h-5 w-5 rounded" />
                <span class="text-sm">
                  I agree to the
                  <a href="#" class="text-primary font-medium underline">Whistleblowing Policy</a> and confirm all provided information is accurate.
                </span>
              </label>

              <div class="flex justify-end pt-4 border-t">
                <button
                  type="submit"
                  class="flex items-center justify-center gap-2 min-w-[140px] h-12 px-6 bg-primary-theme text-black font-bold rounded-lg hover:bg-primary/80"
                  :disabled="loading"
                >
                  <span v-if="loading" class="loader"></span> <!-- Loader -->
                  <span v-else class="material-symbols-outlined">lock</span>
                  <span v-if="!loading">Submit Securely</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </form>
    </div>
  </main>

  <!-- SUCCESS MODAL -->
  <div
    v-if="showReviewModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg p-6 max-w-lg mx-auto relative">
      <button
        @click="showReviewModal = false"
        class="absolute right-4 top-4 text-black text-[15px] font-bold hover:text-gray-300"
      >
        &times;
      </button>
      <h2 class="text-xl font-bold mb-4">Report Sent Successfully</h2>
      <p class="text-sm text-neutral-text/70">
        {{message}}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $services } = useNuxtApp();

const showReviewModal = ref(false);
const currentTab = ref("anonymous");
const loading = ref(false);
const message = ref("");

const formData = ref({
  nature: "",
  datetime: "",
  location: "",
  involved: "",
  description: "",
  files: [] as File[],
  name: "",
  email: ""
});

// Build payload safely
const buildPayload = () => {
  let firstName = "";
  let lastName = "";
  if (formData.value.name?.trim()) {
    const parts = formData.value.name.trim().split(" ");
    firstName = parts.shift() || "";
    lastName = parts.join(" ");
  }

  // Convert datetime-local string to ISO or empty string
  let incidentDateTime = "";
  if (formData.value.datetime) {
    const dt = new Date(formData.value.datetime);
    incidentDateTime = !isNaN(dt.getTime()) ? dt.toISOString() : "";
  }

  return {
    firstName,
    lastName,
    email: formData.value.email || "",
    phone: "",
    role: "",
    misconductType: formData.value.nature || "",
    incidentDateTime,
    location: formData.value.location || "",
    peopleInvolved: formData.value.involved || "",
    description: formData.value.description || "",
    howAwareDetails: "",
    hasSupportingEvidence: formData.value.files.length > 0,
    evidenceFileUrl: null,
    remainAnonymous: currentTab.value === "anonymous",
    canContact: currentTab.value === "provide-details",
    additionalComments: "",
    evidenceFile: formData.value.files[0] || null
  };
};

// Submit Form
const submitForm = async () => {
  loading.value = true;
  try {
    const payload = buildPayload();

    const fd = new FormData();
    for (const [key, value] of Object.entries(payload)) {
      if (key === "evidenceFile" && value) {
        fd.append("evidenceFile", value);
      } else {
        fd.append(key, value ?? "");
      }
    }

    console.log("FormData contents:");
    for (const pair of fd.entries()) {
      console.log(pair[0], pair[1]);
    }

    const response = await $services.base.report(fd);
    console.log("Report submitted:", response);

    showReviewModal.value = true;
    message.value =
      "Thank you for your submission. We will review your report and take appropriate action.";

  } catch (err) {
    console.error("Submission error:", err);
    showReviewModal.value = true;
    message.value =
      "An error occurred while submitting your report. Please try again later.";
  } finally {
    resetForm();
    currentTab.value = "anonymous";
    loading.value = false;
  }
};

// Reset Form
const resetForm = () => {
  formData.value = {
    nature: "",
    datetime: "",
    location: "",
    involved: "",
    description: "",
    files: [],
    name: "",
    email: ""
  };
};

// Remove file
const removeFile = (index: number) => {
  formData.value.files.splice(index, 1);
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
