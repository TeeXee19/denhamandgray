<template>
<section class="bg-[url('/assets/images/about.png')] md:bg-[url('/assets/images/about.png')] bg-center bg-cover  bg-clip-border bg-no-repeat text-center text-white items-center m-auto justify-center font-dg space-y-0 flex flex-col py-[20%] md:py-[5%] font-gt h-[515px]">
    <h3 class="font-gt text-[32px] md:text-[76px]">ABOUT US</h3>
</section>
<section class="py-[4%] md:px-[6%] font-dg ">

  <div class="grid md:grid-cols-2 font-dg md:px-[10%] gap-4 items-center">
      <div class=" space-y-4 p-4 ">
        <h5 class="font-gt text-[24px] md:text-[40px] font-bold w-[75%]">Our Foundation and Operations</h5>
        <p class="font-gt font-bold text-black md:text-[18px] text-[#7B7B7B]">Established in 2021, Denham &amp; Grey began full operations in 2024. Our main office is in Lagos, Nigeria's financial hub, providing easy access to clients, market insights, and effective client monitoring. We also have a secondary location in the Federal Capital Territory.</p>
      </div>
      <img src="/assets/images/about-right.svg" alt="" class="w-40% md:w-[80%] h-full order-first md:order-last">
  </div>

</section>
<section class="text-left md:text-center font- bg-[#FAFAFA] py-[5%]">
    <div class="grid grid-cols-1 md:grid-cols-2 px-[16px] md:px-[15%] items-center justify-center text-black gap-6 font-gt">
        <div class="bg-[url('/assets/images/telo.svg')] bg-no-repeat bg-center flex flex-col justify-center gap-2 p-6 text-center rounded-[4px] w-[100%] h-[250px]">
            <span class="text-[24px] md:text-[32px]">Our Vision</span>
            <p class="text-[14px] md:text-[18px]">
              To mobilize capital for Nigeria's SDGs with financial solutions that empower communities, drive growth, and protect the environment.
            </p>
        </div>
        <div class="bg-[url('/assets/images/target.svg')] bg-no-repeat bg-center flex flex-col justify-center gap-2 p-6 text-center rounded-[4px] w-[100%] h-[250px]">
            <span class="text-[24px] md:text-[32px]">Our Mission</span>
            <p class="text-[14px] md:text-[18px]">
              To mobilize and channel innovative, scalable and sustainable financial solutions toward environmentally sustainable projects that foster inclusive economic growth.
            </p>
        </div>
    </div>
</section>
<section class="py-[2%] px-[10%] font-dg  ">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[3%] mb-[3%]">
        <h2 class="font-semibold font-ti text-[32px] md:text-[64px] leading-[50px]">Our Core Values</h2>
    </div>
    <div class="grid grid-cols-6  justify-center items-center font-gt font-bold text-[#7B7B7B] text-[18px] ">
        <div class="flex flex-col items-center justify-center md:space-x-[10%] md:w-[50%] gap-2 w-[">
            <img src="/assets/images/cv-01.svg"/>
            Sustainability
        </div>
        <div class="flex flex-col items-center justify-center md:space-x-[10%] md:w-[50%] gap-2 w-[">
            <img src="/assets/images/cv-02.svg"/>
            Integrity
        </div>
        <div class="flex flex-col items-center justify-center md:space-x-[10%] md:w-[50%] gap-2 w-[">
            <img src="/assets/images/cv-03.svg"/>
            inclusivity
        </div>
        <div class="flex flex-col items-center justify-center md:space-x-[10%] md:w-[50%] gap-2 w-[">
            <img src="/assets/images/cv-04.svg"/>
            Competence
        </div>
        <div class="flex flex-col items-center justify-center md:space-x-[10%] md:w-[50%] gap-2 w-[">
            <img src="/assets/images/cv-05.svg"/>
            Partnership
        </div>
        <div class="flex flex-col items-center justify-center md:space-x-[10%] md:w-[50%] gap-2 w-[">
            <img src="/assets/images/cv-06.svg"/>
            innovation
        </div>
    </div>
