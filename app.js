 

    const fs = require("fs")

    

 


   const  validator = require("validator")

   const  yargs = require("yargs")


   yargs.command({
       command : "add" ,
       describe : " to add an item",
       handler : ()=> {
          console.log("you have already added an item")
       }
   })

   

   const d = require("./d")
const { type } = require("os")

    yargs.command({
       command : "add" ,
       describe : " to add an item",
       builder : {
         FirstName: {
            describe :"this is the first name desc in add command",
            demandOption : true ,
            type : "string"
         },
         SecondName: {
            describe :"this is the last name desc in add command",
            demandOption : true ,
            type : "string"
         }
     
       },
       handler :(x)=> {
     
         d.addPerson(x.id , x.FirstName , x.SecondName , x.City , x.Age)


       }
   })




   yargs.command(
      {
      command : "delete",
      describe: "to delete an item",
      handler : (x)=> {
        
         d.deleteData(x.id)
      }
   })



   yargs.command ({
      command : "read",
      describe : "to read an item",
      builder : {
         id : {
            describe : "this is id desc in read command ",
            demandOption : true,
            type: "string"
         }
      },
      handler: (x) => {
         d.readData(x.id)
      }

   })



   yargs.command ({
      command : "list",
      describe : "to list data",
      handler : () =>{
         d.listData()
      }
   })

   yargs.parse()

