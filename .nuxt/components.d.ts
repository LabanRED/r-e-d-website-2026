
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const NotFound: typeof import("../src/components/NotFound.vue")['default']
export const CareerForm: typeof import("../src/components/forms/CareerForm.vue")['default']
export const ContactForm: typeof import("../src/components/forms/ContactForm.vue")['default']
export const Footer: typeof import("../src/components/header-footer/Footer.vue")['default']
export const Navbar: typeof import("../src/components/header-footer/Navbar.vue")['default']
export const AnimatedCounter: typeof import("../src/components/unsorted/AnimatedCounter.vue")['default']
export const EstablishPresence: typeof import("../src/components/unsorted/EstablishPresence.vue")['default']
export const FeatureRow: typeof import("../src/components/unsorted/FeatureRow.vue")['default']
export const Hero: typeof import("../src/components/unsorted/Hero.vue")['default']
export const InteractiveContactModal: typeof import("../src/components/unsorted/InteractiveContactModal.vue")['default']
export const LogoCarousel: typeof import("../src/components/unsorted/LogoCarousel.vue")['default']
export const Partnerships: typeof import("../src/components/unsorted/Partnerships.vue")['default']
export const RedProcess: typeof import("../src/components/unsorted/RedProcess.vue")['default']
export const ServicesGrid: typeof import("../src/components/unsorted/ServicesGrid.vue")['default']
export const StatsBar: typeof import("../src/components/unsorted/StatsBar.vue")['default']
export const Testimonials: typeof import("../src/components/unsorted/Testimonials.vue")['default']
export const TwoColumnAbout: typeof import("../src/components/unsorted/TwoColumnAbout.vue")['default']
export const WhatsAppButton: typeof import("../src/components/unsorted/WhatsAppButton.vue")['default']
export const WhyUs: typeof import("../src/components/unsorted/WhyUs.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Motion: typeof import("@vueuse/motion")['MotionComponent']
export const MotionGroup: typeof import("@vueuse/motion")['MotionGroupComponent']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNotFound: LazyComponent<typeof import("../src/components/NotFound.vue")['default']>
export const LazyCareerForm: LazyComponent<typeof import("../src/components/forms/CareerForm.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../src/components/forms/ContactForm.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../src/components/header-footer/Footer.vue")['default']>
export const LazyNavbar: LazyComponent<typeof import("../src/components/header-footer/Navbar.vue")['default']>
export const LazyAnimatedCounter: LazyComponent<typeof import("../src/components/unsorted/AnimatedCounter.vue")['default']>
export const LazyEstablishPresence: LazyComponent<typeof import("../src/components/unsorted/EstablishPresence.vue")['default']>
export const LazyFeatureRow: LazyComponent<typeof import("../src/components/unsorted/FeatureRow.vue")['default']>
export const LazyHero: LazyComponent<typeof import("../src/components/unsorted/Hero.vue")['default']>
export const LazyInteractiveContactModal: LazyComponent<typeof import("../src/components/unsorted/InteractiveContactModal.vue")['default']>
export const LazyLogoCarousel: LazyComponent<typeof import("../src/components/unsorted/LogoCarousel.vue")['default']>
export const LazyPartnerships: LazyComponent<typeof import("../src/components/unsorted/Partnerships.vue")['default']>
export const LazyRedProcess: LazyComponent<typeof import("../src/components/unsorted/RedProcess.vue")['default']>
export const LazyServicesGrid: LazyComponent<typeof import("../src/components/unsorted/ServicesGrid.vue")['default']>
export const LazyStatsBar: LazyComponent<typeof import("../src/components/unsorted/StatsBar.vue")['default']>
export const LazyTestimonials: LazyComponent<typeof import("../src/components/unsorted/Testimonials.vue")['default']>
export const LazyTwoColumnAbout: LazyComponent<typeof import("../src/components/unsorted/TwoColumnAbout.vue")['default']>
export const LazyWhatsAppButton: LazyComponent<typeof import("../src/components/unsorted/WhatsAppButton.vue")['default']>
export const LazyWhyUs: LazyComponent<typeof import("../src/components/unsorted/WhyUs.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyMotion: LazyComponent<typeof import("@vueuse/motion")['MotionComponent']>
export const LazyMotionGroup: LazyComponent<typeof import("@vueuse/motion")['MotionGroupComponent']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
