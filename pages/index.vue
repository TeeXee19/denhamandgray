<template>
<section class="bg-[url('/assets/images/hero.png')] bg-center bg-cover bg-fixed  bg-clip-border bg-no-repeat h-[65vh] text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-row">
    <div class="absolute inset-0 bg-black opacity-40 h-[75.5vh]"></div>
    <div class="relative w-[95%] flex flex-col space-y-8">
        <h1 class="font-semibold font-dg text-[60px] md:w-[65%] lg:w-[55%] xl:w-[65%] mx-auto leading-[70px]">Secure Your Financial Success with Denham &amp; Grey</h1>
        <span class="font-medium text-[26px]">Financing the SGDs, Ensuring Tomorrow</span>

        <div class="mt-8">
            <NuxtLink to="/#contact" class="relative inline-block">
                <NuxtLink to="/#contact" class="bg-theme-green px-6 py-4  mx-auto">PARTNER WITH US</NuxtLink>
                <div class="absolute inset-0 flex justify-center items-center">
                    <div class="w-full h-px bg-theme-gray transform translate-y-8 translate-x-5"></div>
                    <div class="h-full w-px bg-theme-gray transform translate-x-1 translate-y-5"></div>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div class="relative flex flex-col justify-end space-y-8">
        <NuxtLink to="/">
            <img src="/assets/images/facebook-side.svg" alt="Facebook" class="h-6 w-6" />
        </NuxtLink>
        <NuxtLink to="/">
            <img src="/assets/images/instagram-side.svg" alt="Instagram" class="h-6 w-6" />
        </NuxtLink>
        <NuxtLink to="/">
            <img src="/assets/images/x-side.svg" alt="Twitter" class="h-6 w-6" />
        </NuxtLink>
        <NuxtLink to="/">
            <img src="/assets/images/youtube-side.svg" alt="LinkedIn" class="h-6 w-6" />
        </NuxtLink>
    </div>
</section>
<section class="bg-[url('/assets/images/sub-hero.png')] bg-center bg-cover  bg-clip-border bg-no-repeat font-dg space-y-0 md:grid grid-cols-3 hidden">
    <div class="p-4 border-r-2 border-gray-500">
        <span class="font-tw font-expanded text-[70px] text-hollow tracking-normal">01</span>
        <div class="font-dg text-[20px] text-white font-normal">Empowering Communities</div>
    </div>
    <div class="p-4 border-r border-gray-500">
        <span class="font-tw font-expanded text-[70px] text-hollow tracking-normal">02</span>
        <div class="font-dg text-[20px] text-white font-normal">Driving Economic Growth</div>
    </div>
    <div class="p-4">
        <span class="font-tw font-expanded text-[70px] text-hollow tracking-normal">03</span>
        <div class="font-dg text-[20px] text-white font-normal">Protecting the Environment</div>
    </div>
</section>
<section class="py-[4%] px-[10%] font-dg bg-[#F0F0F0]">
    <div class="pb-3">
        <h5 class=" font-semibold text-theme-green mb-3">ABOUT US</h5>
        <h3 class="font-bold text-[56px] leading-[auto] tracking-0">Welcome to Denham &amp; Grey</h3>
        <!-- <p class="font-medium w-[55%] text-theme-gray">
            “Led by a team with combined experience of over 100 years in Banking, Investment and Development Finance, we offer innovative financing solutions through our Impact Partner Institutions that addresses the various SGDs.”

        </p> -->
    </div>
    <div class="grid grid-cols-2 font-dg">
        <div class="p-10 bg-white space-y-[15%]">
            <p class="font-medium text-black text-[20px]">
                At Denham &amp; Grey, our team of seasoned professionals with expertise in institutional lending and development finance, drive positive change by providing wholesale medium to long term financing towards funding initiatives through our Impact Partner Institutions (licensed and regulated financial institutions) that align with the Sustainable Development Goals (SDGs).
                <br/>
                We leverage the channels and reach of our Impact Partner Institutions to provide funding towards empowering communities, driving economic growth and protecting the environment.
            </p>
            <NuxtLink to="/about" class="relative inline-block float-right">
                <NuxtLink to="/about" class="bg-theme-green text-white py-3 px-14 ">
                    Discover how we can empower your business
                </NuxtLink>
                <div class="absolute inset-0 flex justify-center items-center">
                    <div class="w-full h-px bg-theme-gray transform translate-y-7 translate-x-5"></div>
                    <div class="h-full w-px bg-theme-gray transform translate-x-1.5 translate-y-4"></div>
                </div>
            </NuxtLink>
        </div>
        <div class="relative">
            <img src="/assets/images/about-right.png" alt="" class="w-full h-auto">
            <div class="absolute inset-0 px-6 py-3 bg-black h-fit opacity-70 self-end">
              <h3 class="text-left font-dg text-[32px] font-semibold text-white leading-8 ">
                Leading wholesale impact investment in <br/>Nigeria....
              </h3>
            </div>
        </div>
    </div>
