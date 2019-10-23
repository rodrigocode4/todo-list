import React, { useState, useEffect } from 'react';

import axios from 'axios';

import PageHeader from '../PageHeader';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

const URL = 'http://localhost:3003/api/todos'

const Todo = (props) => {

    const [state, setState] = useState({ description: '', list: [] })

    useEffect(() => {
        refresh()
    }, [])

    function refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => setState({ ...state, description: '', list: resp.data }))
    }

    function handleChange(e) {
        setState({ ...state, description: e.target.value })
    }

    function handleAdd() {
        console.log('Add')
        let description = state.description;
        axios.post(URL, { description })
            .then(resp => refresh())
    }

    function handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => refresh())
    }

    return (
        <>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                description={state.description}
                handleChange={handleChange}
                handleAdd={handleAdd} />
            <TodoList 
                list={state.list}
                handleRemove={handleRemove} />
        </>
    );
}

export default Todo;