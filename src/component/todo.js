import React, { useState } from 'react'
import todoLogo from '../images/to-do-list.png'
import TodoStyles from '../todo-style.css'

const Todo = () => {

    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])

    const addItems = () => {
        if(inputData){
            setItems([...items, inputData])
            setInputData('')
        }
    }

    const itemDelete = (index) => {
        const updatedItems = items.filter((elem, id) => {
            return index !== id
        });

        setItems(updatedItems)
    }

    const removeAll = () => {
        setItems([])
    }

    return (
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src={todoLogo} alt="todo-logo"/>
                    <figcaption>Add you task here!!</figcaption>
                </figure>
                 
                <div className='addItems'>
                    <input type='text' placeholder='Add Items...' value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                    <span class="material-symbols-outlined" title='Add Items' onClick={addItems}>add</span>
                </div>

                <div className='showItems'>
                    
                    {
                        items.map((elem, ind) => {
                            return (
                                <div className='eachItem' key={ind}>
                                    <p>{elem}</p>
                                    <span class="material-symbols-outlined" title='Delete Items' onClick={() => itemDelete(ind)}>delete</span>
                                </div>
                            )
                        })
                    }
                    
                </div>

                <div className='checkItems'>
                    <button className='btn-effect' onClick={removeAll}><span>CHECK LIST</span></button>
                </div>
            </div>
        </div>
    )
}

export default Todo