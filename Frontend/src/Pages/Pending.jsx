import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import Loader from '../components/layout/Loader'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { CircleCheckBig,Check, Trash2 } from 'lucide-react'

const Pending = () => {
  const navigate=useNavigate()
  const [loading, setloading] = useState(false)

  const {
    setusername,
    task,
    settask,
    stats,
    setstats
  }=useOutletContext()

  function isOverdue(task) {
  if (task.status !== "Pending") {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(task.dueDate);
  dueDate.setHours(0, 0, 0, 0);

  return dueDate < today;
}

  const deleteTask =async(Taskid)=>{
    settask(prev =>
    prev.filter(task => task._id !== Taskid)
  );

    try{
      const response=await api.delete("/dashboard/deleteTask/"+Taskid)
      settask(response.data.tasks)
      setstats(response.data.stats)
    }
    catch(err){
      console.error(err);
    }

  }

  const completeTask = async (taskId) => {

  settask(prev =>
    prev.map(task =>
      task._id === taskId
        ? { ...task, status: "Completed" }
        : task
    )
  );
  try {
    const response = await api.put(
      `/dashboard/updateTask/${taskId}`,
      {
        status: "Completed"
      }
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeTasks = response.data.tasks.filter(task => {
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);

      return (
        task.status === "Pending"
      );
    });

    settask(activeTasks);

    setstats(response.data.stats);

  } catch (err) {
    console.log(err.response?.data);
  }
};

  const getTasks = async()=>{

  try{
    const response=await api.get("/dashboard/getTask/?status=pending");
    settask(response.data.tasks)
    setstats(response.data.stats)
  }
  catch(err){
    console.log(err.response.data)
  }

}

  useEffect(()=>{

  const checkDashboardAccess=async()=>{

    try{
      setloading(true)
      const resposne=await api.get("/dashboard");
      console.log(resposne.data.message);
      await getTasks()
    }
    catch (err) {
    navigate("/signup");
    }
    finally{
      setloading(false)
    }

  }
checkDashboardAccess();
  },[])

  return (
    <div className='px-7'>
      {loading&&
      <div className="fixed inset-0 rounded-3xl z-50 flex items-center justify-center  bg-black/30 backdrop-blur-sm">
        <Loader />
      </div>
      }
      {task.length !== 0 &&
      <div className='flex flex-col gap-3 pb-4'>
        {task.map((item) => {
        const completed = item.status === "Completed";
        return (
        <div key={item._id} className="flex flex-col gap-3">

        <div className={`cursor-pointer w-full min-h-16 px-4 py-3 rounded-xl border bg-[#0C0C10] flex items-center justify-between
        ${
        isOverdue(item)
        ? "border-[#EF4444]"
        : "border-[#1F1F24]"}
          `}>

          {/* Checkbox + title */}
          <div className="flex items-center gap-3">

              <button
                onClick={() =>  completeTask(item._id)}
                className={`w-5 h-5 cursor-pointer rounded-md border-2 flex items-center justify-center ${
                  completed
                    ? "bg-[#E0FF22] border-[#E0FF22]"
                    : "border-[#52525B]"
                }`}
              >
                {completed && (
                  <Check size={15} strokeWidth={3} color="black" />
                )}
              </button>

            <h3
              className={
                completed
                  ? "line-through text-zinc-500"
                  : "text-white"
              }
            >
              {item.description}
            </h3>

          </div>

          {/* Priority + date */}
          <div className="flex items-center gap-5">

          <span
             className={`text-sm font-medium px-3 py-1 rounded-full ${
            item.priority === "High"
            ? "bg-red-500/10 text-red-400"
            : item.priority === "Medium"
            ? "bg-yellow-500/10 text-yellow-400"
            : "bg-green-500/10 text-green-400"
            }`}>
            {item.priority}
          </span>

            <span className="text-xs text-zinc-500">
              {new Date(item.dueDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>

            <span 
            onClick={()=>
              deleteTask(item._id)
            }
            className='rounded-full p-2 hover:bg-zinc-800 transition-colors duration-200'>
              <Trash2 color='#E0FF22' size={20}/>
            </span>


          </div>

        </div>

      </div>
      );
      })}
      </div>
      } 
      {task.length===0&&
      <div className="task gap-3 flex flex-col justify-center items-center h-[70vh]">
          <div className='flex justify-center'><CircleCheckBig size={30} color='#E0FF22'/></div>
          <h1 className='text-lg font-medium text-[#A1A1AA]'>You're all caught up!</h1>
      </div>
        }
    </div>
  )
}

export default Pending