import { navigateTo } from '#app';
import { useState } from '#app';

export const useModal = () => {
  const isModalOpen = useState('isModalOpen', () => false);

  const openModal = async (serviceName?: string) => {
    if (serviceName && typeof serviceName === 'string') {
      await navigateTo({ path: '/contact', query: { service: serviceName }, hash: '#contact-form' });
    } else {
      await navigateTo({ path: '/contact', hash: '#contact-form' });
    }
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
