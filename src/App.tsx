import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { Todo, useTodos } from "./store";

export function App() {

  const [todos, setTodos] = React.useState<Todo[]>([]);
  
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <TodoAdd todos={todos} setTodos={setTodos}/>
      </Box>
    </ChakraProvider>
  );
}
