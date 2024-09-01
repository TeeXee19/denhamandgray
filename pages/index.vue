<template>
  <section class="bg-[url('/assets/images/hero.svg')] bg-center bg-cover bg-fixed  bg-clip-border bg-no-repeat h-[75vh] text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-row">
      <div class="absolute inset-0 bg-black opacity-40 h-[83.5vh]"></div>
      <div class="relative w-[95%] flex flex-col space-y-4">
          <h1 class="font-semibold font-dg text-[70px] w-[45%] mx-auto leading-[70px]">Secure Your Financial Success with Denham &amp; Grey</h1>
          <span class="font-medium text-[18px]">WHOLESALE FUNDING | IMPACT FUNDING | STRATEGIC FUNDING</span>
          <button class="bg-theme-green px-6 py-4  mx-auto">PARTNER WITH US</button>
      </div>
      <div class="relative flex flex-col justify-end space-y-8">
          <NuxtLink to="/facebook">
              <img src="/assets/images/facebook-side.svg" alt="Facebook" class="h-6 w-6" />
          </NuxtLink>
          <NuxtLink to="/instagram">
              <img src="/assets/images/instagram-side.svg" alt="Instagram" class="h-6 w-6" />
          </NuxtLink>
          <NuxtLink to="/twitter">
              <img src="/assets/images/x-side.svg" alt="Twitter" class="h-6 w-6" />
          </NuxtLink>
          <NuxtLink to="/linkedin">
              <img src="/assets/images/youtube-side.svg" alt="LinkedIn" class="h-6 w-6" />
          </NuxtLink>
      </div>
  </section>
  <section class="bg-[url('/assets/images/sub-hero.svg')] bg-center bg-cover  bg-clip-border bg-no-repeat font-dg space-y-0 md:grid grid-cols-3 hidden">
      <div class="p-4 border-r-2 border-gray-500">
          <span class="font-tw font-expanded text-[70px] text-hollow tracking-normal">01</span>
          <div class="font-dg text-[20px] text-white font-normal">"Financial freedom is not about how much you make, but how much you keep, invest wisely, and let grow over time."</div>
      </div>
      <div class="p-4 border-r border-gray-500">
          <span class="font-tw font-expanded text-[70px] text-hollow tracking-normal">02</span>
          <div class="font-dg text-[20px] text-white font-normal">"Building wealth is a marathon, not a sprint. It’s the consistent, small steps that lead to lasting financial success."</div>
      </div>
      <div class="p-4">
          <span class="font-tw font-expanded text-[70px] text-hollow tracking-normal">03</span>
          <div class="font-dg text-[20px] text-white font-normal">"Your financial future is created by what you do today, not tomorrow. Invest in your goals, and let time do the rest."</div>
      </div>
  </section>
  <section>
  
  </section>
  <section class="bg-[url('/assets/images/est.svg')] bg-center bg-cover bg-fixed bg-clip-border bg-no-repeat py-[5%] px-[10%] font-dg text-white ">
      <div class="max-w-[1440px]">
          <h3 class="font-bold text-[36px] tracking-[10px]">ESTABLISHED IN 2003</h3>
          <h3 class="font-semibold text-[70px] w-[70%] leading-[80px]">We are experts in institutional lending and development</h3>
          <div class="grid grid-cols-3 ">
              <div class="flex flex-col font-bold ">
                  <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">$75.63 bn</span>
                  <span class="font-normal text-[36px]">Total portfolio</span>
              </div>
              <div class="flex flex-col font-bold ">
                  <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">204</span>
                  <span class="font-normal text-[36px]">Branches in Africa</span>
              </div>
              <div class="flex flex-col font-bold ">
                  <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">72%</span>
                  <span class="font-normal text-[36px]">Annual returns</span>
              </div>
          </div>
      </div>
  </section>
  <section class="text-center font-dg">
      <div class="h-[30%] flex flex-col items-center space-y-4 pt-[6%]">
          <h2 class="font-semibold text-[64px] leading-[50px]">Our Three Pillars of Service</h2>
          <div class="flex flex-row w-[8%] gap-3">
              <div class="w-[20%] h-[4px] bg-theme-green"></div>
              <div class="w-[80%] h-[4px] bg-theme-green"></div>
          </div>
          <p class="font-dg text-[32px] text-theme-gray font-medium w-[50%] leading-[40px]">
              We specialize in <span class="font-mc text-[64px] font-normal text-theme-red">3</span> key areas: Impact funding, Wholesale funding, and Strategic finance, ensuring comprehensive solutions tailored to your needs.
          </p>
      </div>
      <div class="h-[50%] grid grid-cols-3">
          <div class="bg-[url('/assets/images/x.svg')]">Impact Funding</div>
          <div class="bg-[url('/assets/images/x.svg')]">Wholesale Funding</div>
          <div class="bg-[url('/assets/images/x.svg')]">Strategic Finance</div>
      </div>
      <div class="bg-[url('/assets/images/windmill.svg')] bg-center bg-cover bg-fixed bg-clip-border bg-no-repeat py-[5%] px-[10%] font-dg text-white h-[20%]">
  
      </div>
  </section>
  <section class="gap-0 custom-container py-8 px-[10%]">
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
  
  </section>
  <section class="bg-[url('/assets/images/contact.svg')] bg-center bg-cover bg-fixed bg-clip-border bg-no-repeat py-[5%] px-[10%] font-dg text-white ">
    <div class="max-w-[1440px]">
        <h3 class="font-bold text-[36px] tracking-[10px]">ESTABLISHED IN 2003</h3>
        <h3 class="font-semibold text-[70px] w-[70%] leading-[80px]">We are experts in institutional lending and development</h3>
        <div class="grid grid-cols-3 ">
            <div class="flex flex-col font-bold ">
                <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">$75.63 bn</span>
                <span class="font-normal text-[36px]">Total portfolio</span>
            </div>
            <div class="flex flex-col font-bold ">
                <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">204</span>
                <span class="font-normal text-[36px]">Branches in Africa</span>
            </div>
            <div class="flex flex-col font-bold ">
                <span class="border-b-[3px] w-[85%] border-yellow-theme text-[90px]">72%</span>
                <span class="font-normal text-[36px]">Annual returns</span>
            </div>
        </div>
    </div>
</section>
  </template>

<script lang="ts" setup>
const posts = [{
    href: '/blog/12',
    heading: 'Smart Financial Habits to Start Now',
    img: 'assets/images/feed1.svg',
    description: 'This post could explore the importance of establishing strong financial habits early in life. Discuss budgeting, saving, investing in index funds, and building an emergency fund. Include tips on how to manage student loans and credit cards responsibly',
    tags: ["News feed"],
    date: 'July 15, 2023'
}, {
    href: '/blog/14',
    heading: 'The Impact of AI on the Future of Personal Finance Management',
    img: 'assets/images/feed2.svg',
    description: 'Explore how artificial intelligence is revolutionizing personal finance management. Discuss AI-powered budgeting apps, robo-advisors, and personalized....',
    tags: ["News feed"],
    date: 'July 15, 2023'
}, {
    href: '/blog/14',
    heading: 'How to Align Your Portfolio with Your Values',
    img: 'assets/images/feed3.svg',
    description: 'Explore the growing trend of Environmental, Social, and Governance (ESG) investing. Discuss what ESG investing entails, its benefits, and how to get started. Include examples of companies and funds that prioritize sustainability and',
    tags: ["News feed"],
    date: 'July 15, 2023'
}];

</script>
