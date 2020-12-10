<template>
  <div>
    <!-- Nav -->
    <div class="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <h1 class="navbar-item">
            MY TEAMS
          </h1>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <button class="but butto" @click.prevent="formNew()">
              Add Team
            </button>
          </div>
        </div>
      </nav>
    </div>
    <!-- fin Nav -->

    <!-- Table-->
<table id="tabla" class=" table is-fullwidth ">
      <thead>
        <tr>
          <th id="teams">Teams</th>
          <th id="stores">Stores</th>
          <th></th>
          <th></th>


        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id"  slot="detail">
          <td id="item">{{ item.nombre }}</td>
          <td id="st"><div class='stores'>{{ item.stores }}</div></td>
          <td class="editar">
            <em
              class="fas fa-pencil-alt "
              @click.prevent="formUpdate(item.id, item.nombre, item.stores)"
            ></em>
          </td>
          <td class="borrar"><em class="fas fa-trash-alt" @click.prevent="borrar(item.id)"></em></td>
        </tr>
      </tbody>
    </table>
    <!-- fin Table-->

    <!-- button -->
    <div v-if="modal" class="modal is-active">
      <div class="modal-background"></div>
      <form class="form">
        <!-- Any other Bulma elements you want -->
        <label class="lb">Agregar equipo</label>
        <input v-model="equipo.id" />
        <input
          class="input is-rounded"
          type="text"
          placeholder="Nombre"
          v-model="equipo.nombre"
        />
        <input
          class="input is-rounded"
          type="text"
          placeholder="Stores"
          v-model="equipo.stores"
        />
        <button class="square_btn" @click.prevent="save()" type="submit">
          Guardar
        </button>
      </form>

      <button
        class="modal-close is-large "
        @click="modal = false"
        aria-label="close"
      ></button>
    </div>
    <!-- fin button -->
  </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'

let url = "http://localhost:3030/api/teams";
export default {
  name: "Crud",

  data() {
    return {
      operation: "",
      modal: false,
      items: [],
      equipo: {
        id: "",
        nombre: "",
        stores: "",
      },
    };
  },

  created() {
    this.mostrar();
  },
  methods: {
    async mostrar() {
   try {
   let resp= await axios.get(url);
              this.items = resp.data;
  } catch (error) {
   console.log(error)
   }},

 async create() {
try{
let parametros = {
  nombre: this.equipo.nombre,
  stores: this.equipo.stores,
};
let resp = await axios.post("http://localhost:3030/api/create", parametros)
    console.log(resp.data);
    this.modal=false;
    this.mostrar();
} catch(error) {
   console.log(error)
   }
},
async update() {
try {
  let {nombre,stores,id} = this.equipo;
  let parametros = {nombre,stores,id};
  await axios.put(`http://localhost:3030/api/edit/${this.equipo.id}`, parametros)
          this.modal=false
          this.mostrar();
} catch(error) {
   console.log(error)
   }
},
async borrar(id) {

  console.log(id)

  Swal.fire({
  title: 'Estas seguro/a?',
  text: "No podras recuperar los datos borrados!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Borrar!'
}).then((result) => {
  if (result.isConfirmed) {
         axios.delete(`http://localhost:3030/api/delete/${id}`)
        this.mostrar();
    Swal.fire(
      'Borrado!',
      'Tu archivo fue borrado con exito',
      
    )
  }
})
    
          
        },
    
    save() {
      this.operation=='create'?this.create():this.modal=false
      this.operation=='update'?this.update():this.modal=false
    },
    formNew() {
      this.modal = true;
      this.operation = "create";
      this.equipo.nombre = "";
      this.equipo.stores = "";
    },
    formUpdate(id,nombre,stores) {
      this.equipo.id = id;
      this.equipo.nombre = nombre;
      this.equipo.stores = stores;
      this.modal = true;
      this.operation = "update";
    }
  }
};
</script>

<style>

#teams {
  text-align: start;
  padding-left: 40px;
}
#item{
  text-align: start;
  padding-left: 40px;
}
#st{
  width:50px    
}
.stores{
  background: #268fe6;
  width: 32px; 
  height: 22px; 
  border:  #268fe6;
  border-radius: 2px;
  color:white;
  margin-left:104px;
  margin-right:100px;
 
  }
.editar {
  width:50px
}
 
.borrar{ width:50px}
#store{  text-align: center;
}

#tabla {
  width: 98%;
margin-left: 15px;
}

.nav {
  width: 98%;
  margin-left: 15px;
}

.but {
  background: #70f4ff;
  color: white;
  height: 40px;
  font-size: 15px;
  width: 120px;
  border-radius: 6px;
  border: #70f4ff;
}
.form {
  display: flex;
  flex-direction: column;
  margin-top: 10p;
}
.input {
  margin: 10px;
}

.lb {
  z-index: 3;
  color: white;
}

.square_btn {
  width: 100px;
  margin-left: 100px;
  z-index: 3;
  background: #70f4ff;
  padding: 7px 20px;
  border-radius: 25px;
  border: #70f4ff;
  outline: none;
}
.square_btn:hover {
  background-image: -webkit-linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
  background-image: linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
}
</style>
