<template>
<div class="container">
<column-chart 
:data="items" 
 ytitle="Clientes" 
 :colors="['#268fe6']" 
 xtitle="Marcas"
 width="450px" height="450px"
>
 </column-chart>

  <Grafico2/>
</div>
</template>

<script>
import axios from "axios"
import Grafico2 from "./Grafico2"

let url = "http://localhost:3030/api/stores";

export default {
name:'Grafico',
components:{
    Grafico2
},
data(){
return{
  items:[]
 }
 },
  created() {
    this.mostrar();
  },
  methods: {
    async mostrar() {
      let name=[]
      let team=[]

      console.log(name)
   try {
   let resp= await axios.get(url);
   
 for(var i=0; i< resp.data.length; i++){
      
      name.push([resp.data[i].nombre,parseInt(resp.data[i].clientes)]);     
 }
this.items=name
this.items.y=team
console.log(this.items,this.items2)
    
       
  } catch (error) {
   console.log(error)
   }}
}
}
</script>

<style>
.container{
 display: flex;
 flex-wrap: wrap;
 justify-content:space-around;

}
</style>