// packages/demo/src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { MyComponent } from '@nicolascribbles/sketchbook-ui-library';

createApp(App).component('MyComponent', MyComponent).mount('#app');
