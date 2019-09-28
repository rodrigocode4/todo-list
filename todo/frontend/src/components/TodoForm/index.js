import React from 'react';
import Grid from '../Grid';
import IconButton from '../IconButton';

const TodoForm = (props) => {
    return (
        <>
            <div className="todo-group row" role="form">
                <Grid cols="12 9 10">
                    <input id="description"
                        className="form-control"
                        placeholder="Adicione uma tafera" />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => {}} />
                </Grid>
            </div>
        </>
    );
}

export default TodoForm;