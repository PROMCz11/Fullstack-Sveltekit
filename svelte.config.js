// import cloudflare from '@sveltejs/adapter-cloudflare';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: cloudflare()
// 	}
// };

// export default config;


import adapter from '@sveltejs/adapter-cloudflare';

export default {
  kit: {
    adapter: adapter(),
    env: {
      dir: process.cwd()
    }
  }
};