</section>
<section class="text-center">
    <div class="h-[30%] flex flex-col items-center space-y-4 pt-[6%] mb-[3%]">
        <h2 class="font-semibold font-gt text-[32px] md:text-[40px] leading-[50px]">Meet Our Team</h2>
        <p class="font-gt text- md:text-[24px] lg:text-[20px] text-[#7B7B7B] font-bold w-[55%]">
          Our team at Denham &amp; Grey consists of experienced professionals dedicated to providing innovative financial solutions to our Impact Partners. Together, we leverage our expertise to drive impact in Nigeria's development finance sector
        </p>
    </div>
    <div class=" md:px-[10%] py-[3%] flex flex-col items-center ">
        <h3 class="font-ti font-semibold my-4 text-[30px] md:text-[40px] bg-[#ECECEC] w-full md:w-[75%]">Board of Directors</h3>
        <div class="space-y-10">
          <!-- First Item Standing Alone -->
          <div class="flex justify-center">
            <div class="p-4 w-72 xxl:w-[500px]">
              <div class="relative group">
                <img
                  :src="people[0].imageSrc"
                  :alt="people[0].name"
                  class="w-full h-auto grayscale-0 group-hover:grayscale hover:opacity-75 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 bg-gray-900 hover:opacity-70 transition-opacity duration-300 group-hover:opacity-70">
                </div>
              </div>
              <div class="border">
                <h5 class="font-bold font-ti text-rub-md mt-2">{{ people[0].name }}</h5>
                <span class="font-ti text-dm-md text-[#A58C09]">{{ people[0].title }}</span>
              </div>
            </div>
          </div>
        
          <!-- Grid Layout for the Rest of the Items -->
          <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center cursor-pointer">
            <div class="p-4 w-72 xxl:w-[500px]" v-for="(person, index) in people.slice(1)" :key="index">
              <div class="relative group">
                <img
                  :src="person.imageSrc"
                  :alt="person.name"
                  class="w-full h-auto grayscale-0 group-hover:grayscale hover:opacity-75 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 bg-gray-900 hover:opacity-70 transition-opacity duration-300 group-hover:opacity-70">
                </div>
              </div>
              <div class="border">
                <h5 class="font-bold font-ti text-rub-md mt-2">{{ person.name }}</h5>
                <span class="font-ti text-dm-md text-[#A58C09]">{{ person.title }}</span>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="md:px-[10%] py-[5%] flex flex-col items-center ">
      <h3 class="font-ti font-semibold my-4 text-[30px] md:text-[40px] bg-[#ECECEC] w-full md:w-[75%]">Management Team</h3>
      <div class="space-y-10">
       
      
        <!-- Grid Layout for the Rest of the Items -->
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center cursor-pointer">
          <div class="p-4 w-72 xxl:w-[500px]" v-for="(mgt, index) in mgts" :key="index">
            <div class="relative group">
              <img
                :src="mgt.imageSrc"
                :alt="mgt.name"
                class="w-full h-auto grayscale-0 group-hover:grayscale hover:opacity-75 transition-opacity duration-300">
              <div class="absolute inset-0 flex items-center justify-center opacity-0 bg-gray-900 hover:opacity-70 transition-opacity duration-300 group-hover:opacity-70">
              </div>
            </div>
            <div class="border">
              <h5 class="font-bold font-ti text-rub-md mt-2">{{ mgt.name }}</h5>
              <span class="font-ti text-dm-md text-[#A58C09]">{{ mgt.title }}</span>
            </div>
          </div>
        </div> <!-- First Item Standing Alone -->
        <!-- <div class="flex justify-center">
          <div class="p-4 w-72 xxl:w-[500px]">
            <div class="relative group">
              <img
                :src="mgts[0].imageSrc"
                :alt="mgts[0].name"
                class="w-full h-auto grayscale-0 group-hover:grayscale hover:opacity-75 transition-opacity duration-300">
              <div class="absolute inset-0 flex items-center justify-center opacity-0 bg-gray-900 hover:opacity-70 transition-opacity duration-300 group-hover:opacity-70">
              </div>
            </div>
            <div class="border">
              <h5 class="font-bold font-ti text-rub-md mt-2">{{ mgts[0].name }}</h5>
              <span class="font-ti text-dm-md text-[#A58C09]">{{ mgts[0].title }}</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

      <div class="bg-white px-8 pb-8 rounded-lg shadow-lg max-w-[70%] mx-2 flex flex-col align-right" @click="closeModal">
         <button @click="closeModal" class="text-black font-bold text-[50px] text-end">×</button>
        <div class="flex flex-row gap-8">
          <div class="w-[30%]">
            <img :src="selectedPerson.imageSrc" alt="" class="w-full h-auto mb-4">
            <h2 class="text-2xl font-semibold">{{ selectedPerson.name }}</h2>
            <p class="text-gray-700">{{ selectedPerson.title }}</p>
          </div>
          <p class="w-[70%] text-left text-black text-[20px]">
            {{selectedPerson.description}}
          </p>
        </div>
      </div>
    </div>
