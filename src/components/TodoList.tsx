import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { SetTodosType, TodosType, toggleTodo, updateTodo, removeTodo } from "../store";

function TodoListItems(
  {todos, setTodos} : {todos: TodosType, setTodos: SetTodosType
  }) {

const changeTodo = (id: number) => {
  setTodos(toggleTodo(todos, id))
  console.log(todos)
} //this confirms state is updating

//  console.log('Todos right now', todos)   
 //this seems to not update
  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
          onClick={() => changeTodo(todo.id)} />
          <Input mx={2} value={todo.text}
          onChange={(event) => setTodos(updateTodo(todos, todo.id, event.target.value))} />
          <Button
          onClick={() => setTodos(removeTodo(todos, todo.id))}
          >Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList({todos, setTodos} : {todos: TodosType, setTodos: SetTodosType}) {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;
