
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const express = require("express");

const { response } = require("express");

const app = express()

app.get("/getItems", async(req, res) => {
    try {
        const data = await prisma.printed.findMany()
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json({data})
    } catch(err) {
        console.log(err)
    }
    
})


app.listen(3001, ()=> {
    console.log("running server")
})


