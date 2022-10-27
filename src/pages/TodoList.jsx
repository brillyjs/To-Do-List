import React, { useState } from "react";
import Form from "../components/form/form";
import Header from "../components/header/header";
import Layout from "../components/layout/layout";
import List from "../components/list/list";

const TodoList = () => {
  const [todos, setTodos] = useState([
   
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