</section>
<section class="bg-[url('/assets/images/est.png')] bg-center bg-cover bg-fixed bg-clip-border bg-no-repeat py-[5%] px-[10%] font-dg text-white ">
    <div class="max-w-[1440px]">
        <h3 class="font-bold text-[36px] tracking-[10px]">ESTABLISHED IN 2021</h3>
        <h3 class="font-semibold text-[70px] w-[70%] leading-[80px]">We are experts in impact investment and wholesale lending</h3>
        <div class="grid grid-cols-2 ">
            <div class="flex flex-col font-bold ">
                <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">$20 Million</span>
                <span class="font-normal text-[36px]">Approved funding</span>
            </div>
            <div class="flex flex-col font-bold ">
                <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">49 Locations</span>
                <span class="font-normal text-[36px]">Impact channels</span>
            </div>
        </div>
    </div>
</section>
<section class="text-center font-dg">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[6%] mb-[3%]">
        <h2 class="font-semibold text-[64px] leading-[50px]">Our Financial Products</h2>
        <div class="flex flex-row w-[8%] gap-3">
            <div class="w-[20%] h-[4px] bg-theme-green"></div>
            <div class="w-[80%] h-[4px] bg-theme-green"></div>
        </div>
        <p class="font-dg text-[32px] text-theme-gray font-medium w-[70%] leading-[40px]">
            Our financial offerings are specialized to three key areas which are tailored in line with the risk profile and financial needs of our partners.
        </p>
    </div>
    <div class=" grid grid-cols-3 text-white ">
        <div class="relative group">
            <img src="/assets/images/pillar1.png" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-800">
            <h3 class="absolute inset-0 flex items-center justify-center text-center font-dg text-[32px] font-semibold group-hover:hidden">
                Impact Funding
            </h3>
            <div class="absolute p-8 inset-0 flex flex-col justify-center text-left  opacity-0  hover:opacity-70 transition-opacity duration-1000 group-hover:opacity-70 ">
                <h3 class="font-dg text-[32px] font-semibold hover:hidden">
                    Impact Funding
                </h3>
                <p class="font-dg font-medium text-[28px] leading-8">
                    Impact driven funding will be made available to drive
                    financing in specific segments of the economy, with a
                    focus on women, start-ups, green projects, and other
                    segments as deemed necessary.
                </p>
            </div>
        </div>
        <div class="relative group">
            <img src="/assets/images/pillar2.png" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-500">
            <h3 class="absolute inset-0 flex items-center justify-center text-center font-dg text-[32px] font-semibold group-hover:hidden">
                Wholesale Funding
            </h3>
            <div class="absolute p-8 inset-0 flex flex-col justify-center text-left  opacity-0  hover:opacity-70 transition-opacity duration-1000 group-hover:opacity-70 ">
                <h3 class="font-dg text-[32px] font-semibold hover:hidden">
                    Wholesale Funding
                </h3>
                <p class="font-dg font-medium text-[28px] leading-8">
                    We are a niche firm with a focus on providing flexible and innovative financing solutions to licensed and regulated financial institutions in Africa with a track record of good corporate governance, competent management, and prudent risk management practices.
                </p>
            </div>
        </div>
        <div class="relative group">
            <img src="/assets/images/pillar3.png" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-300">
            <h3 class="absolute inset-0 flex items-center justify-center text-center font-dg text-[32px] font-semibold group-hover:hidden">
                Strategic Finance
            </h3>
            <div class="absolute p-8 inset-0 flex flex-col justify-center text-left  opacity-0  hover:opacity-70 transition-opacity duration-1000 group-hover:opacity-70 ">
                <h3 class="font-dg text-[32px] font-semibold hover:hidden">
                    Strategic Finance
                </h3>
                <p class="font-dg font-medium text-[28px] leading-8">
                    Our partners require funding to enable them achieve their strategic objectives from acquisition to other financial institutions to branch expansion, we are here to support your strategies to ensure you achieve your mandates.
                </p>
            </div>
        </div>
    </div>
