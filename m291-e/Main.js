import { createApp } from 'vue' 
import App from './App.vue' 
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css' 

createApp(App) 
  .use(bootstrap) 
  .mount('#app') 


zielListe: [
    {id:1, inhalt:'CSS Animationen lernen'},
    {id:2, inhalt:'Vue lernen'}

],
zielEingabe: '',
zielSelect: '';