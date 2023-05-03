import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      toast({
        title: "Please Fill Title!!!",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      status: false,
    };

    addTodo(newTodo);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button colorScheme="orange" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
