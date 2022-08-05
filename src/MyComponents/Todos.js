import React from 'react'
import { TodoItem } from './TodoItem';

export default function Todos(props) {
    let todosStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "5px"
    }
    return (
        <div className="container" style={{height:"20%"}}>
            <h3 className="my-3">Todos List</h3>
            <div className="" style={todosStyle}>
            
                {props.todos.length === 0?"No ToDos To Display":
                    props.todos.map(todo => {
                        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
                }
            </div>
        </div>
    )
}
