import Vue from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'


import './form'


import { router } from './router'


import './axios'

// Realizar un desarrollo web front-end empleando Vue CLI que presente las siguientes vistas
// manejadas por un router, seleccionadas desde una barra de navegación: ESTO ESTA
// 1) Un formulario basado en vue-form que contenga 3 campos: nombre, edad e email. Este debe
// tener validaciones mediante carteles de: campos requeridos, nombre entre 5 y 15 caracteres, edad
// entre 18 y 120 años e email válido. Los datos válidos ingresados por el formulario, se deben
// representar en un tabla por debajo del mismo, en el mismo momento del ingreso.
// 2) Realizar un componente que pida los objetos almacenados en un recurso de mockapi.io llamado
// usuarios, que contengan datos aleatorios con las claves: nombre, email y número de teléfono. Se
// representarán en una tabla en la vista.
// Para la comunicación con mockapi.io utilizar XMLHttpRequest, fetch y axios.
// Utilizar Bootstrap 4 como framework css del sitio.

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
