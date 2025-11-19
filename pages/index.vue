<template>
<section class="bg-[url('/assets/images/hero.png')] md:bg-[url('/assets/images/hero.png')] bg-center bg-cover   bg-clip-border bg-no-repeat h-[90vh] lg:h-screen text-center text-white m-auto justify-center space-y-0 flex flex-col pt-4">
    <div class="justify-end hidden md:flex px-8 mr-[5%]">
        <div class="bg-white/5 w-[200px] flex flex-col items-center p-4 text-[14px] rounded-3xl mb-10">
            <img loading="lazy" src="/assets/images/dev.svg" class="w-[40%]"/>
            Development
        </div>
    </div>
    <div class="relative font-gt w-full px-2 md:w-[80%] flex flex-col text-center md:text-left md:px-[100px]">
        <span class="md:font-normal sm:font-bold text-[40px] lg:text-[64px] md:w-[70%] text-center md:text-left">Financing the SDGs, Ensuring Tomorrow</span>
        <div class="mt-8 flex flex-col md:flex-row gap-8 md:gap-4 items-center">
                <NuxtLink to="/#contact" class="bg-white rounded-[30px] px-8 py-2 text-black h-fit">PARTNER WITH US</NuxtLink>
                <img loading="lazy" src="/assets/images/Line.svg"/>
                <div class="font-[600] text-[20px] md:text-[18px] w-full md:w-[50%]">
                    Leading sustainable development finance across Africa through innovative green banking solutions
                </div>
        </div>
    </div>
    <div class="justify-end hidden md:flex px-8 mr-[5%]">
        <div class="bg-white/5 w-[200px] text-[14px] flex flex-col items-center p-4 rounded-full ">
            DENHAM &amp; GREY
        </div>
    </div>
</section>
<section class="space-y-0 md:grid grid-cols-3 hidden p-6 px-[5%] shadow-xl">
    <div class="px-[15%] py-6 h-[300px] justify-center font-gt bg-[url('/assets/images/people.svg')] bg-no-repeat bg-center  border-r border-r-width-[60%] border-gray-500 flex flex-col text-left">
        <div class="text-[24px] text-[#474A4F] font-bold">Empowering Communities</div>
        <p class="font-bold text-[#7B7B7B]">Building sustainable communities through strategic investment and development initiatives.</p>
    </div>
    <div class="px-[15%] py-6 h-[300px] justify-center font-gt bg-[url('/assets/images/arrow-growth.svg')] bg-no-repeat bg-center  border-r border-r-width-[60%] border-gray-500 flex flex-col text-left">
        <div class="text-[24px] text-[#474A4F] font-bold">Driving Economic Growth</div>
        <p class="font-bold text-[#7B7B7B]">Creating value through innovative financial solutions and strategic partnership.</p>
    </div>
    <div class="px-[15%] py-6 h-[300px] justify-center font-gt bg-[url('/assets/images/user-protect.svg')] bg-no-repeat bg-center flex flex-col text-left">
        <div class="text-[24px] text-[#474A4F] font-bold">Protecting the Environment</div>
        <p class="font-bold text-[#7B7B7B]">Commitment to sustainable practices and environmental responsibility in all our ventures.</p>
    </div>
</section>
<section class="py-[4%] md:px-[2%] font-dg ">

    <div class="grid md:grid-cols-2 font-dg md:px-[6%] gap-6 items-center">
        
        <div class=" space-y-4 px-6 ">
          <div class="bg-[#474A4F]/10 rounded-full py-2 px-6 font-gt font-bold w-fit">ESTABLISHED IN 2021</div>
          <h5 class="font-gt text-[24px] md:text-[38px] leading-auto font-bold">Welcome to Denham &amp; Grey</h5>
          <p class="font-gt font-bold md:text-[16px] text-[#7B7B7B] leading-[25px] tracking-wide ">
            At Denham &amp; Grey, our focus is on structured excellence with expertise in structured lending and developmental finance. We leverage industry expertise to develop project efficiency improvements, reduce project delivery risk and strengthen project development and execution. 
            <br/>
            <br/>
            We strive to leverage various management and ownership structures, originating lending rounds, implementing structured partnerships, aligning stakeholder needs and technical risks and providing comprehensive solutions.
         </p>
        <button class="bg-white border border-[#EBEBEB] rounded-lg px-8 py-2 text-black h-fit flex gap-4 font-gt items-center font-bold">
            LEARN MORE ABOUT US
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.83679 17.4948L17.8368 10.8282C17.9842 10.7628 18.1094 10.656 18.1973 10.5208C18.2852 10.3856 18.332 10.2278 18.332 10.0665C18.332 9.90525 18.2852 9.74746 18.1973 9.61226C18.1094 9.47706 17.9842 9.37028 17.8368 9.30485L2.83679 2.63818C2.69406 2.57477 2.53637 2.55274 2.38172 2.57462C2.22708 2.5965 2.08169 2.6614 1.96214 2.76192C1.8426 2.86244 1.75371 2.99453 1.70562 3.14312C1.65752 3.29172 1.65215 3.45085 1.69013 3.60235L3.09763 9.23318H10.8318C11.0528 9.23318 11.2648 9.32098 11.421 9.47726C11.5773 9.63354 11.6651 9.8455 11.6651 10.0665C11.6651 10.2875 11.5773 10.4995 11.421 10.6558C11.2648 10.8121 11.0528 10.8998 10.8318 10.8998H3.09763L1.69013 16.5315C1.65235 16.683 1.65787 16.842 1.70605 16.9904C1.75423 17.1389 1.84314 17.2708 1.96265 17.3712C2.08216 17.4716 2.22746 17.5365 2.38201 17.5583C2.53655 17.5802 2.69413 17.5582 2.83679 17.4948Z" fill="#474A4F"/>
                </svg>                
        </button>
        </div>
        <img loading="lazy" src="/assets/images/welcome.svg" alt="" class="w-40% md:w-[90%] h-full order-first md:order-last">
    </div>
  
  </section>

