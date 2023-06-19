import { createContext } from "react"
import { useState } from "react"

let MyContext = createContext();

export default MyContext;

export let CustomComponent = ({ children }) => {


    const [inpute, setInpute] = useState(" ")
    // console.log(inpute);
    const [state, setSate] = useState([])
    console.log(state);
    const Add = () => {
        if (state !== "") {
            setSate([...state, inpute])

        }
        setInpute("")
    }

    const Delete = (id) => {
        let newTodo = state.filter((ele, index) => {
            return id !== index;

        })
        setSate(newTodo)

    }

    return (

        <>
            <MyContext.Provider value={{ state, setSate, setInpute, inpute, Add, Delete, }}>
                {children}

            </MyContext.Provider>


        </>


    )


}