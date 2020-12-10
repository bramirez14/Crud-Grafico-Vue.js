const fs = require('fs')
const path = require('path');

let teamsJson = path.join(__dirname,'../data/teams.json');
let arrayTeams= JSON.parse(fs.readFileSync(teamsJson, 'utf-8')|| "[]");

let long= arrayTeams[arrayTeams.length - 1].id;

const controller = {

    list:(req,res)=>res.json(arrayTeams),
    create:(req,res)=>{
        let { nombre,stores}= req.body
        let teamCreado = {
            id:arrayTeams==""?1:long + 1,
            nombre,
            stores
            
        }
        
          arrayTeams = [...arrayTeams,teamCreado];
       
        fs.writeFileSync(teamsJson,JSON.stringify(arrayTeams))
        res.json('ok')
    },
    edit:(req,res)=>{
        let id = req.params.id;
        console.log(id)
        let { nombre,stores }= req.body 
        console.log(req.body)  
        console.log(arrayTeams)
         arrayTeams.map((teamEdited)=>{
              if(teamEdited.id==id){
                teamEdited.nombre= nombre
                teamEdited.stores=stores
            }
          })
          fs.writeFileSync(teamsJson,JSON.stringify(arrayTeams))
          res.json('ok')
            
    },
    delete:(req,res)=>{
        let {id} = req.params;
        let teamsAborrar= arrayTeams.findIndex(arrayTeam =>  arrayTeam.id==id) 
         arrayTeams.splice(teamsAborrar,1)
        let deleteJson= JSON.stringify(arrayTeams)
        fs.writeFileSync(teamsJson,deleteJson)
        res.json('ok') 
        
       },
}


module.exports = controller;
