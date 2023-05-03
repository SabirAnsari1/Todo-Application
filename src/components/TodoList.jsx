import React from "react";
import { VStack, StackDivider, Badge, Spacer } from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdate = (id, value) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: value } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <AddTodo addTodo={handleAdd} />
      <Spacer />
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="4"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
        alignItems="stretch"
      >
        {todos.length > 0 ? (
          todos?.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={handleDelete}
              updateTodo={handleUpdate}
            />
          ))
        ) : (
          <Badge
            colorScheme="green"
            p="4"
            m="4"
            borderRadius="lg"
            alignSelf="center"
          >
            No Todo Available
          </Badge>
        )}
      </VStack>
    </>
  );
};

export default TodoList;
