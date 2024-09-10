import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
/*Import all prime vue components*/
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Rating from 'primevue/rating';


const app = createApp(App);
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
});


// Register all components before mount #app
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar);
app.component('pv-card', Card);
app.component('pv-rating', Rating);


app.mount('#app');