</section>
<section class="bg-[url('/assets/images/TA.png')] bg-center bg-cover h-[50%]   bg-clip-border bg-no-repeat text-white m-auto font-dg px-[10%] py-[5%]">
    <div class="h-[30%] flex flex-col items-center space-y-2 mb-[3%]">
        <h2 class="font-semibold text-[64px] leading-[50px]">Our Non-Financial Offering</h2>
        <div class="flex flex-row w-[8%] gap-3">
            <div class="w-[20%] h-[4px] bg-theme-green"></div>
            <div class="w-[80%] h-[4px] bg-theme-green"></div>
        </div>
    </div>
    <div class="h-[30%] flex flex-col items-left space-y-4">
        <h2 class="font-semibold text-[40px]  w-[60%]">Technical Assistance and Capacity Building</h2>
    </div>
    <article class="font-dg font-medium text-white text-[26px] text-justify w-3/4 space-y-6">
        <p>
            At Denham &amp; Grey, we understand that achieving sustainable development goes beyond
            financial investment. That is why we offer comprehensive technical assistance and
            capacity-building services to empower our partners with the knowledge, skills, and
            resources they need to succeed.
        </p>
        <p>
            We provide support to our impact partners to build their capacity to manage risk, enhance efficiency, and drive long-term sustainable impact.
        </p>
        <p>
            Denham &amp; Grey provides tailored support to our Impact Partner Institutions to develop
            the technical and financial capacity required to structure sustainable financing towards
            transactions and initiatives that align with the SDGs.
        </p>
         <p>
            Our technical assistance and capacity building supports our Impact partners in various forms such as <b>structuring green transactions, developing financial and non-financial offerings</b> to drive <b>financial inclusion across the country</b> and aiming to optimize impact on any of the SGDs.
        </p>
    </article>
</section>
<!-- <section class="gap-0 custom-container py-8 px-[10%]">
    <div class="pb-3">
        <h5 class="font-dg font-semibold text-[48px]">News Feeds</h5>
        <div class="flex justify-between">
            <div class="flex flex-row w-[8%] gap-3">
                <div class="w-[10%] h-[4px] bg-theme-green"></div>
                <div class="w-[90%] h-[4px] bg-theme-green"></div>
            </div>
            <span>
                <NuxtLink to="/" class="text-theme-green">View all feeds</NuxtLink>
            </span>
        </div>
    </div>

    <div class="md:gap-4 md:py-10 grid grid-flow-col md:grid-flow-row md:grid-cols-auto md:grid-cols-3 lg:grid-cols-auto lg:grid-cols-3 overflow-x-auto sm:max-h-fit">
        <div v-for="(post, index) in posts" :key="index" class="flex w-[300px] md:w-full">
            <blog :heading="post.heading" :href="post.href" :img="post.img" :description="post.description" :tags="post.tags" :date="post.date" />
        </div>
    </div>
</section> -->
<section class="bg-[url('/assets/images/contact.png')] bg-center bg-cover bg-fixed  bg-no-repeat py-[5%] px-[20%] font-dg text-white mx-auto" id="contact">
    <div class="max-w-[1440px] flex flex-col gap-6 items-center">
        <div class="w-[40%]">
            <h3 class="font-semibold text-[50px] leading-[60px]">Partner With Us</h3>
        </div>
        <div class="w-[60%]">
            <form @submit="" class="space-y-3">

                <div class="space-y-3">
                    <div class="flex flex-row gap-3">
                        <input type="text" id="name" v-model="name" class="bg-black border border-white text-gray-300 text-[24px] block w-full p-2.5 opacity-50" placeholder="Name" required>
                        <input type="tel" id="tel" v-model="lastname" class="bg-black border border-white text-gray-300 text-[24px] block w-full p-2.5 opacity-50" placeholder="Phone" required>
                    </div>
                    <div>
                        <input type="email" id="email" v-model="lastname" class="bg-black border border-white text-gray-300 text-[24px] block w-full p-2.5 opacity-50" placeholder="Email" required>
                    </div>
                    <div>
                        <textarea id="message" v-model="message" rows="4" class="block p-2.5 w-full text-[24px] text-gray-400 bg-black border border-white opacity-50" placeholder="Tell us what you want"></textarea>
                    </div>
                </div>
                <div class="float-right">
                        <button class="bg-theme-green text-white py-3 px-14 ">
                            Submit
                        </button>   
                </div>
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
