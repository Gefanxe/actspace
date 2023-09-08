// import type { Config } from 'tailwindcss';
import type { Config, Theme } from 'daisyui';

export default <Config>{
  daisyui: {
    themes: [
      'corporate',
      'dark',
      'cmyk',
    ] as Theme[],
  } as Config,
};
