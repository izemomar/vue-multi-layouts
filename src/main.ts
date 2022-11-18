// path: src/main.ts

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import router from './router';

// line 1: import the registerLayouts function
import { registerLayouts } from './layouts/register';

const app = createApp(App);

app.use(router);

// line 2: Register layouts
registerLayouts(app);

app.use(vuetify);
app.mount('#app');
