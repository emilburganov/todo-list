import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({
    plugins: [
        vue(),
    ],
    loaderOptions: {
        sass: {
            additionalData: `@import "@/assets/scss/style.scss";`,
        },
    },
}));


