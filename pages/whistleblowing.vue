<template>
<section class="bg-[url('/assets/images/call-centre.png')] bg-center bg-cover h-[200px]  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-ti space-y-0 flex flex-col py-[5%]">
    <h3 class="font-ti text-[34px] md:text-[76px]">Whistleblowing</h3>
</section>
<section class="gap-8 py-16 md:px-[12%] text-center items-center justify-center flex flex-col">
  <p class="font-ar font-medium text-black md:text-[24px] w-[80%]">"Denham &amp; Grey is dedicated to the highest standards of openness, integrity, accountability, and ethical behaviour by fostering an environment where employees and other relevant stakeholders can act appropriately without fear of reprisal. To uphold these standards, the Firm encourages employees and stakeholders with material concerns about suspected misconduct or any breach of law or regulation that may adversely impact the Firm to report them through appropriate channels, including confidential means, without fear of retribution or unfair treatment.
  </p>
  <p class="font-ar font-medium text-black md:text-[24px] w-[80%]">
    The Firm operates on principles of fairness, honesty, openness, decency, integrity, and respect. This policy aims to encourage employees and stakeholders to report and disclose improper or illegal practices. Denham &amp; Grey is committed to promptly investigating any reported misconduct and protecting those who report such activities, ensuring that all reports are treated with strict confidence.
    Whistleblower reports will be handled with sensitivity, discretion, and confidentiality, and the Firm will protect whistleblowers from all forms of victimization, retaliation, discrimination, and harassment."
    </p>
</section>
<section class="py-[4%] md:px-[6%] font-dg ">

  <div class="font-dg md:px-[10%] gap-4">
      <div class=" space-y-[10%] md:w-[90%] p-4">
        <form @submit="submitForm" class="space-y-6">
          <h3 class="font-dg font-medium text-[24px]">
            <span>The whistleblowing form on the website should have fields for the following:</span>
          </h3>
          <div>
            <h2 class="text-lg font-semibold mb-2">Your Information (Optional)</h2>
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1">
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" v-model="first_name" class="border-2 text-md text-black block w-full p-2.5" placeholder="First Name">
              </div>
              <div class="flex-1">
                <label for="last_name">Last Name</label>
                <input type="text" id="last_name" v-model="last_name" class="border-2 text-md text-black block w-full p-2.5" placeholder="Last Name">
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" class="border-2 text-md text-black block w-full p-2.5" placeholder="Email">
              </div>
              <div class="flex-1">
                <label for="tel">Phone Number</label>
                <input type="tel" id="tel" v-model="phone_number" class="border-2 text-md text-black block w-full p-2.5" placeholder="Phone Number">
              </div>
            </div>
            <div>
              <label for="role">Your Role (Employee, Vendor, etc.)</label>
              <input type="text" id="role" v-model="role" class="border-2 text-md text-black block w-full p-2.5" placeholder="Your Role">
            </div>
          </div>
        
          <!-- Incident Details -->
          <div>
            <h2 class="text-lg font-semibold mb-2">Incident Details</h2>
            <div>
              <label for="misconduct_type">Type of Misconduct</label>
              <input type="text" id="misconduct_type" v-model="misconduct_type" class="border-2 text-md text-black block w-full p-2.5" placeholder="e.g., Fraud, Harassment, Corruption">
            </div>
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1">
                <label for="incident_date">Date & Time of Incident</label>
                <input type="datetime-local" id="incident_date" v-model="incident_date" class="border-2 text-md text-black block w-full p-2.5">
              </div>
              <div class="flex-1">
                <label for="location">Location / Department</label>
                <input type="text" id="location" v-model="location" class="border-2 text-md text-black block w-full p-2.5" placeholder="e.g., HR, Finance Dept">
              </div>
            </div>
            <div>
              <label for="people_involved">People Involved (If Known)</label>
              <input type="text" id="people_involved" v-model="people_involved" class="border-2 text-md text-black block w-full p-2.5" placeholder="Names or descriptions">
            </div>
            <div>
              <label for="description">Description</label>
              <textarea id="description" v-model="description" rows="4" class="block p-2.5 w-full text-[14px] font-dg text-black border-2 bg-white" placeholder="What happened?"></textarea>
            </div>
            <div>
              <label for="awareness">How did you become aware of it?</label>
              <textarea id="awareness" v-model="awareness" rows="3" class="block p-2.5 w-full text-[14px] font-dg text-black border-2 bg-white" placeholder="e.g., witnessed it, someone told you..."></textarea>
            </div>
            <div>
              <label>Do you have any supporting evidence?</label>
              <div class="flex items-center gap-4 mt-2">
                <label><input type="radio" v-model="has_evidence" value="Yes"> Yes</label>
                <label><input type="radio" v-model="has_evidence" value="No"> No</label>
              </div>
              <div v-if="has_evidence === 'Yes'" class="mt-2">
                <input type="file" @change="handleFileUpload">
              </div>
            </div>
          </div>
        
          <!-- Confidentiality & Follow-up -->
          <div>
            <h2 class="text-lg font-semibold mb-2">Confidentiality & Follow-up</h2>
            <div>
              <label>Do you wish to remain anonymous?</label>
              <div class="flex items-center gap-4 mt-2">
                <label><input type="radio" v-model="anonymous" value="Yes"> Yes</label>
                <label><input type="radio" v-model="anonymous" value="No"> No</label>
              </div>
            </div>
            <div class="mt-4">
              <label>Can we contact you for more details?</label>
              <div class="flex items-center gap-4 mt-2">
                <label><input type="radio" v-model="can_contact" value="Yes"> Yes</label>
                <label><input type="radio" v-model="can_contact" value="No"> No</label>
              </div>
            </div>
            <div class="mt-4">
              <label for="additional_comments">Any additional comments?</label>
              <textarea id="additional_comments" v-model="additional_comments" rows="3" class="block p-2.5 w-full text-[14px] font-dg text-black border-2 bg-white" placeholder="Anything else you'd like us to know?"></textarea>
            </div>
          </div>
          <div class="">
              <!-- <div class="relative inline-block"> -->
                  <button class="bg-primary-theme py-3 px-[20%] text-black font-bold text-[16px]">
                      Submit
                  </button>
                  <!-- <div class="absolute inset-0 flex justify-center items-center">
                      <div class="w-full h-px bg-theme-gray transform translate-y-8 translate-x-5"></div>
                      <div class="h-full w-px bg-theme-gray transform translate-x-1 translate-y-5"></div>
                  </div>
              </div> -->
          </div>
      </form>
      </div>
 
  </div>

</section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
