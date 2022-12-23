import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { SetTodosType, addTodo, TodosType } from "../store";

function TodoAdd({todos, setTodos}: {todos: TodosType, setTodos: SetTodosType}) {
  const [newTodo, newTodoSet] = React.useState("")
  // console.log(newTodo)

  const addNewTodo = (newTodo: string) => {
    setTodos(addTodo(todos, newTodo))
    newTodoSet("")
  }

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" value={newTodo} onChange={(event)=> newTodoSet(event.target.value)} />
      <Button onClick={() => addNewTodo(newTodo)}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
