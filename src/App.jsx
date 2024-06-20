import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const SubmitTask = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { title, desc }]);
    setDesc("");
    setTitle("");
  };

  const removetask = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1);
    setMaintask(copytask);
  }

  let randertask = <div className="container mt-1 border border-4 border-info bg-info rounded">
    <h3 class="text-center text-white">not task availabel</h3>
  </div>

  if(maintask.length>0){
  randertask = maintask.map((task,i) => {
    return <div key={i} className=" container mt-1 bg-info  border border-4 border-info rounded">
    <div class="row">
    <div class="col-md-4">
      <h3 class="text-white">{task.title}</h3>
    </div>
    <div class="col-md-6">
      <h3 class="text-white" >{task.desc}</h3>
    </div>
    <div class="col-md-2">
    <button onClick={()=>{removetask(i)}} class=" btn btn-danger  m-1 text-white">delete task</button>
    </div>
    </div>
    </div>
    });
  }


  return (
    <>
      <h1 className="bg-info text-white text-center">My Todo List</h1>
      <div className="container border border-4 border-info rounded">
        <form class="row g-3">
          <div class="col-md-6">
            <h4 class="form-label text-info">Title</h4>
            <input
              type="text"
              class="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div class="col-md-6">
            <h4 class="form-label text-info">desc</h4>
            <input
              type="text"
              class="form-control"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <div class="col-12">
            <button
              type="submit"
              onClick={SubmitTask}
              class="btn btn-info mb-2 text-white "
            >
              Add task
            </button>
          </div>
        </form>
      </div>
      <hr/>

      <div>
        {randertask}
      </div>
    </>
  );
}

export default App;
