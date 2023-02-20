import { Box, Heading, Button, Center, Grid } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Todo } from "../../components/Todo/Todo";
import { IoMdAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import Api from "../../services/Api";
import { Link } from "react-router-dom";

export const Home = () => {
  const [todos, setTodos] = useState([]);

  async function fetch() {
    const todos = await Api.getAllTodos();
    setTodos(todos);
  }

  async function deleteAllTodos() {
    await Api.deleteAllTodos();
    window.location.href = "/";
  }

  useEffect(() => {
    fetch();
  }, [todos]);

  return (
    <Box>
      <Header text="All Tasks" />
      <Grid justifyContent="center" gap="5px" padding="4px">
        <Heading size="2xl"> What's up today</Heading>
        <Button bg="brand.btn" onClick={deleteAllTodos} padding="2">
          delete all tasks
        </Button>
      </Grid>

      {todos.map((iten, index) => (
        <Todo
          title={iten.todo_title}
          status={iten.todo_status}
          id={iten.id}
          key={iten.id}
        />
      ))}
      <Box position="fixed" bottom="10" right="3" padding="2">
        <Link to="/newtask">
          <IoMdAddCircle size={80} color="" />
        </Link>
      </Box>
    </Box>
  );
};
