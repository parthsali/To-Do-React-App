import React, { useState } from 'react'
import './App.css'
import { TodoItem } from './TodoItem';
// import Navbar from './Navbar';

const App = () => {

  const [task, settask] = useState();
  const [finalTask, setFinalTask] = useState([]);




  const handleOnchange = (event) => {
    settask(event.target.value);
  }
  const handleOnclick = (event) => {
    event.preventDefault();
    if (task !== "") {
      setFinalTask((prevState) => {
        return [...prevState, task];
      });
      settask("");


    }
  }

  const deleteTask = (id) => {
    setFinalTask((prevState) => {
      return prevState.filter((arrEle, index) => {
        return id !== index;
      })
    })
  }



  const currentDate = new Date().getDate();

  const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDay = dayArray[new Date().getDay()];
  return (
    <>
      {/* <Navbar /> */}
      <div className='main_div' >
        <div className='center_div'>
          <h2 className='heading'>{`${currentDay} | ${currentDate} `}</h2>
          <form onSubmit={handleOnclick} className='input_box'>
            <input type="text" value={task} className='input_field' placeholder="Enter Task" onChange={handleOnchange} />
            <button className='add_btn' type='submit'>+</button>
          </form>
          <div className='task_menu'>
            <ol>

              {finalTask.map((val, index) => {
                return (
                  <TodoItem
                    val={val}
                    deleteTaskFun={deleteTask}
                    key={index}
                    id={index}

                  />
                )
              })}

            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
