import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  redirects: {
    '/internet': 'https://ccalobeto.github.io/cobertura_internet/',
    'hi': 'blog'
  }
});