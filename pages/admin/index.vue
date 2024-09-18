<template>
<div class="md:w-[30%] h-[100%] lg:p-[30px] m-auto my-[2%] border-2 shadow-lg rounded-lg">
    <form action="" @submit="submitForm">
        <div class="grid grid-cols-1 gap-2 md:gap-5 mt-5 w-full justify-center items-center">
            <img src="/assets/images/logo.svg"/>
            <div>
                <label for="email" class="block my-[2px] mx-[5px] text-sm font-bold text-theme-primary">Email</label>
                <div class="relative mb-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path d="M12.75 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375Z" stroke="#051923" stroke-opacity="0.75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75" stroke="#051923" stroke-opacity="0.75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <input type="email" id="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="Enter Email" v-model="email" required />
                </div>
            </div>
            <div>
                <label for="password" class="block my-[2px] mx-[5px] text-sm font-bold text-theme-primary" @input="validatePassword">Password</label>
                <div id="message">

                </div>
                <div class="relative mb-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.75 1.5 13.5 3.5175 13.5 6V7.5" stroke="#051923" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#051923" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#051923" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <input :type="passwordFieldType" id="password" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="********" v-model="password" required />
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer" @click="togglePasswordVisibility">
                        <svg v-if="passwordFieldType === 'password'" class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path d="M0.75 9C0.75 9 3.75 3 9 3C14.25 3 17.25 9 17.25 9C17.25 9 14.25 15 9 15C3.75 15 0.75 9 0.75 9Z" stroke="#051923" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="#051923" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <svg v-else class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <g clip-path="url(#clip0_120_2887)">
                                <path d="M13.455 13.455C12.1729 14.4323 10.6118 14.9737 9 15C3.75 15 0.75 9.00002 0.75 9.00002C1.68292 7.26144 2.97685 5.74247 4.545 4.54502M7.425 3.18002C7.94125 3.05918 8.4698 2.99877 9 3.00002C14.25 3.00002 17.25 9.00002 17.25 9.00002C16.7947 9.85172 16.2518 10.6536 15.63 11.3925M10.59 10.59C10.384 10.8111 10.1356 10.9884 9.85961 11.1114C9.58362 11.2343 9.28568 11.3005 8.98357 11.3058C8.68146 11.3111 8.38137 11.2555 8.10121 11.1424C7.82104 11.0292 7.56654 10.8608 7.35288 10.6471C7.13923 10.4335 6.97079 10.179 6.85763 9.89881C6.74447 9.61865 6.68889 9.31856 6.69423 9.01645C6.69956 8.71434 6.76568 8.4164 6.88866 8.1404C7.01163 7.86441 7.18894 7.61601 7.41 7.41002" stroke="#051923" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M0.75 0.75L17.25 17.25" stroke="#051923" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_120_2887">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center text-center mt-3">
                <button @click="validatePassword" type="submit" loading class="bg-theme-green font-in w-full h-[55px] md:p-2.5 text-sm md:text-lg font-bold leading-normal rounded-[8px] flex items-center justify-center text-white space-x-1">
                    <template v-if="loading">
                        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Loading...</span>
                    </template>
                    <template v-else>
                        <svg class="w-4 h-4" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1748 5.66999C7.4073 2.96999 8.7948 1.86749 11.8323 1.86749H11.9298C15.2823 1.86749 16.6248 3.20999 16.6248 6.56249V11.4525C16.6248 14.805 15.2823 16.1475 11.9298 16.1475H11.8323C8.8173 16.1475 7.4298 15.06 7.1823 12.405" stroke="#F8F8F8" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 9H11.66" stroke="#F8F8F8" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.9873 6.48749L12.4998 8.99999L9.9873 11.5125" stroke="#F8F8F8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3 class="px-1">Sign In</h3>
                    </template>
                </button>
            </div>
        </div>
    </form>
</div>
</template>

  
<script lang="ts" setup>
import {
    StatusCode
} from "~/helpers/statusCodes";

definePageMeta({
  layout: "custom",
});

let toast = null;

if (process.client) {
    import("vue-toastification").then((pkg) => {
        const useToast = pkg.useToast;
        toast = useToast();
    });
}
const {
    $services
} = useNuxtApp();

const router = useRouter();
const loading = ref(false);
const email = ref("");
const password = ref("");
const passwordFieldType = ref("password");
const isLowercase = ref(false)
const isUppercase = ref(false)
const isNumber = ref(false)
const isLength = ref(false)

function togglePasswordVisibility() {
    passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
}

const validatePassword = () => {
    isLowercase.value = /[a-z]/.test(password);
    isUppercase.value = /[A-Z]/.test(password);
    isNumber.value = /\d/.test(password);
    isLength.value = password.length >= 8;
};

validatePassword();

const submitForm = async (event: Event) => {
    event.preventDefault();
    loading.value = true;

    const loginData = {
        email: email.value,
        password: password.value,

    };

    try {
        const result = await $services.login.login(loginData);
        if (result.status === StatusCode.SUCCESS) {
            localStorage.setItem("creditials", JSON.stringify(result.data.access_token));
            toast.success("SUCCESS");
            router.push("admin/dashboard")
        } else

            toast.error("Invalid email or password");

    } catch (error) {
        const err = error;
        toast.error("Invalid email or password");
    } finally {
        loading.value = false;
    }
};
</script>
