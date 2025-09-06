import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger);
});
