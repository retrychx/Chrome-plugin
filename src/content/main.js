/*
 * @Author: migor
 * @Date: 2021-11-25 20:53:09
 * @LastEditors: migor
 * @LastEditTime: 2021-11-25 20:59:38
 * @Description: file content
 */
import { createApp } from 'vue'
import app from './components/app.vue'

joinContent(app)

function joinContent (element) {
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div)
	console.log(div)
	createApp(element).mount('#joinContentApp')
}