<section class="bg-[url('/assets/images/est.svg')] bg-center bg-cover  bg-clip-border bg-no-repeat py-[10%] px-[5%] text-white font-gt">
    <div class="lg:w-1/2 space-y-4 lg:space-y-8 font-gt">
        <h3 class="text-[22px] lg:text-[26px] tracking-[5px] font-gt">ESTABLISHED IN 2021</h3>
        <h3 class="font-bold text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] w-[100%] md:leading-[50px]">We are experts in impact investment and wholesale lending</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 bg-black/10 py-6  ">
            <div class="flex flex-col font-bold ">
                <span class="border-b-[3px]  border-yellow-theme text-[24px] lg:text-[40px]">$20 Million</span>
                <span class="font-normal text-[20px] lg:text-[24px]">Approved funding</span>
            </div>
            <div class="flex flex-col font-bold ">
                <span class="border-b-[3px]  border-yellow-theme text-[24px] lg:text-[40px]">49 Locations</span>
                <span class="font-normal text-[20px] lg:text-[24px]">Impact channels</span>
            </div>
        </div>
    </div>
</section>
<section class="text-center font-gt bg-[#FBFBFC] py-[2%]">
    <div class="h-[30%] flex flex-col items-center space-y-4  mb-[3%]">
        <h2 class="font-bold font-gt text-[32px] lg:text-[40px] leading-[50px]">Our Financial Offerings</h2>

        <p class="font-gt text-[16px] lg:text-[16px] xl:text-[16px] text-[#7B7B7B] font-bold w-[50%] lg:leading-[30px] tracking-wide ">
            Our financial offerings are specialised into three key areas, aligned with the risk profile and financial needs of our partners
        </p>
    </div>
    <div class=" grid grid-cols-1 lg:grid-cols-3 gap-4 text-white px-[12%]">
        <div class="relative shadow-lg">
            <img loading="lazy" src="/assets/images/pillar1.png" alt="" class="w-full h-auto transition-opacity duration-800">
            <div class="py-4 px-8 flex flex-col justify-center text-left">
                <h3 class="font-gt text-[20px] 2xl:text-[32px] font-bold text-[#474A4F]">
                    Impact Funding
                </h3>
                <ul class="font-bold text-[#7B7B7B] text-[16px] list-disc pl-6 space-y-3">
                    <li>Measurable social impact</li>
                    <li>Environmental sustainability</li>
                    <li>Community development initiatives</li>
                </ul>
            </div>
        </div>
        <div class="relative shadow-lg">
            <img loading="lazy" src="/assets/images/pillar2.png" alt="" class="w-full h-auto transition-opacity duration-500">
            <div class="py-4 px-8 flex flex-col justify-center text-left space-y-2">
                <h3 class="font-gt text-[20px] 2xl:text-[30px] font-bold text-[#474A4F]">
                    Wholesale Funding
                </h3>
                <ul class="font-bold text-[#7B7B7B] text-[16px] list-disc pl-6 space-y-3">
                    <li>Large-scale development projects</li>
                    <li>Infrastructure financing</li>
                    <li>Institutional partnerships</li>
                </ul>
        </div>
    </div>
        <div class="relative shadow-lg">
            <img loading="lazy" src="/assets/images/pillar3.png" alt="" class="w-full h-auto transition-opacity duration-300">
            <div class="py-4 px-8 flex flex-col justify-center text-left space-y-2">
                <h3 class="font-gt text-[20px] 2xl:text-[32px] font-bold text-[#474A4F]">
                    Strategic Finance
                </h3>
                <ul class="font-bold text-[#7B7B7B] text-[16px] list-disc pl-6 space-y-3">
                    <li>Tailored financial strategies</li>
                    <li>Project optimization</li>
                    <li>Risk mitigation planning</li>
                </ul>
            </div>
        </div>

    </div>
