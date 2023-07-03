import React from "react";
import {
  HStack,
  Text,
  IconButton,
  Button,
  Grid,
  Center,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ id, title, status, deleteTodo, updateTodo }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" justifyContent="space-between" key={id}>
      <Text>{title}</Text>
      <Center>
        {status ? (
          <Button onClick={() => updateTodo(id, !status)}>Completed</Button>
        ) : (
          <Button onClick={() => updateTodo(id, !status)}>Pending</Button>
        )}
      </Center>
      <InputGroup>
        <InputRightElement>
          <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTodo(id)} />
        </InputRightElement>
      </InputGroup>
    </Grid>
  );
};

export default TodoItem;
