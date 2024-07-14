

  const fs = require("fs")

  const loadInfo = () => {
    try { 
        const dataJson = fs.readFileSync("d.json").toString()
        return  JSON.parse(dataJson)
    }
    catch {
        return []
    }
     
  }


  
  const savealldata = (Data) => {
    const saveallDataJson  = JSON.stringify(Data)
    fs.writeFileSync("d.json" , saveallDataJson)
 }


  const addPerson = (id ,FirstName ,SecondName , City , Age) => {
       const Data = loadInfo()

       const duplicatedData = Data.filter((obj) =>{
          return  obj.id === id 
       })

        if (duplicatedData.length == 0  ){

       Data.push({
         id : id,
         FirstName : FirstName,
         SecondName : SecondName,
         City : City,
         Age : Age
       })
       savealldata(Data)
      } 
      
      else {
        console.log("ERROR DUPLICATED")
      }
  }


   const deleteData  = (id) =>{
      const Data = loadInfo()

       const dataTokeep = Data.filter((obj) => {
          return obj.id !== id
       })

       console.log(dataTokeep)
       console.log("you have successfully deleted an item")

       savealldata(dataTokeep)
      
   }

 

    const readData = (id) => {
        const Data = loadInfo()

        const itemNeeded = Data.find((obj) => {
           return  obj.id == id 
        })

        console.log(itemNeeded)

        if (itemNeeded) {
          console.log(itemNeeded)
        }else {
          console.log("ID NEEDED NOT FOUND")
        }
    }
  


          const listData = () => {
             const  Data = loadInfo()

              Data.forEach((obj) => {
                console.log(obj.FirstName ,obj.SecondName, obj.City, obj.Age)
              })

          }
       

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}