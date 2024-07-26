"use client"
import React, { useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';


function Page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i)=>{
let copytask =[...mainTask]
copytask.splice(i,1)
setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => (
      <li key={index} className="border-b border-zinc-800 py-2">
        <h3 className="font-bold text-lg">{task.title}</h3>
        <p>{task.desc}</p>
      </li>
    ));
  }

  if(mainTask.length>0)
  renderTask = mainTask.map((t,i)=>{
return <li key={i} className='flex items-center justify-between mb-5'>
<div className='flex items-center justify-between  w-2/3'>
  <h5 className='text-2xl font-semibold'>{t.title}</h5>
  <p className='text-lg font-medium'>{t.desc}</p>   
</div>
<button 
onClick={()=>{
  deleteHandler(i)
}}
className='bg-red-400 text-white px-4 py-2  rounded font-bold'>Delete </button>
</li>
  })
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
        Nikhil's ToDo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type='text'
          className='text border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Task Here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>
          Add Task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}

export default Page;
