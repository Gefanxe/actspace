import { presetDaisy } from 'unocss-preset-daisy';
import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
import { defineConfig } from 'unocss/vite';
import presetChinese from 'unocss-preset-chinese';
import presetEase from 'unocss-preset-ease';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetChinese(),
    presetEase(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),
    presetDaisy(),
    presetRemToPx(), // Rem 轉 pixel
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
