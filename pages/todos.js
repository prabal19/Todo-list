import React, { useEffect, useState } from 'react'

const todos = () => {
   
    const [todos, setTodos] = useState([])
    useEffect(() => {
      let todos = localStorage.getItem("todos")
      setTodos(JSON.parse(todos))
     
    }, [])
    

    const deleteTodo = (title) => { 
        let newTodos = todos.filter(item =>{
            return item.title != title
        })
        localStorage.setItem("todos", JSON.stringify(newTodos))
        setTodos(newTodos)
     }

     const editTodo = (first) => { second }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">Your Todos</h1>
                    {todos?.length === 0 && (
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                          Your Todos will show up here. Please add a todo by going to the homepage
                     </p>
                    )}

                </div>
                <div className="flex flex-wrap -m-4">


                {todos?.length > 0 ? (
                    todos.map(item => (
     <div key={item._id || item.title} className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={`https://picsum.photos/600/900?a=${item.title}`}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">{item.title}</h2>
          <p className="mb-4">{item.desc}</p>
          <span className="inline-flex">
            <a
              className="text-gray-500 cursor-pointer"
              onClick={() => {
                deleteTodo(item.title);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
                <path d="M 14.984375 2.4863281 ..."></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500 cursor-pointer" href={`/edit/${item.title}`}>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                <path d="M 43.125 2 ..."></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
                    ))
                    ) : (
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base align-middle">
                      Your Todos will show up here. Please add a todo by going to the homepage.
                    </p>
                    )}

                </div>
            </div>
        </section>
    )
}

export default todos