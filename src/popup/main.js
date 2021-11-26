/*
 * @Author: migor
 * @Date: 2021-11-25 20:54:11
 * @LastEditors: migor
 * @LastEditTime: 2021-11-26 10:21:45
 * @Description: file content
 */
import { createApp } from 'vue'
import app from './components/app.vue'

import AltihexDesignVue from "altihex-design"
import 'altihex-design/dist/altihex.css'

createApp(app).use(AltihexDesignVue).mount('#app')
