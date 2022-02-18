const express = require('express')
const data = require("./data.js");
const app = express()
const {MongoClient} = require('mongodb')
app.use(express.json())
const dbUrl = 'mongodb+srv://shalinijhajharia:Shalini1234@shalinicluster.oqii7.mongodb.net/quizStage2?retryWrites=true&w=majority'

app.get('/', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    try{
      
        res.json({
            message: 'Connected Successfully',

        })
    }
    catch(err)
    {
        console.log(err)
    }
    finally{
        client.close()
    }
})

app.get('/insert',async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    try{
        let db = await client.db('quiz');
        var collection_status = {};
        const questions = db.collection("questions");
        const options = db.collection("options");
        const answers = db.collection("answers");
        for (var [key, value] of Object.entries(data)) {
            const result = await eval(key).insertMany(value, { ordered: true });
            if(result){collection_status[key] = true}
            else{collection_status[key] = false}
           
        }
        res.json(collection_status);
       
    }
    catch(err)
    {
        console.log(err)
    }
    finally{
        client.close()
    }
})

app.get('/search/:collection/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
        const Id = parseInt(req.params.id)

    try {
        
        const db = await client.db("quiz");
        const table = db.collection(req.params.collection);
        const result =await table.findOne({id:Id});
        if(result){
            res.json({
                message: "Record is found",
                result
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.put('/update/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)//1
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection("questions").findOneAndUpdate({id: Id},{$set:{question: req.body.question}});
        if(record){
            res.json({
                message: "Record is updated",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {
        await client.close();
    }
})

app.delete('/delete/:collection/:id', async function(req,res){
    const client = await MongoClient.connect(dbUrl)
    const Id = parseInt(req.params.id)
    try {
        const db = client.db("quiz");
        const record =await db.collection(req.params,collection).deleteOne({id: Id});
        if(record){
            res.json({
                message: "Record is deleted",
            });
        }else{
            res.json({
                message: "Record not found"
            });
        }
    }catch (error){
        console.log(error)
    }finally {

        await client.close();

    }
})


app.listen(5000,()=>console.log('Server running on Port 5000'))