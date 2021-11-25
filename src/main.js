import { createApp } from 'vue'
import AltihexDesignVue from "altihex-design"
import 'altihex-design/dist/altihex.css'

import app from './App'
app.use(AltihexDesignVue)

console.log(!23)

createApp(app).mount('#app')