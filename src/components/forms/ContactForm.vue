<template>
  <form @submit.prevent="handleSubmit" :class="variant === 'modal' ? 'space-y-4' : 'space-y-5'">
    <!-- Name Input -->
    <div :class="variant === 'modal' ? 'space-y-1.5' : ''">
      <label :class="labelClass">
        Name <span v-if="variant === 'modal'">*</span>
      </label>
      <input
        type="text"
        required
        v-model="fullName"
        placeholder="e.g. Jane Doe"
        :class="inputClass"
      />
    </div>

    <!-- Phone Input -->
    <div :class="variant === 'modal' ? 'space-y-1.5' : ''">
      <label :class="labelClass">
        Phone number
      </label>
      <input
        type="tel"
        v-model="phone"
        placeholder="e.g. 082 123 4567"
        :class="inputClass"
      />
    </div>

    <!-- Email Input -->
    <div :class="variant === 'modal' ? 'space-y-1.5' : ''">
      <label :class="labelClass">
        Email Address <span v-if="variant === 'modal'">*</span>
      </label>
      <input
        type="email"
        required
        v-model="email"
        placeholder="e.g. jane@company.com"
        :class="inputClass"
      />
    </div>

    <!-- Service Selection -->
    <div :class="variant === 'modal' ? 'space-y-1.5' : ''">
      <label :class="labelClass">
        {{ variant === 'modal' ? 'Core Objective' : 'Select a service' }}
      </label>
      <select
        v-model="service"
        :class="[inputClass, 'appearance-none text-neutral-700']"
      >
        <option value="Select a service" disabled>Select a service</option>
        <option value="Digital Advertising">Digital Advertising</option>
        <option value="Social Media Management">Social Media Management</option>
        <option value="Website Development">Website Development</option>
        <option value="Online Reputation">Online Reputation</option>
        <option value="Location Listing">Location Listing</option>
        <option value="PostX - Demo">PostX - Demo</option>
        <option value="PostX - General Enquiry">PostX - General Enquiry</option>
        <option value="Conexa - Enquiry">Conexa - Enquiry</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <!-- Message -->
    <div :class="variant === 'modal' ? 'space-y-1.5' : ''">
      <label :class="labelClass">
        {{ variant === 'modal' ? 'Brief Description' : 'Message' }}
      </label>
      <textarea
        :rows="variant === 'modal' ? 3 : 4"
        v-model="message"
        placeholder="How can we help you?"
        :class="[inputClass, 'resize-none']"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div :class="variant === 'modal' ? 'pt-2' : 'pt-2'">
      <button
        type="submit"
        :disabled="isLoading"
        :class="buttonClass"
      >
        <div v-if="isLoading" class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        <template v-else>
          <span>Submit Request</span>
          <Send v-if="variant === 'modal'" class="h-4 w-4 ml-2 inline-block" />
        </template>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Send } from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  variant?: 'modal' | 'page'
}>(), {
  variant: 'page'
});

const emit = defineEmits(['success']);

const fullName = ref('');
const phone = ref('');
const email = ref('');
const service = ref('Select a service');
const message = ref('');
const isLoading = ref(false);

const labelClass = computed(() => {
  return props.variant === 'modal'
    ? 'block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono'
    : 'block text-[11px] font-semibold text-neutral-500 mb-1.5 ml-1 uppercase tracking-wider';
});

const inputClass = computed(() => {
  return props.variant === 'modal'
    ? 'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200'
    : 'w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#00a5c5] transition-colors';
});

const buttonClass = computed(() => {
  return props.variant === 'modal'
    ? 'flex w-full items-center justify-center gap-2 rounded-xl bg-black hover:bg-[#1ca3c4] py-3.5 text-sm text-white shadow-lg shadow-[#1ca3c4]/10 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 font-poppins font-medium lowercase'
    : 'w-full bg-black hover:bg-[#00a5c5] text-white font-poppins text-sm py-3.5 rounded-full transition-colors shadow-sm font-medium lowercase cursor-pointer flex justify-center items-center h-[52px]';
});

const handleSubmit = async () => {
  if (!fullName.value || !email.value) return;

  isLoading.value = true;
  
  try {
    await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: {
        access_key: 'e4e9c81b-a340-4967-be21-9671338ae6d7',
        subject: `New Lead: ${service.value} from ${fullName.value}`,
        name: fullName.value,
        phone: phone.value,
        email: email.value,
        service: service.value,
        message: message.value
      }
    });

    emit('success', {
      name: fullName.value,
      phone: phone.value,
      email: email.value,
      service: service.value,
      message: message.value
    });
    
    // Clear form only on page variant since modal resets on close
    if (props.variant === 'page') {
      fullName.value = '';
      phone.value = '';
      email.value = '';
      service.value = 'Select a service';
      message.value = '';
      alert('Your request has been successfully submitted! We will be in touch shortly.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('There was an error sending your message. Please check your network and try again.');
  } finally {
    isLoading.value = false;
  }
};
</script>
