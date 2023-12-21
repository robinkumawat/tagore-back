import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
const connection = mongoose.connect("")
app.use(cors())

app.use(express.json())
app.use("/data",StudentRouter)
app.use("/admindata" , AdminRouter)
app.use("/StdRecod" , StudentRecordRouter)
app.use("/EmployeeRecord" , EmpolyeeRecordRouter)



connection.then(()=>{
    app.listen(8000,()=>console.log("Server has been started"))
     
}) 

.catch(()=>console.log(err))

