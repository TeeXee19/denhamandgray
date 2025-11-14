<template>
<section class="bg-[url('/assets/images/call-centre.png')] bg-center bg-cover h-[200px]  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-ti space-y-0 flex flex-col py-[5%]">
    <h3 class="font-ti text-[34px] md:text-[76px]">Whistleblowing</h3>
</section>
<!-- <section class="gap-8 py-16 md:px-[12%] text-center items-center justify-center flex flex-col">
  <p class="font-ar font-medium text-black md:text-[24px] w-[80%]">"Denham &amp; Grey is dedicated to the highest standards of openness, integrity, accountability, and ethical behaviour by fostering an environment where employees and other relevant stakeholders can act appropriately without fear of reprisal. To uphold these standards, the Firm encourages employees and stakeholders with material concerns about suspected misconduct or any breach of law or regulation that may adversely impact the Firm to report them through appropriate channels, including confidential means, without fear of retribution or unfair treatment.
  </p>
  <p class="font-ar font-medium text-black md:text-[24px] w-[80%]">
    The Firm operates on principles of fairness, honesty, openness, decency, integrity, and respect. This policy aims to encourage employees and stakeholders to report and disclose improper or illegal practices. Denham &amp; Grey is committed to promptly investigating any reported misconduct and protecting those who report such activities, ensuring that all reports are treated with strict confidence.
    Whistleblower reports will be handled with sensitivity, discretion, and confidentiality, and the Firm will protect whistleblowers from all forms of victimization, retaliation, discrimination, and harassment."
    </p>
