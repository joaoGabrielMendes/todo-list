import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { checkTargetForNewValues } from "framer-motion";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";
import { Link } from "react-router-dom";
import Api from "../../services/Api";

export const Todo = ({ title, status, id }) => {
  async function check() {
    await Api.checkTodo(id);
  }

  return (
    <Box padding={15}>
      <Flex
        gap="5"
        bg="brand.sec"
        padding="20px"
        borderRadius="35px"
        alignItems="center"
      >
        <GridItem padding="2" onClick={check}>
          {status ? (
            <FaCheckCircle size={25} />
          ) : (
            <ImRadioUnchecked size={25} />
          )}
        </GridItem>

        <GridItem>
          <Link to={`todos/${id}`}>
            <Heading size="lg" fontWeight="light">
              {status ? (
                <Box textDecoration="line-through">{title}</Box>
              ) : (
                <Box textDecoration="none">{title}</Box>
              )}
            </Heading>
          </Link>
        </GridItem>
      </Flex>
    </Box>
  );
};
