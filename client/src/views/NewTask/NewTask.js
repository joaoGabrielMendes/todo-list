import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { MdKeyboardReturn } from "react-icons/md";
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import Api from "../../services/Api";
import { Link } from "react-router-dom";

export const Newtask = () => {
  const [todoTodoInfo, setTodoInfo] = useState({
    todo_title: "",
    todo_description: "...",
    todo_status: 0,
  });

  const handleChange = (event) => {
    setTodoInfo({ ...todoTodoInfo, [event.target.name]: event.target.value });
  };

  async function createTodo() {
    await Api.createTodo(todoTodoInfo);
    window.location.href = "/";
  }

  return (
    <Box>
      <Header text="new Task" />
      <Box padding="5">
        <FormControl display="grid" gap="1" padding="2">
          <FormLabel>Task</FormLabel>
          <Input type="text" name="todo_title" onChange={handleChange} />

          <FormLabel>Description</FormLabel>
          <Input type="text" name="todo_description" onChange={handleChange} />

          <RadioGroup name="todo_status" defaultValue="0">
            <Stack direction="row">
              <Radio onChange={handleChange} value="1">
                complete
              </Radio>
              <Radio onChange={handleChange} value="0">
                incomplete
              </Radio>
            </Stack>
          </RadioGroup>

          <Button bg="brand.btn" onClick={createTodo}>
            create
          </Button>
        </FormControl>
      </Box>
      <Box position="fixed" top="6" right="3" padding="2">
        <Link to="/">
          <MdKeyboardReturn size={50} />
        </Link>
      </Box>
    </Box>
  );
};
