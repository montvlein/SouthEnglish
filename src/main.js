import '../css/colors.css'
import '../css/generals.css'
import '../css/style.css'

import { mount } from 'svelte'
import App from './App.svelte'

const app = mount(App, { target: document.getElementById('app') })

export default app
