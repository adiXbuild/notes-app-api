// To create server  ---> app.js 

const express = require("express");

const notemodel = require("./model/note.model");

const app = express();

const notes = [];
app.use(express.json()); /*middleware --> function that runs between receiving a request 
                                from the client and sending a response from the server.*/
// no data will come to request.body if middleware is not used!!!

/*

APIs to be created...
1) POST/notes => create a note
2) GET/notes => fetch a note
3) DELETE/notes/:id => delete a note
4) PATCH/notes/:id => update a note
*/

// use of all the api to send request and get the response...

// GET API...
app.get("/notes",async (req,res)=>{
    const notes = await notemodel.find() //find will always return an array []!!!
    res.status(200).json({   //status() is a method of the res object.It sets the HTTP status code of the response
        message : " notes fetched succesfully", // message is just a property name (key) that you chose.
        notes : notes
    })
});

app.get("/about", (req,res)=>{    // if the url will be htttp://localhost:3000/about then this will work..
    res.send("you are in about section"); // this will be seen in the browser
});

//POST API...
app.post("/notes",async (req,res)=>{
    const data = req.body // {title, description}
    await notemodel.create({
        title : data.title,
        description: data.description
    })
    res.status(201).json({
        message : "note created successfully"
    })
});

//DELETE API... 
//  delete/notes/:index    -------> here ":" is dynamic, thus it is considered as 'params'.

app.delete("/notes/:id", async (req,res)=>{
    const id = req.params.id;   // to get the index/id of the note
    //delete notes[id];         // to delete the particular index
    await notemodel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message : "notes deleted succesfully"
    })

});

//  PATCH API...    

app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id;
    const description = req.body.description;     
    await notemodel.findOneAndUpdate({_id: id},{description: description})
    // in findOneAndUpdate => we have two objects in which we have to select and in other update what is needed to.
    res.status(200).json({
        message : "note updated succesfully"
    })

})

module.exports = app; // this put in last always!! good practice!!