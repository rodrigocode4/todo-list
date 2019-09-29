import React, { useState } from 'react';

import axios from 'axios';

import PageHeader from '../PageHeader';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

const URL = 'http://localhost:3003/api/todos'

const Todo = (props) => {

    const [state, setState] = useState({ description: '', list: [] })

    function handleChange(e) {
        setState({ ...state, description: e.target.value })
    }

    function handleAdd() {
        console.log('Add')
        let description = state.description;
        axios.post(URL, { description }).then( (resp) => 'Funcionou!!!!!')
    }

    return (
        <>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                description={state.description}
                handleChange={handleChange}
                handleAdd={handleAdd} />
            <TodoList />
        </>
    );
}

export default Todo;