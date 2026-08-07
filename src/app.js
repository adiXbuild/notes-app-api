// To create server  ---> app.js 

const express = require("express");

//const noteModel = require();

const app = express();

const notes = [];
app.use(express.json()); /*middleware --> function that runs between receiving a request 
                                from the client and sending a response from the server.*/

/*

APIs to be created...
1) POST/notes => create a note
2) GET/notes => fetch a note
3) DELETE/notes/:id => delete a note
4) PATCH/notes/:id => update a note
*/

// use of all the api to send request and get the response...

// GET API...
app.get("/notes",(req,res)=>{

    res.status(200).json({   //status() is a method of the res object.It sets the HTTP status code of the response
        message : " notes fetched succesfully", // message is just a property name (key) that you chose.
        notes : notes
    })
});

app.get("/about", (req,res)=>{    // if the url will be htttp://localhost:3000/about then this will work..
    res.send("you are in about section"); // this will be seen in the browser
});

//POST API...
app.post("/notes",(req,res)=>{

    notes.push(req.body)      // for this we used the middleware

    res.status(201).json({
        message : "note created successfully"
    })
});

//DELETE API... 
//  delete/notes/:index    -------> here ":" is dynamic, thus it is considered as 'params'.

app.delete("/notes/:index", (req,res)=>{
    const index = req.params.index;   // to get the index of the note
    delete notes[index];              // to delete the particular index
    res.status(200).json({
        message : "notes deleted succesfully"
    })

});

//  PATCH API...    

app.patch("/notes/:index", (req,res)=>{
    const index = req.params.index;
    const description = req.body.description;     

    notes [index].description = description;

    res.status(200).json({
        message : "note updated succesfully"
    })

})

module.exports = app; // this put in last always!! good practice!!