</section>
<section class="md:flex flex-col items-center text-center font-gt bg-[url('/assets/images/about-partner.svg')] bg-no-repeat bg-cover gap-6 hidden h-[400px] py-[5%]">
    <h2 class="font-bold text-[32px] text-white w-[55%]">Ready to take your business to the next level? Click below to get started with our expert financial solutions.</h2>
    <button class="bg-primary-theme px-[5%] py-4  mx-auto rounded-lg font-bold">PARTNER WITH US</button>
</section>
</template>

<script lang="ts" setup>
interface Person {
    name: string;
    title: string;
    imageSrc: string;
}

const people: Person[] = [{
        name: "Shehu Jafiya",
        title: "Chairman and Independent Director",
        imageSrc: "/assets/images/shehu.svg",
        description: "Shehu Jafiya is a distinguished figure in African finance, renowned for his exceptional leadership in the commercial banking sector spanning more than three decades. Shehu's journey is marked by his transformative roles across multiple financial institutions. Before his current role as Chairman of the Board of Directors of Denham and Grey, he has served as; Group Head, EcoBank Transnational Inc (ETI). Executive Director FCT/North EcoBank, Nigeria. General Manager, FCT/North EcoBank, Nigeria. Managing Director, North-East, Bank PHB Plc, Nigeria. Zonal Head, North-West, Oceanic Bank International Plc, Nigeria. Member, Group Commercial Bank (CMB) Management Committee Member, Group CMB Asset Liability Committee Member, Group CMB HR Committee Senior Management, Executive Committee (EXCO), North Bank Strategy Committee Management Credit Committee Member, Group Assets Remedial Committee As Chairman of the Board at Denham and Grey Capital, Shehu Jafiya bringsan unparalleled blend of experience, network and strategic thinking. Hisoverarching vision is to establish a financial landscape characterized byinnovation, customer-centricity, and sustainable growth."
    },
    {
        name: "David Chinda",
        title: "Managing Director",
        imageSrc: "/assets/images/david.svg",
        description: "David brings over a decade of strategic expertise and hands-on experience in Commercial and Wholesale Banking, Credit Operations, Relationship Management, and Risk Management. As the Founder and Managing Director of Denham and Grey, David is committed to delivering exceptional results and value to clients while fostering a culture of innovation and excellence. David has worked with Access Bank in Credit Commercial, Retail and Public Sector Banking, Business Development, and Relationship Management. David worked as the Chief Operating Officer of Leadership Holdings, an Investment Management Company, and at the Development Bank of Nigeria specializing in wholesale Credit Operations, Risk Management, and Business Development. David has carried out due diligence on over 50 financial institutions and disbursed over $1.3bn with zero non-performing loans to 32 Financial Institutions at DBN. David holds a degree in Information Technology and an MSc in Finance & Investment (in view). David also holds a certificate in Sustainable Finance from Oxford University, a Certificate in Bank Analysis from Fitch Solutions, a Certificate in Loan Documentation, and is a Certified Development Finance Professional. David has received several commendations, including DBN’s Staff of the Year, Team Player of the Year, Winner of the DBN Innovation Challenge 2022, and an Award for Exceptional Performance - Access to Finance from the Vice President of the Federal Republic of Nigeria."
    },
    {
        name: "Kazeem Abdulrasheed Olanrewaju",
        title: "Independent Non-executive Director",
        imageSrc: "/assets/images/kazeem.svg",
        description: "Kazeem Abdulrasheed Olanrewaju is a transformative senior executive renowned for his visionary leadership and expertise across diverse sectors. With a proven track record spanning strategic planning, entrepreneurship, credit risk management, policy formulation, and microfinance banking, Kazeem excels at aligning corporate goals with comprehensive strategies. As the Founder of Alert Group Limited, Kazeem's forward-thinking vision centers on Microfinance development in Nigeria and Africa targeting over 5 million entrepreneurs. During his tenure as MD/CEO of Baobab Microfinance Ltd Nigeria, Kazeem propelled the institution to the top 3 in Nigeria. Overseeing steady growth in balance sheet size, customer retention, and profitability for five consecutive years. Mr. Kazeem holds a Ph.D. in Management Finance, M.Sc. in Financial Economics, and an MBA in Finance. Other professional affiliations include the Chartered Institute of Bankers of Nigeria, Certified Microfinance Banker, and more. He is a dedicated philanthropist through initiatives such as school sponsorship, scholarships, medical ambulance donations, and community service projects."
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
    }
];

