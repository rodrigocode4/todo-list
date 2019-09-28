import React from 'react';
import PageHeader from '../PageHeader';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

const Todo = (props) => {
    return (
        <>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm />
            <TodoList />
        </>
    );
}

export default Todo;