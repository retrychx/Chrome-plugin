/*
 * @Author: migor
 * @Date: 2021-11-25 20:53:09
 * @LastEditors: migor
 * @LastEditTime: 2021-11-25 21:35:33
 * @Description: file content
 */
import { createApp } from 'vue'
import app from './components/app.vue'

joinContent(app)
injectJsInsert()

function joinContent (element) {
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div)
	console.log(div)
	createApp(element).mount('#joinContentApp')
}

function injectJsInsert () {
	document.addEventListener('readystatechange', () => {
		const injectPath = 'js/inject.js'
		const script = document.createElement('script')

		script.setAttribute('type', 'text/javascript')
		script.src = chrome.extension.getURL(injectPath)
		document.body.appendChild(script)
	})
}

