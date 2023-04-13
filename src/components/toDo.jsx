import { useState } from "react"
export default function ToDo() {

    const [title, setTitle] = useState("")

    function handleClick(e){
        e.preventDefault()
        setTitle('marcoss')
    }

    return (
        <>
            <h1>To-Do List</h1>
            <form className="form">
                <input className="inputText" type="text" value={title} />
                <input onClick={handleClick} className="inputSubmit" type="submit" value="" />
            </form>
            <footer>
                Julieta Di Cio, 2023.
            </footer>
        </>
    )
}