const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes//


//create a todo

app.post('/todos',async(req,res)=>{

    try {
          const {description} = req.body;
          const newTodo = await pool.query
          ("INSERT INTO todo (description) VALUES($1) RETURNING *",
          [description]);
          console.log(description)
          res.json(newTodo.rows)
    } catch (error) {
        console.error(error.message)
    }
})



// get all todo

app.get("/todos",async(req,res)=>{

    try {

        const alltodos = await pool.query("SELECT*FROM todo");
        res.json(alltodos.rows);
        
    } catch (error) {
        
    }
})

// get a todo

app.get("/todos/:id",async(req,res)=>{
      
    try {
        
        const {id} = req.params;
        const todo = await pool.query
        ("SELECT * FROM TODO WHERE todo_id = $1",[id])

        res.json(todo.rows[0]);

    } catch (error) {
        
    }
})

// update a todo 

app.put("/todos/:id",async(req,res)=>{
    try {
        
        const {id} = req.params;
        const {description} = req.body;

        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2"
            ,[description,id]
        )

        res.json("todo was updated");

    } catch (error) {
        
    }
})
//delete a todo

app.delete("/todos/:id",async(req,res)=>{

    const {id} = req.params;

    const deleteTodo = await pool.query
    ( 
      "DELETE FROM todo WHERE todo_id = $1",
      [id]
    )

    res.json("todo deleted")

})

// printing random message 
app.listen(5000,()=>{
    console.log("server has started on port 5000")
})