</section>
<section class="h-[50%] bg-clip-border bg-no-repeat m-auto md:px-25%] md:py-[5%] flex flex-col items-center justify-center space-y-6">
    <div class="flex flex-col p-[3%] bg-[url('/assets/images/non-fin.png')] bg-no-repeat bg-cover h-[700px] w-[90%] items-start justify-end mx-[20%] text-white rounded-[30px] space-y-6 font-gt">
        <h2 class="font-semibold text-[24px] lg:text-[58px] font-gt text-white xl:w-[60%] leading-[70px] tracking-wide">Our Non-Financial Offering</h2>
        <p class="text-[24px] w-[80%] xl:w-[55%] leading-[30px] font-bold text-[#EBEBEB]">Comprehensive support beyond financing to ensure project success.</p>
    </div>
    <div class="flex flex-col md:flex-row  space-y-4 rounded-md md:bg-white px-[2%] py-[2%] md:w-[80%] items-center justify-center mt-[-50px] md:mt-0">
        <div class=" space-y-6 items-center">
            <h2 class="font-bold text-[24px] lg:text-[40px] 2xl:text-[40px] font-gt w-[70%]">Technical Assistance &amp; Capacity Building</h2>

        </div>
    <article class="font-gt text-[#7B7B7B] font-bold text-[16px] lg:text-[16px] space-y-6 w-full p-2 md:w-[60%] leading-[25px] ">
        Denham &amp; Grey offers comprehensive technical assistance and capacity-building services to empower partners with the knowledge, skills, and resources for sustainable development. We help impact partners build their capacity to manage their own risks, improve efficiency, and achieve long-term impact.
        <br/>
        <br/>
         Our support includes developing the technical and financial capacity to structure sustainable financing aligned with the SDGs. Our technical assistance includes structuring green transactions and developing financial and non-financial offerings to promote financial inclusion and optimise impact on the SDGs.
    </article>
</div>
</section>
<section class="bg-[url('/assets/images/handshake.png')] bg-center bg-cover  bg-no-repeat py-[5%] px-[5%] md:px-[20%] font-gt text-white" id="contact">
    <div class="max-w-[1440px] flex flex-col gap-6 items-center">
        <div class="md:w-[40%]">
            <h3 class="font-semibold text-center text-[30px] leading-[60px]">Partner With Us</h3>
        </div>
        <div class="w-full md:w-[60%]">
            <form @submit="" class="space-y-3">

                <div class="space-y-3">
                    <div class="flex flex-col md:flex-row gap-3">
                        <input type="text" id="name" v-model="name" class="bg-white border border-white !text-black lg:text-[14px] block w-full p-2 lg:p-2.5 rounded-lg " placeholder="Name" required>
                        <input type="tel" id="tel" v-model="lastname" class="bg-white border border-white !text-black lg:text-[14px] block w-full p-2 lg:p-2.5 rounded-lg " placeholder="Phone Number" required>
                    </div>
                    <div>
                        <input type="email" id="email" v-model="lastname" class="bg-white border border-white !text-black lg:text-[14px] block w-full p-2 lg:p-2.5 rounded-lg " placeholder="Email" required>
                    </div>
                    <div>
                        <textarea id="message" v-model="message" rows="4" class="block p-2 lg:p-2.5 w-full lg:text-[14px] !text-black bg-white border border-white rounded-lg " placeholder="Tell us what you want"></textarea>
                    </div>
                </div>
                        <button class="bg-primary-theme !text-black py-3 px-14 rounded-xl font-bold w-full">
                            PARTNER WITH US
                        </button>   
            </form>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
const posts = [{
    href: '/',
    heading: 'Smart Financial Habits to Start Now',
    img: 'assets/images/feed1.png',
    description: 'This post could explore the importance of establishing strong financial habits early in life. Discuss budgeting, saving, investing in index funds, and building an emergency fund. Include tips on how to manage student loans and credit cards responsibly',
    tags: ["News feed"],
    date: 'July 15, 2023'
}, {
    href: '/',
    heading: 'The Impact of AI on the Future of Personal Finance Management',
    img: 'assets/images/feed2.png',
    description: 'Explore how artificial intelligence is revolutionizing personal finance management. Discuss AI-powered budgeting apps, robo-advisors, and personalized....',
    tags: ["News feed"],
    date: 'July 15, 2023'
}, {
    href: '/',
    heading: 'How to Align Your Portfolio with Your Values',
    img: 'assets/images/feed3.png',
    description: 'Explore the growing trend of Environmental, Social, and Governance (ESG) investing. Discuss what ESG investing entails, its benefits, and how to get started. Include examples of companies and funds that prioritize sustainability and',
    tags: ["News feed"],
    date: 'July 15, 2023'
}];
</script>
