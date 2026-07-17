<template>
  <div class="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-600/30 selection:text-blue-200 antialiased overflow-x-clip">
    <Noscript>
      <iframe :src="`https://www.googletagmanager.com/ns.html?id=${$config.public.gtmId}`" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </Noscript>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
