import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontStyle="extraBold"
        size="2xl"
        bgGradient="linear(to-r, red.700, orange.300)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList />
    </VStack>
  );
}

export default App;
