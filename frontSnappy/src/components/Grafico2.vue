<template>
<div class="container">
<pie-chart 
:data="items" 
 ytitle="Clientes" 
 :colors="['red','blue','orange','lightgreen','brown','purple']" 
 xtitle="Marcas"
 width="400px" height="400px"
 suffix="%"
>
 </pie-chart>

  
</div>
</template>

<script>
import axios from "axios"

let url = "http://localhost:3030/api/stores";

export default {
name:'Grafico2',

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
      let satisfaction=[]

      console.log(name)
   try {
   let resp= await axios.get(url);
   
 for(var i=0; i< resp.data.length; i++){
      
      name.push([resp.data[i].nombre,parseInt(resp.data[i].satisfaccion)]);     
 }
this.items=name
this.items.y=satisfaction
console.log(this.items,this.items2)
    
       
  } catch (error) {
   console.log(error)
   }}
}
}
</script>

<style>
.grafico{
 width: 90px;
}
</style>

