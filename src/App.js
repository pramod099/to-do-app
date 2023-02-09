import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  const EMPTY = "";
  const [input, setInput] = useState(EMPTY);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input !== EMPTY) {
      setTodos([...todos, input]);
      setInput(EMPTY);
    }
  };

  const deleteTodo = (index) => {
    setTodos(
      todos.filter((todo, i) => {
        return index !== i;
      })
    );
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <center>
        <form>
          <TextField
            id="standard-basic"
            label="Fire away!!!"
            variant="standard"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" onClick={addTodo}>
            Add
          </Button>
        </form>
        <div className="todo-list">
          {todos.length !== 0 ? (
            todos.map((todo, index) => {
              return (
                <ListItem
                  className="list-item"
                  key={index}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteTodo(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={todo} />{" "}
                </ListItem>
              );
            })
          ) : (
            <div className="empty-message">Nothing to do...Enjoy!!!</div>
          )}
        </div>
      </center>
    </div>
  );
}

export default App;