const mgts: Person[] = [{
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
    },
    {
        name: "Awa Michael",
        title: "Head Internal Audit, Control and Compliance",
        imageSrc: "/assets/images/awa.svg",
        description: "Awa Michael is a chartered accounting professional with 11 years’ experience in auditing. She started her professional career at PricewaterhouseCoopers and moved to the Development Bank of Nigeria as the Specialist Financial Audit in 2018. In 2022 she became the Head Internal Audit Department of Impact Credit Guarantee Limited. She joined Denham and Grey in 2024 as the Head, Internal Audit, Control and Compliance. Awa holds a BSc. Accountancy from the University of Maiduguri, Borno Nigeria and holds an MBA from the Quantic School of Business and Technology, Washington, DC, USA. She is a member of the Institute of Internal Auditors (IIA), Institute of Chartered Accountants of Nigeria (ICAN), Association of Chartered Certified Accountants (ACCA) and is a Certified Information Systems Auditor (CISA). Awa is passionate about financial inclusion and engages in mentorship activities in her voluntary time."
    },{
        name: "Daniel Ijudai Denis ",
        title: "Head Human Resources and Administration",
        imageSrc: "/assets/images/daniel.svg",
        description: "Daniel joined Denham and Grey Ltd in 2024 as the Head of Human Resources and Administration. Prior to joining Denham and Grey, Daniel worked in Business Strategy and Development in startups such as Scoutsoft, Phenom Sports and Hymam Synergy, with primary focus on business model development, capital raise, asset acquisition and management. Daniel has a BSc in Environmental Sciences from the American University of Nigeria, MSc in Energy Finance and Markets from the University of Edinburgh Business School and an MBA in Entrepreneurship and Innovation from the University of Abuja Business School. Daniel is passionate about Green Energy."
    },{
        name: "Sunday Ojo",
        title: " Climate Change and Sustainability Specialist",
        imageSrc: "/assets/images/Sunday Ojo Pix.jpeg.jpg",
        description: "Awa Michael is a chartered accounting professional with 11 years’ experience in auditing. She started her professional career at PricewaterhouseCoopers and moved to the Development Bank of Nigeria as the Specialist Financial Audit in 2018. In 2022 she became the Head Internal Audit Department of Impact Credit Guarantee Limited. She joined Denham and Grey in 2024 as the Head, Internal Audit, Control and Compliance. Awa holds a BSc. Accountancy from the University of Maiduguri, Borno Nigeria and holds an MBA from the Quantic School of Business and Technology, Washington, DC, USA. She is a member of the Institute of Internal Auditors (IIA), Institute of Chartered Accountants of Nigeria (ICAN), Association of Chartered Certified Accountants (ACCA) and is a Certified Information Systems Auditor (CISA). Awa is passionate about financial inclusion and engages in mentorship activities in her voluntary time."
    },{
        name: "Olayinka Olaiya",
        title: "Technical Assistant",
        imageSrc: "/assets/images/Olayinka_Olaiya.png",
        description: "Awa Michael is a chartered accounting professional with 11 years’ experience in auditing. She started her professional career at PricewaterhouseCoopers and moved to the Development Bank of Nigeria as the Specialist Financial Audit in 2018. In 2022 she became the Head Internal Audit Department of Impact Credit Guarantee Limited. She joined Denham and Grey in 2024 as the Head, Internal Audit, Control and Compliance. Awa holds a BSc. Accountancy from the University of Maiduguri, Borno Nigeria and holds an MBA from the Quantic School of Business and Technology, Washington, DC, USA. She is a member of the Institute of Internal Auditors (IIA), Institute of Chartered Accountants of Nigeria (ICAN), Association of Chartered Certified Accountants (ACCA) and is a Certified Information Systems Auditor (CISA). Awa is passionate about financial inclusion and engages in mentorship activities in her voluntary time."
    },
    
];

const showModal = ref(false);
const selectedPerson = ref < Person | null > (null);

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
