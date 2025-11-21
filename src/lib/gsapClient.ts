import { gsap } from 'gsap';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap };