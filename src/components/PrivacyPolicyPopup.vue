<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 font-poppins">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="close"></div>
      
      <!-- Popup Card -->
      <div class="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-neutral-100 shrink-0">
          <h2 class="text-xl md:text-2xl font-semibold text-neutral-800">Privacy Policy</h2>
          <button @click="close" class="p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>
        
        <!-- Content Area -->
        <div class="p-6 md:p-8 overflow-y-auto text-neutral-700 text-sm md:text-base leading-relaxed space-y-4">
          <p>Reach Engage Develop acknowledges that privacy is important. We are committed to maintaining the privacy and security of all information submitted to Reach Engage Develop. This Privacy Policy applies to all our services, products and our website and outlines our commitment to the users of our website.</p>

          <p>If you have any questions about this policy, please feel free to contact us through our website or email <a href="mailto:jason@red-solutions.co.za" class="text-primary hover:underline">jason@red-solutions.co.za</a>. Except as set out below, we do not share, or sell, or disclose to a third party, any personally identifiable information collected on this site.</p>

          <p>Here is a list of the information we collect from you, either through our web site or because you give it to us in some other way, and why it is necessary to collect it:</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Business and personal information</h3>
          <p>This includes basic identification and contact information, such as your name and contact details and also includes all information given to us in the course of your business and ours, such as information you give us in your capacity as our client. We undertake to preserve the confidentiality of the information and of the terms of our relationship. It is not used for any other purpose. We expect you to reciprocate this policy.</p>

          <p>This information is used:</p>
          <ul class="list-none space-y-2">
            <li>1.1. to provide you with the services which you request;</li>
            <li>1.2. for verifying your identity for security purposes;</li>
            <li>1.3. for marketing our services and products;</li>
            <li>1.4. information which does not identify any individual may be used in a general way by us or third parties, to provide class information, for example relating to demographics or usage of a particular page or service.</li>
          </ul>

          <p>We keep information, which forms part of our business record for a minimum of six years. That is because we may need it in some way to support a claim or defence in court. That is also the period within which our tax collecting authorities may demand to know it.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Your domain name and e-mail address</h3>
          <p>This information is recognised by our servers and the pages that you visit are recorded. We shall not under any circumstances, divulge your e-mail address to any person who is not an employee or contractor of ours and who does not need to know, either generally or specifically. This information is used:</p>

          <ul class="list-none space-y-2">
            <li>2.1. to correspond with you or deal with you as you expect;</li>
            <li>2.2. in a collective way not referable to any particular individual, for the purpose of quality control and improvement of our site;</li>
            <li>2.3. to send you news and or information about the product or service you have either enquired about or purchased;</li>
            <li>2.4. to tell you about other products or services we offer or of sister websites.</li>
          </ul>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Information you post on our website</h3>
          <p>Information you send to us by posting to a forum or blog or in an email, is stored on our servers. We do not specifically use that information except to allow it to be read, but you will see in our terms and conditions that we reserve a right to use it in any way we decide.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Website usage information</h3>
          <p>We may use software embedded in our website (such as JavaScript) to collect information about pages you view and how you have reached them, what you do when you visit a page, the length of time you remain on the page, and how we perform in providing content to you. We do not presently associate such information with an identifiable person.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Information we obtain from third parties</h3>
          <p>Although we do not disclose your personal information to any third party (except as set out in this notice), we do receive data which is indirectly made up from your personal information, from software services such as Google Analytics and others. No such information is identifiable to you.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Content you provide to us with a view to be used by third party</h3>
          <p>If you provide information to us with a view to it being read, copied, downloaded or used by other people, we accept no responsibility for what that third party may do with it. It is up to you to satisfy yourself about the privacy level of every person who might see your information. If it is available to all the World, you have no control whatever as to how it is used.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Cookies</h3>
          <p>Cookies are small text files that are placed on your computer's hard drive through your web browser when you visit any web site. They are widely used to make web sites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
          <p>Like all other users of cookies, we may request the return of information from your computer when your browser requests a web page from our server. Cookies enable our web server to identify you to us, and to track your actions and the pages you visit while you use our website. The cookies we use may last for a single visit to our site (they are deleted from your computer when you close your browser), or may remain on your computer until you delete them or until a defined period of time has passed.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Sending a message to us via our website</h3>
          <p>When you send a message, we collect the data you have given to us in that message in order to obtain confirmation that you are entitled to receive the information and to provide to you the information you need. We record your request and our reply in order to increase the efficiency of our business / organisation.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Job application and employment</h3>
          <p>If you send us information in connection with a job application, we may keep it for up to three years in case we decide to contact you at a later date.</p>
          <p>If we employ you, we collect information about you and your work from time to time throughout the period of your employment. This information will be used only for purposes directly relevant to your employment. After your employment has ended, we will keep your file for six years before destroying or deleting it.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Marketing information</h3>
          <p>With your permission we pass your email address and name to selected associates whom we consider may provide services or products you would find useful. You may opt out of this service at any time by instructing us at <a href="https://www.reachengagedevelop.com" class="text-primary hover:underline">www.reachengagedevelop.com</a>.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Re-marketing</h3>
          <p>We may use re-marketing from time to time. This involves Google or some other supplier placing a tag or marker on your website in order to be able to serve to you an advert for our products / services when you visit some other website.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Affiliate information</h3>
          <p>This is information given to us by you in your capacity as an affiliate of us or a customer or client of ours. Such information is retained for business use only. We undertake to preserve the confidentiality of the information and of the terms of our relationship. It is not used for any other purpose. We expect any affiliate to agree to reciprocate this policy. As an exception to this, we have the right to disclose your first name and URL of your affiliate connection to other affiliates and to any other person or organisation, on and off site. The reason is solely to enable us to mention winners and others whose performance as an affiliate is in some way outstanding.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Use of site by children</h3>
          <p>We do not market to children, nor do we sell products or services for purchase by children. If you are under 18, you may use our site only with consent from a parent or guardian.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Disclosure to Government and their agencies</h3>
          <p>We are subject to the law like everyone else. We may be required to give information to legal authorities if they so request or if they have the proper authorisation such as a search warrant or court order.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Compliance with the law</h3>
          <p>This confidentiality policy has been compiled so as to comply with the law of every jurisdiction in which we aim to do business. If you think it fails to satisfy the law of your country, we would like to hear from you, but ultimately it is your choice as to whether you wish to use our website.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Review or update personally identifiable information</h3>
          <p>At any time you may review or update the personally identifiable information that we hold about you, by contacting us. To better safeguard your information, we will also take reasonable steps to verify your identity before granting access or making corrections to your information.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Removal of your information</h3>
          <p>If you wish us to remove personally identifiable information from our web site, you may contact us at <a href="https://www.reachengagedevelop.com" class="text-primary hover:underline">www.reachengagedevelop.com</a>. To better safeguard your information, we will also take reasonable steps to verify your identity before granting access or making corrections to your information.</p>

          <h3 class="text-lg font-semibold text-neutral-800 mt-6 mb-2">Data may be “processed” outside South Africa</h3>
          <p>Our web sites are hosted in South Africa. We also use outsourced services in countries outside South Africa from time to time in other aspects of our business. Accordingly data obtained within South Africa may be “processed” outside South Africa and data obtained in any other country may be processed within or outside that country.</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next';

// Use global state to toggle this popup
const isOpen = useState('isPrivacyPopupOpen', () => false);

const close = () => {
  isOpen.value = false;
};
</script>
