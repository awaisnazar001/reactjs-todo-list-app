import React from 'react'

export const TodoItem = (props) => {
    let todoitemStyle = {
        width:"18rem",
        height:"100%"
    }
    return (
        <div className="card mb-1 mx-1 p-3" style={todoitemStyle}>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>props.onDelete(props.todo)}>Delete</button>
        </div>
    )
}
