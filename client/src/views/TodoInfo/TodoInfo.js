import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdKeyboardReturn } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import Api from "../../services/Api";

export const TodoInfo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);

  async function fetch() {
    const todo = await Api.getTodo(id);
    setTodo(todo);
  }

  async function deleteTodo() {
    await Api.deleteTodo(id);
    window.location.href = "/";
  }

  useEffect(() => {
    fetch();
  }, []);

  console.log(todo);

  return (
    <Box>
      <Flex wrap="wrap" padding="2">
        <Heading size="md">{String(todo.createdAt).slice(0, 10)}</Heading>
        <Header text="Task" />

        <Link to="/">
          <MdKeyboardReturn size={50} color="" />
        </Link>
      </Flex>
      <Grid justifyItems="center">
        <Heading>{String(todo.todo_title)}</Heading>
        <Container padding="5">{todo.todo_description}</Container>
        <Button bg="brand.btn" padding="5" onClick={deleteTodo}>
          Delete
        </Button>
      </Grid>
    </Box>
  );
};
