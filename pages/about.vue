<template>
<section class="bg-[url('/assets/images/about.svg')] bg-center bg-cover bg-fixed  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-col py-[5%]">
    <h3 class="text-[96px]">ABOUT US</h3>
    <div class="font-bold text-[20px]">
        <NuxtLink class="text-theme-green" to="/">Home &nbsp; >> &nbsp;</NuxtLink>
        About Us
    </div>
</section>
<section class="grid md:grid-cols-2 gap-3 py-16 px-[12%] items-center">
    <div>
        <img src="/assets/images/exp.svg" class="" alt="">
    </div>
        <div class="space-y-4">
            <h5 class="font-dg text-[48px] leading-[1em] font-medium">Our Foundation and Operations</h5>
            <p class="font-dg font-medium text-theme-gray text-[24px] leading-auto">Established in 2021, Denham &amp; Grey commenced full operations in 2024. Our primary location is in Lagos State, the financial capital of Nigeria, allowing us easy access to our clients, critical market information, and effective client monitoring with a secondary location in the Federal Capital Territory of Nigeria. </p>
        </div>

</section>
<section class="text-center font-dg bg-[url('/assets/images/philosophy.svg')] bg-no-repeat bg-cover bg-fixed py-[5%]">
    <div class="h-[30%] flex flex-col items-center space-y-4  mb-[3%]">
        <h2 class="font-semibold text-[64px] text-white">Our Philosophy</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 text-white gap-6 px-[17%]">
        <div class="relative group">
            <img src="/assets/images/vision.svg" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-300">
            <h3 class="absolute inset-0 flex flex-col items-center justify-center text-center font-dg text-[32px] font-medium group-hover:hidden">
                <img src="/assets/images/logo-yellow.png" />
                Our Vision
            </h3>
            <div class="absolute bg-white p-6 inset-0 flex flex-col text-left  opacity-0  hover:opacity-70 transition-opacity duration-300 group-hover:opacity-90 text-theme-gray">
                <p class="font-dg font-medium md:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] xl:leading-8">
                  To be the leading impact investment firm in Nigeria, fostering sustainable
                  development through investments that contribute to a prosperous and equitable future.
                </p>
            </div>
        </div>
        <div class="relative group">
            <img src="/assets/images/mission.svg" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-300">
            <h3 class="absolute inset-0 flex flex-col items-center justify-center text-center font-dg text-[32px] font-medium group-hover:hidden">
                <img src="/assets/images/logo-yellow.png" />
                Our Mission
            </h3>
            <div class="absolute bg-white p-6 inset-0 flex flex-col text-left  opacity-0  hover:opacity-70 transition-opacity duration-300 group-hover:opacity-90 text-theme-gray">
                <p class="font-dg font-medium md:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] xl:leading-8">
                  To mobilize capital for Nigeria's SDGs with financial solutions that empower communities, drive growth, and protect the environment.
                </p>
            </div>
        </div>
        <div class="relative group">
            <img src="/assets/images/values.svg" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-300">
            <h3 class="absolute inset-0 flex flex-col items-center justify-center text-center font-dg text-[32px] font-medium group-hover:hidden">
                <img src="/assets/images/logo-yellow.png" />
                Our Values
            </h3>
            <div class="absolute bg-white p-6 inset-0 flex flex-col text-left  opacity-0  hover:opacity-70 transition-opacity duration-300 group-hover:opacity-90 text-theme-gray">
                <p class="font-dg font-medium md:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] xl:leading-8">
                  We value integrity, striving for excellence, fostering collaboration, embracing innovation, and always prioritizing our clients' needs in every solution we provide.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="text-center font-dg">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[6%] mb-[3%]">
        <h2 class="font-semibold text-[64px] leading-[50px]">Meet Our Team</h2>
        <div class="flex flex-row w-[8%] gap-3">
            <div class="w-[20%] h-[4px] bg-theme-green"></div>
            <div class="w-[80%] h-[4px] bg-theme-green"></div>
        </div>
        <p class="font-dg text-[32px] text-theme-gray font-medium w-[50%] leading-[40px]">
          Our team at Denham &amp; Grey consists of experienced professionals dedicated to providing innovative financial solutions to our Impact Partners. Together, we leverage our expertise to drive impact in Nigeria’s development finance sector
        </p>
    </div>
    <div class="bg-theme-gray-2 px-[10%] py-[3%]">
      <h3 class="font-dg font-semibold my-4 text-[40px]">Board of Directors</h3>
      <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        <div
          v-for="person in people"
          :key="person.name"
          class="relative group flex justify-center my-3"
        >
          <img
            :src="person.imageSrc"
            :alt="person.name"
            class="w-3/4 h-auto transition-opacity duration-300 "
          />
      <div class="absolute inset-y-0 bg-black flex opacity-0 group-hover:opacity-50 transition-opacity duration-300 w-3/4"></div>
          <div @click="openModal(person)"
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >

          </div>
    
          <!-- Name Card -->
          <div
            class="absolute inset-x-0 bottom-[-50px] flex flex-col items-center justify-center text-center font-dg text-[20px] font-semibold border-2 border-yellow-theme bg-white w-[70%] mx-auto  h-auto py-2 px-1"
          >
            <h2>{{ person.name }}</h2>
            <p class="text-gray-500 text-sm font-normal">{{ person.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-[10%] py-[5%]">
      <h3 class="font-dg font-semibold my-4 text-[40px]">Management Team</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div
          v-for="mgt in mgts"
          :key="mgt.name"
          class="relative group flex justify-center my-3"
        >
          <img
            :src="mgt.imageSrc"
            :alt="mgt.name"
            class="w-1/2 h-auto transition-opacity duration-300 "
          />
      <div class="absolute inset-y-0 bg-black flex opacity-0 group-hover:opacity-50 transition-opacity duration-300 w-1/2"></div>
          <div @click="openModal(mgt)"
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
        
          </div>
    
          <!-- Name Card -->
          <div
            class="absolute inset-x-0 bottom-[-20px] flex flex-col items-center justify-center text-center font-dg text-[20px] font-semibold border-2 border-yellow-theme bg-white w-[40%] mx-auto  h-auto p-2"
          >
            <h2>{{ mgt.name }}</h2>
            <p class="text-gray-500 text-sm font-normal">{{ mgt.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-[70%] mx-2" @click="closeModal">
        <button @click="closeModal" class="absolute top-2 right-2 text-white font-bold text-xl">×</button>
        <div class="flex flex-row gap-8">
          <div class="w-[30%]">
            <img :src="selectedPerson.imageSrc" alt="" class="w-full h-auto mb-4">
            <h2 class="text-2xl font-semibold">{{ selectedPerson.name }}</h2>
            <p class="text-gray-700">{{ selectedPerson.title }}</p>
          </div>
          <p class="w-[70%] text-left">
            {{selectedPerson.description}}
          </p>
        </div>
      </div>
    </div>
</section>
<section class="text-center font-dg">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[6%] mb-[3%]">
        <h2 class="font-semibold text-[64px] leading-[50px]">Our Three Pillars of Service</h2>
        <div class="flex flex-row w-[8%] gap-3">
            <div class="w-[20%] h-[4px] bg-theme-green"></div>
            <div class="w-[80%] h-[4px] bg-theme-green"></div>
        </div>
        <p class="font-dg text-[32px] text-theme-gray font-medium w-[50%] leading-[40px]">
            We specialize in <span class="font-mc text-[64px] font-normal text-theme-green">3</span> key areas: Impact funding, Wholesale funding, and Strategic finance, ensuring comprehensive solutions tailored to your needs.
        </p>
    </div>
    <div class=" grid grid-cols-3 text-white ">
        <div class="relative group">
            <img src="/assets/images/pillar1.svg" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-300">
            <h3 class="absolute inset-0 flex items-center justify-center text-center font-dg text-[32px] font-semibold group-hover:hidden">
                Impact Funding
            </h3>
            <div class="absolute p-8 inset-0 flex flex-col text-left  opacity-0  hover:opacity-70 transition-opacity duration-300 group-hover:opacity-70 ">
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
            <img src="/assets/images/pillar2.svg" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-300">
            <h3 class="absolute inset-0 flex items-center justify-center text-center font-dg text-[32px] font-semibold group-hover:hidden">
                Wholesale Funding
            </h3>
            <div class="absolute p-8 inset-0 flex flex-col text-left  opacity-0  hover:opacity-70 transition-opacity duration-300 group-hover:opacity-70 ">
                <h3 class="font-dg text-[32px] font-semibold hover:hidden">
                    Wholesale Funding
                </h3>
                <p class="font-dg font-medium text-[28px] leading-8">
                    We are a niche firm with a focus on providing flexible and innovative financing solutions to licensed and regulated financial institutions in Africa with a track record of good corporate governance, competent management, and prudent risk management practices.
                </p>
            </div>
        </div>
        <div class="relative group">
            <img src="/assets/images/pillar3.svg" alt="" class="w-full h-auto hover:opacity-75 transition-opacity duration-300">
            <h3 class="absolute inset-0 flex items-center justify-center text-center font-dg text-[32px] font-semibold group-hover:hidden">
                Strategic Finance
            </h3>
            <div class="absolute p-8 inset-0 flex flex-col text-left  opacity-0  hover:opacity-70 transition-opacity duration-300 group-hover:opacity-70 ">
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
<section class="grid md:grid-cols-2 gap-3 py-16 px-[12%] items-center">
  <div>
      <img src="/assets/images/exp-b.svg" class="" alt="">
  </div>
      <div class="space-y-4">
          <h5 class="font-dg lg:text-[36px] xl:text-[48px] leading-[1em] font-medium">Our Expertise in Institutional Lending and Business Development</h5>
          <p class="font-dg font-medium text-theme-gray text-[24px] leading-auto">At Denham &amp; Grey, our team of seasoned professionals with expertise in institutional lending and development finance, drive positive change by providing wholesale medium to long term financing towards funding initiatives through our Impact Partner Institutions (licensed and regulated financial institutions) that align with the Sustainable Development Goals (SDGs). 
            Denham &amp; Grey is an assembly of experienced banking and development finance professionals with unparalleled combined experience in the Nigerian Finance Industry. Founded by banking professionals who were among the pioneer staff in the first wholly licensed wholesale development finance institution, Denham &amp; Grey is made up of Management and Directors with extensive experience in risk management, finance, treasury, business development, audit, compliance and impact investment.</p>
      </div>

</section>
<section class="flex flex-col items-center text-center font-dg bg-[url('/assets/images/philosophy.svg')] bg-no-repeat bg-cover bg-fixed py-[5%] gap-6 mb-[3%]">
    <h2 class="font-medium text-[48px] text-white w-[50%] leading-[auto]">Ready to take your business to the next level? Click below to get started with our expert financial solutions.</h2>
    <button class="bg-white px-[5%] py-4  mx-auto">PARTNER WITH US</button>
</section>
</template>

<script lang="ts" setup>
interface Person {
  name: string;
  title: string;
  imageSrc: string;
}


const people: Person[] = [
  {
    name: "Shehu Jafiya",
    title: "Chairman and Independent Director",
    imageSrc: "/assets/images/shehu.svg",
    description: "Shehu Jafiya is a distinguished figure in African finance, renowned for his exceptional leadership in the commercial banking sector spanning more than three decades. Shehu's journey is marked by his transformative roles across multiple financial institutions. Before his current role as Chairman of the Board of Directors of Denham and Grey, he has served as; Group Head, EcoBank Transnational Inc (ETI). Executive Director FCT/North EcoBank, Nigeria. General Manager, FCT/North EcoBank, Nigeria. Managing Director, North-East, Bank PHB Plc, Nigeria. Zonal Head, North-West, Oceanic Bank International Plc, Nigeria. Member, Group Commercial Bank (CMB) Management Committee Member, Group CMB Asset Liability Committee Member, Group CMB HR Committee Senior Management, Executive Committee (EXCO), North Bank Strategy Committee Management Credit Committee Member, Group Assets Remedial Committee As Chairman of the Board at Denham and Grey Capital, Shehu Jafiya bringsan unparalleled blend of experience, network and strategic thinking. Hisoverarching vision is to establish a financial landscape characterized byinnovation, customer-centricity, and sustainable growth."
  },
  {
    name: "Kazeem Abdulrasheed Olanrewaju",
    title: "Independent Non-executive Director",
    imageSrc: "/assets/images/kazeem.svg",
    description: "Kazeem Abdulrasheed Olanrewaju is a transformative senior executive renowned for his visionary leadership and expertise across diverse sectors. With a proven track record spanning strategic planning, entrepreneurship, credit risk management, policy formulation, and microfinance banking, Kazeem excels at aligning corporate goals with comprehensive strategies. As the Founder of Alert Group Limited, Kazeem's forward-thinking vision centers on Microfinance development in Nigeria and Africa targeting over 5 million entrepreneurs. During his tenure as MD/CEO of Baobab Microfinance Ltd Nigeria, Kazeem propelled the institution to the top 3 in Nigeria. Overseeing steady growth in balance sheet size, customer retention, and profitability for five consecutive years. Mr. Kazeem holds a Ph.D. in Management Finance, M.Sc. in Financial Economics, and an MBA in Finance. Other professional affiliations include the Chartered Institute of Bankers of Nigeria, Certified Microfinance Banker, and more. He is a dedicated philanthropist through initiatives such as school sponsorship, scholarships, medical ambulance donations, and community service projects."
  },
  {
    name: "Sadiya El-Rufai",
    title: "Independent Non-executive Director",
    imageSrc: "/assets/images/sadiat.svg",
    description: "Sadiya El-Rufai is an accomplished legal professional with a dynamic career spanning over 18 years, marked by her exceptional expertise in Corporate & Commercial Law and Arbitration. She is a qualified Chartered Secretary and a Data Protection Practitioner, which has enabled her to weave through both the public and private sector engagements successfully. Sadiya has worked at Dikko & Mahmoud law firm where she rose to the position of Partner. She has served as the Regional Legal Officer at the Bank of Industry, Nigeria. She has been DBN’s (Development Bank of Nigeria Plc) Legal Counsel since its inception, thereby helping shape policies, procedures, standardization of its credit appraisal processes, and board evaluation exercises towards good governance. Sadiya is an alumna of Ahmadu Bello University (ABU), Bayero University, and the Smith's School of Business at Queen's University in Canada. She currently serves as the Managing Partner at El-Rufai Attorneys at Law."
  },
  {
    name: "Dauda Madubu Milgwe",
    title: "Non-executive Director",
    imageSrc: "/assets/images/dauda.svg",
    description: "Dauda Madubu Milgwe is an experienced public health expert with decades of experience in global public health and leadership. Dr. Madubu's professional career placed him at the center of crucial public health emergencies and efforts in Sub-Saharan Africa, playing leadership roles in the World Health Organisation’s (WHO) efforts in the surveillance, control, and management of the outbreak of epidemic-prone diseases like Ebola, Meningitis, Cholera, and Polio eradication in Nigeria. He has worked across the public and private sectors, carefully mobilizing support and coordinating the delivery of financial and programme support to the government across state and district levels in pursuit of enhanced healthcare delivery in Africa. In addition to his professional career, Dr. Madubu has maintained a keen interest in finance, specifically, building a resilient personal portfolio across different asset classes. He has enjoyed significant success in investing in money and capital markets through reputable intermediaries, promising entrepreneurs and businesses, and real estate. More recently, he is consolidating his knowledge and experience in finance with a careful foray into equity investments in promising financial and technology startups."
  },
  {
    name: "Dr Babangida Yohanna Kure",
    title: "Non-executive Director",
    imageSrc: "/assets/images/kure.svg",
    description: "Dr. Babangida Yohanna Kure is an investment analyst and consultant with a versatile background across various sectors. His expertise spans venture capital investment, business angel investment, deal structuring, due diligence, strategic planning, and deal selection. Dr. Kure possesses outstanding communication, analytical, and numerical skills that allow him to delve deeply into client requirements and provide insightful solutions. He is currently the Managing Director of MyDeeds Ltd London and Abuja, and leads organizational services focused on trading agri-commodities on the international market and advising clients on debt and equity financing. His accomplishments include advising startups, securing substantial trade finance, and developing bespoke business growth strategies. He was also Managing Director of Go Africa Global London, and has worked at several other international establishments such as: Telefonica (Wayra) London, UK. R, BuroHappold Engineering London Dr. Babangida is also a Course Director and Lecturer at Kingston University London, UK, with several published works to his credit. This multifaceted expertise in investment analysis, consulting, and academia makes him a valuable asset as a Director at Denham and Grey."
  },
  {
    name: "Victor Onoja Victor",
    title: "Non-executive Director",
    imageSrc: "/assets/images/victor.svg",
    description: "Mr. Victor Onoja Victor is a Chartered Engineer and Six Sigma professional. He also holds a Bachelor of Engineering Degree in Electrical and Electronic.He was appointed Chief Executive Officer of CENIT Energy Ghana in March 2020 after acting in this role for 2 years. Victor joined CENIT Energy in 2012 as Technical Director, having previously managed the construction of the CENIT Plant. Victor is an engineer with experience in power plant construction and management. He has worked in various operational, commercial, and management roles with Shandong Electric Power Construction Corporation (SEPCO III), GTG Energy, and Mechano SPM. Victor also worked on the National Integrated Power Project (NIPP) and the privatization process of all government-owned power plants in Nigeria as a consultant. These projects were geared towards the provision of sustainable energy for Nigeria and other West African countries. Victor brings a wealth of experience in Corporate Governance, Finance, and Risk Management to the Board."
  },
  {
    name: "Awa Michael",
    title: "Head Internal Audit, Control and Compliance",
    imageSrc: "/assets/images/awa.svg",
    description: "Awa Michael is a chartered accounting professional with 11 years’ experience in auditing. She started her professional career at PricewaterhouseCoopers and moved to the Development Bank of Nigeria as the Specialist Financial Audit in 2018. In 2022 she became the Head Internal Audit Department of Impact Credit Guarantee Limited. She joined Denham and Grey in 2024 as the Head, Internal Audit, Control and Compliance. Awa holds a BSc. Accountancy from the University of Maiduguri, Borno Nigeria and holds an MBA from the Quantic School of Business and Technology, Washington, DC, USA. She is a member of the Institute of Internal Auditors (IIA), Institute of Chartered Accountants of Nigeria (ICAN), Association of Chartered Certified Accountants (ACCA) and is a Certified Information Systems Auditor (CISA). Awa is passionate about financial inclusion and engages in mentorship activities in her voluntary time."
  },
  {
    name: "Daniel Ijudai Denis ",
    title: "Head Human Resources and Administration",
    imageSrc: "/assets/images/daniel.svg",
    description: "Daniel joined Denham and Grey Ltd in 2024 as the Head of Human Resources and Administration. Prior to joining Denham and Grey, Daniel worked in Business Strategy and Development in startups such as Scoutsoft, Phenom Sports and Hymam Synergy, with primary focus on business model development, capital raise, asset acquisition and management. Daniel has a BSc in Environmental Sciences from the American University of Nigeria, MSc in Energy Finance and Markets from the University of Edinburgh Business School and an MBA in Entrepreneurship and Innovation from the University of Abuja Business School. Daniel is passionate about Green Energy."
  },
];

const mgts: Person[] = [
  {
    name: "David Chinda",
    title: "Managing Director",
    imageSrc: "/assets/images/david.svg",
    description: "David brings over a decade of strategic expertise and hands-on experience in Commercial and Wholesale Banking, Credit Operations, Relationship Management, and Risk Management. As the Founder and Managing Director of Denham and Grey, David is committed to delivering exceptional results and value to clients while fostering a culture of innovation and excellence. David has worked with Access Bank in Credit Commercial, Retail and Public Sector Banking, Business Development, and Relationship Management. David worked as the Chief Operating Officer of Leadership Holdings, an Investment Management Company, and at the Development Bank of Nigeria specializing in wholesale Credit Operations, Risk Management, and Business Development. David has carried out due diligence on over 50 financial institutions and disbursed over $1.3bn with zero non-performing loans to 32 Financial Institutions at DBN. David holds a degree in Information Technology and an MSc in Finance & Investment (in view). David also holds a certificate in Sustainable Finance from Oxford University, a Certificate in Bank Analysis from Fitch Solutions, a Certificate in Loan Documentation, and is a Certified Development Finance Professional. David has received several commendations, including DBN’s Staff of the Year, Team Player of the Year, Winner of the DBN Innovation Challenge 2022, and an Award for Exceptional Performance - Access to Finance from the Vice President of the Federal Republic of Nigeria."
  },
  {
    name: "Bamidele Ibine FCA",
    title: "Chief Risk Officer",
    imageSrc: "/assets/images/bami.svg",
    description: "Bamidele is an accomplished financial professional with a distinguished career spanning financial analysis, risk management, due diligence consulting, financial reporting, and strategic financial management. With a proven track record of driving insightful decision-making and optimizing financial operations, Bamidele's expertise has contributed to the success of prominent financial institutions for over 20 years. His primary experience is in Financial Control and Risk Management across five banks, including UBA Plc and FCMB Ltd. He has served as a Financial Analyst and Due Diligence Consultant at the Development Bank of Nigeria, contributing to the bank's prudent risk management practices. Bamidele is an MBA holder from Pan Atlantic University (Lagos Business School), a Chartered Accountant, and a graduate of Industrial Mathematics from the Federal University of Technology Akure with a second upper division. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and a Senior Associate Member of the Risk Management Association of Nigeria (RIMAN)."
  }
];

const showModal = ref(false);
const selectedPerson = ref<Person | null>(null);

// Functions to handle modal
const openModal = (person: Person) => {
  selectedPerson.value = person;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedPerson.value = null;
};
</script>

<style>

</style>