</section> -->

  <main class="flex flex-1 justify-center py-8 sm:py-12 px-4"  >
        <div class="layout-content-container flex flex-col w-full max-w-3xl flex-1 gap-8" id="report-form">
          <div class="flex flex-col gap-3 text-center">
            <h1 class="text-neutral-heading  text-3xl sm:text-4xl font-black tracking-tighter">Submit a
              Confidential Report</h1>
            <p class="text-neutral-text text-base leading-relaxed max-w-2xl mx-auto">Your report is
              encrypted and submitted securely. Your confidentiality is our priority. We are committed to fostering a
              safe and ethical environment.</p>
          </div>
          <form @submit.prevent="showReviewModal = true">
            <div class="space-y-8">
              <div
                class="bg-white dark:bg-background-dark/50 rounded-xl border border-neutral-border dark:border-neutral-text/20 shadow-sm overflow-hidden">
                <div class="p-6 border-b border-neutral-border dark:border-neutral-text/20">
                  <h2 class="text-neutral-heading dark:text-white text-xl font-bold tracking-tight">1. Tell Us What
                    Happened</h2>
                </div>
                <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col col-span-2 md:col-span-1">
                    <label class="text-sm font-medium text-neutral-heading dark:text-gray-300 pb-2"
                      for="nature-of-incident">Nature of Incident</label>
                    <select
                      class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-heading dark:text-gray-300 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-neutral-text/30 bg-background-light dark:bg-background-dark h-12 placeholder:text-neutral-text px-3 text-sm"
                      id="nature-of-incident" required="" x-model="formData.nature">
                      <option disabled="" value="">Select a category...</option>
                      <option>Fraud</option>
                      <option>Harassment</option>
                      <option>Safety Violation</option>
                      <option>Theft</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="flex flex-col">
                    <label class="text-sm font-medium text-neutral-heading dark:text-gray-300 pb-2"
                      for="incident-date">Date &amp; Time of Incident</label>
                    <input
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-heading dark:text-gray-300 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-neutral-text/30 bg-background-light dark:bg-background-dark h-12 placeholder:text-neutral-text px-3 text-sm"
                      id="incident-date" required="" type="datetime-local" x-model="formData.datetime" />
                  </div>
                  <div class="flex flex-col col-span-2">
                    <label class="text-sm font-medium text-neutral-heading dark:text-gray-300 pb-2"
                      for="incident-location">Location of Incident</label>
                    <input
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-heading dark:text-gray-300 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-neutral-text/30 bg-background-light dark:bg-background-dark h-12 placeholder:text-neutral-text px-3 text-sm"
                      id="incident-location" placeholder="e.g., Office Building, Floor 3, Warehouse Section B"
                      required="" type="text" x-model="formData.location" />
                  </div>
                  <div class="flex flex-col col-span-2">
                    <label class="text-sm font-medium text-neutral-heading dark:text-gray-300 pb-2"
                      for="individuals-involved">Individuals Involved (if known)</label>
                    <input
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-heading dark:text-gray-300 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-neutral-text/30 bg-background-light dark:bg-background-dark h-12 placeholder:text-neutral-text px-3 text-sm"
                      id="individuals-involved" placeholder="List names or descriptions, separated by commas"
                      type="text" x-model="formData.involved" />
                  </div>
                  <div class="flex flex-col col-span-2">
                    <label class="text-sm font-medium text-neutral-heading dark:text-gray-300 pb-2"
                      for="incident-description">Detailed Description</label>
                    <textarea
                      class="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-neutral-heading dark:text-gray-300 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-neutral-text/30 bg-background-light dark:bg-background-dark placeholder:text-neutral-text p-3 text-sm"
                      id="incident-description"
                      placeholder="Please provide a clear and detailed account of the incident. Include what happened, who was involved, and any other relevant details."
                      required="" rows="6" x-model="formData.description"></textarea>
                  </div>
                </div>
              </div>
              <div
                class="bg-white dark:bg-background-dark/50 rounded-xl border border-neutral-border dark:border-neutral-text/20 shadow-sm overflow-hidden">
                <div class="p-6 border-b border-neutral-border dark:border-neutral-text/20">
                  <h2 class="text-neutral-heading dark:text-white text-xl font-bold tracking-tight">2. Upload Supporting
                    Files</h2>
                </div>
                <div class="p-6 flex flex-col gap-4">
                  <label
                    class="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-neutral-border dark:border-neutral-text/30 rounded-lg bg-background-light dark:bg-background-dark/50 text-center cursor-pointer hover:bg-neutral-border/50 dark:hover:bg-neutral-text/10 transition-colors">
                    <span
                      class="material-symbols-outlined text-4xl text-neutral-text dark:text-gray-500">upload_file</span>
                    <p class="mt-2 text-sm text-neutral-text dark:text-gray-400"><span
                        class="font-semibold text-primary">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-neutral-text/70 dark:text-gray-500">PDF, DOCX, JPG, PNG (Max 10MB per file)
                    </p>
                    <input @change="formData.files = Array.from($event.target.files).map(f =&gt; f.name)" class="hidden"
                      multiple="" type="file" />
                  </label>
                  <div class="flex flex-col gap-3" x-show="formData.files.length &gt; 0">
                    <template :key="index" x-for="(file, index) in formData.files">
                      <div
                        class="flex items-center justify-between p-3 bg-background-light dark:bg-background-dark rounded-md border border-neutral-border dark:border-neutral-text/20">
                        <div class="flex items-center gap-3">
                          <span class="material-symbols-outlined text-secondary">check_circle</span>
                          <p class="text-sm font-medium text-neutral-heading dark:text-gray-300" x-text="file"></p>
                        </div>
                        <button @click.prevent="formData.files.splice(index, 1)"
                          class="text-neutral-text hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
                          <span class="material-symbols-outlined text-base">close</span>
                        </button>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div
                class="bg-white dark:bg-background-dark/50 rounded-xl border border-neutral-border dark:border-neutral-text/20 shadow-sm overflow-hidden">
                <div class="p-6 border-b border-neutral-border dark:border-neutral-text/20">
                  <h2 class="text-neutral-heading dark:text-white text-xl font-bold tracking-tight">3. Contact
                    Information (Optional)</h2>
                  <p class="text-sm text-neutral-text dark:text-gray-400 mt-1">Providing contact details can help us
                    follow up if we need more information. Your identity will remain confidential as per our policy.</p>
                </div>
                <div class="p-6 flex flex-col gap-6">
                  <fieldset class="flex flex-col md:flex-row gap-4">
                    <legend class="sr-only">Anonymity Preference</legend>
                    <div class="flex-1">
                      <input checked="" class="peer hidden" id="anonymous" name="contact-preference" type="radio"
                        value="anonymous" x-model="anonymous" />
                      <label
                        class="block p-4 border border-neutral-border dark:border-neutral-text/30 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/50 dark:peer-checked:border-primary"
                        for="anonymous">
                        <p class="font-semibold text-neutral-heading dark:text-gray-200">I wish to remain anonymous</p>
                        <p class="text-sm text-neutral-text dark:text-gray-400">No personal information will be attached
                          to this report.</p>
                      </label>
                    </div>
                    <div class="flex-1">
                      <input class="peer hidden" id="provide-details" name="contact-preference" type="radio"
                        value="provide-details" x-model="anonymous" />
                      <label
                        class="block p-4 border border-neutral-border dark:border-neutral-text/30 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/50 dark:peer-checked:border-primary"
                        for="provide-details">
                        <p class="font-semibold text-neutral-heading dark:text-gray-200">I will provide contact details
                        </p>
                        <p class="text-sm text-neutral-text dark:text-gray-400">This information will be kept
                          confidential.</p>
                      </label>
                    </div>
                  </fieldset>
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-border dark:border-neutral-text/20"
                    x-cloak="" x-show="anonymous === 'provide-details'" x-transition="">
                    <div>
                      <label class="text-sm font-medium text-neutral-heading dark:text-gray-300 pb-2"
                        for="contact-name">Your Name</label>
                      <input :required="anonymous === 'provide-details'"
                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-heading dark:text-gray-300 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-neutral-text/30 bg-background-light dark:bg-background-dark h-12 placeholder:text-neutral-text px-3 text-sm"
                        id="contact-name" placeholder="Enter your full name" type="text" x-model="formData.name" />
                    </div>
                    <div>
                      <label class="text-sm font-medium text-neutral-heading dark:text-gray-300 pb-2"
                        for="contact-email">Email Address</label>
                      <input :required="anonymous === 'provide-details'"
                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-heading dark:text-gray-300 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-neutral-text/30 bg-background-light dark:bg-background-dark h-12 placeholder:text-neutral-text px-3 text-sm"
                        id="contact-email" placeholder="you@example.com" type="email" x-model="formData.email" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white dark:bg-background-dark/50 rounded-xl border border-neutral-border dark:border-neutral-text/20 shadow-sm overflow-hidden">
                <div class="p-6 border-b border-neutral-border dark:border-neutral-text/20">
                  <h2 class="text-neutral-heading dark:text-white text-xl font-bold tracking-tight">4. Review and Submit
                  </h2>
                </div>
                <div class="p-6 flex flex-col gap-6">
                  <div class="flex items-start space-x-3">
                    <input
                      class="form-checkbox h-5 w-5 rounded text-primary bg-background-light dark:bg-background-dark border-neutral-border dark:border-neutral-text/30 focus:ring-primary/50 mt-0.5"
                      id="policy-agreement" required="" type="checkbox" />
                    <label class="text-sm text-neutral-text dark:text-gray-400" for="policy-agreement">
                      I have read and agree to the <a class="font-medium text-primary hover:underline"
                        href="#">Whistleblowing Policy</a>. I confirm that the information provided is true and accurate
                      to the best of my knowledge.
                    </label>
                  </div>
                  <div class="flex justify-end pt-4 border-t border-neutral-border dark:border-neutral-text/20">
                    <button
                      class="flex items-center justify-center gap-2 min-w-[120px] cursor-pointer rounded-lg h-12 px-6 bg-primary-theme text-black text-base font-bold transition-colors hover:bg-primary/90 disabled:bg-neutral-border disabled:cursor-not-allowed"
                      type="submit">
                      <span class="material-symbols-outlined">lock</span>
                      <span>Submit Securely</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
</template>

<script lang="ts" setup>
// import { material-symbols-outlined } from 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
</script>

<style>
   .material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

    [x-cloak] {
      display: none !important;
    }

  </style>
