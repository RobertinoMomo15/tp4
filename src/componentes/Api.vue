<template>

  <section class="src-componentes-api">
    <div class="jumbotron">
      <h2>Api</h2>
      <hr>
      <hr>
      <br>
      



      <button class="btn btn-success my-3 mr-3" @click="getUsuariosXHR()">Pedir XHR</button>
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosFetch()">Pedir Fetch </button>
      <button class="btn btn-success my-3 mr-3" @click="getUsuarios()">Pedir Axios </button>
      <button class="btn btn-danger my-3" @click="usuarios=[]">CLEAR</button>
      
      <div class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Index</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
        </tr>
        <tr v-for="(dato, index) in usuarios" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ dato.nombre }}</td>
          <td>{{ dato.email }}</td>
          <td>{{ dato.telefono }}</td>
        </tr>
      </table>

    </div>



    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-api',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://628c1893a3fd714fd02ca6ab.mockapi.io/usuarios',
        usuarios: []
      }
    },
    methods: {

      async getUsuarios() {
        try {
          let { data: usuarios } = await this.axios(this.url)
          console.log('AXIOS GET usuarios', usuarios)
          this.usuarios = usuarios
        }
        catch(error) {
          console.error('Error en getUsuarios()', error.message)
        }
      },

      async getUsuariosFetch() {
        try {
          let response = await fetch(this.url)
          //console.log(response)
          let respuesta = await response.json()
          this.usuarios = respuesta
        }
        catch(error) {
          console.error('Error Fetch', error)
        }
      },

      async getUsuariosXHR() {
        try {
            let respuesta = await this.wrapperXHRpromise()
            //console.log(respuesta)
            this.usuarios = respuesta
          }
          catch(error) {
            console.error('Error XHRpromise', error)
          }
      },

      wrapperXHRpromise() {
        return new Promise((resolve,reject) => {
         
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)

          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              //console.log(respuesta)
              resolve(respuesta)
            }
            else {
              console.error('ERROR XHR cb (status)', xhr.status)
              let error = {
                title: 'ERROR XHR cb (status)',
                status: xhr.status
              }
              reject(error)
            }
          })

          xhr.addEventListener('error', e => {
              console.error('ERROR XHR cb (ajax)', e)
              let error = {
                title: 'ERROR XHR cb (ajax)',
                info: e
              }
              reject(error)
          })

          xhr.send()
        })
      }

        

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-api-rest-ful {

  }

  .jumbotron {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4ddb4+0,83c783+17,52b152+33,008a00+67,005700+83,002400+100;Green+3D+%231 */
    background: #b4ddb4; /* Old browsers */
    background: -moz-linear-gradient(left,  #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=1 ); /* IE6-9 */

    color: #222;
  }

  hr {
    background-color: #ddd;
  }

  pre {
    color: #333;
  }

</style>
