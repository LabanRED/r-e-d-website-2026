<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <div>
      <label for="name" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Name</label>
      <input
        type="text"
        id="name"
        v-model="applicantName"
        required
        class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
        placeholder="Jane Doe"
      />
    </div>

    <div>
      <label for="email" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
        placeholder="jane@example.com"
      />
    </div>

    <div>
      <label for="portfolio" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Portfolio / LinkedIn URL</label>
      <input
        type="url"
        id="portfolio"
        v-model="portfolio"
        class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors"
        placeholder="https://"
      />
    </div>

    <div>
      <label for="motivation" class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Motivational letter</label>
      <textarea
        id="motivation"
        rows="4"
        v-model="motivation"
        class="w-full bg-[#f8f8f8] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-300 transition-colors resize-none"
        placeholder="Tell us why you are a great fit..."
      ></textarea>
    </div>

    <div>
      <label class="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">Resume upload</label>
      <div class="relative w-full bg-[#f8f8f8] border-2 border-dashed border-neutral-200 rounded-xl p-6 hover:bg-neutral-50 transition-colors cursor-pointer group">
        <input
          type="file"
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          @change="handleFileChange"
          accept=".pdf,.doc,.docx"
        />
        <div class="flex flex-col items-center justify-center text-center gap-2">
          <Upload class="w-5 h-5 text-neutral-400 group-hover:text-[#00a5c5] transition-colors" />
          <template v-if="fileName">
            <span class="text-sm font-medium text-[#00a5c5] truncate max-w-full px-4">{{ fileName }}</span>
          </template>
          <template v-else>
            <span class="text-sm font-medium text-neutral-600">
              <span class="text-[#00a5c5]">Click to upload</span> or drag and drop
            </span>
            <span class="text-xs text-neutral-400">PDF, DOC up to 5MB</span>
          </template>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-black hover:bg-[#00a5c5] text-white font-poppins text-sm py-3.5 rounded-full transition-colors shadow-sm font-medium lowercase cursor-pointer flex items-center justify-center h-[52px]"
      >
        <div v-if="isLoading" class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        <span v-else>Submit Application</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Upload } from 'lucide-vue-next';

const emit = defineEmits(['success']);

const applicantName = ref('');
const email = ref('');
const portfolio = ref('');
const motivation = ref('');
const fileName = ref('');
const file = ref<File | null>(null);
const isLoading = ref(false);

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    fileName.value = target.files[0].name;
    file.value = target.files[0];
  } else {
    fileName.value = '';
    file.value = null;
  }
};

const handleSubmit = async () => {
  if (!applicantName.value || !email.value) return;

  isLoading.value = true;
  
  try {
    const formData = new FormData();
    formData.append('access_key', 'e4e9c81b-a340-4967-be21-9671338ae6d7');
    formData.append('subject', `New Career Application from ${applicantName.value}`);
    formData.append('name', applicantName.value);
    formData.append('email', email.value);
    formData.append('portfolio', portfolio.value);
    formData.append('motivation', motivation.value);
    if (file.value) {
      formData.append('attachment', file.value);
    }

    await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    emit('success', {
      name: applicantName.value,
      email: email.value,
      portfolio: portfolio.value,
      motivation: motivation.value,
      file: file.value
    });
    
    // Clear form
    applicantName.value = '';
    email.value = '';
    portfolio.value = '';
    motivation.value = '';
    fileName.value = '';
    file.value = null;
    
    alert('Your application has been successfully submitted! We will review it and get back to you.');
  } catch (error) {
    console.error('Submission error:', error);
    alert('There was an error sending your application. Please check your network and try again.');
  } finally {
    isLoading.value = false;
  }
};
</script>
