const task_model=require('../models/task.model');
const user_model=require('../models/user.model')

const priorityOrder = {
    High: 3,
    Medium: 2,
    Low: 1
};

function sortTasks(tasks) {
    tasks.sort((a, b) => {
        const dateDifference = new Date(a.dueDate) - new Date(b.dueDate);

        if (dateDifference !== 0) {
            return dateDifference;
        }

        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
}

function getTaskStats(tasks) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return {
        overdueTasks: tasks.filter(task => {
            const dueDate = new Date(task.dueDate);
            dueDate.setHours(0, 0, 0, 0);

            return (
                task.status === "Pending" &&
                dueDate < today
        )}).length,
        todayTasks: tasks.filter(task => {
            const dueDate = new Date(task.dueDate);
            dueDate.setHours(0, 0, 0, 0);

            return (
                task.status === "Pending" &&
                dueDate.getTime() === today.getTime()
        )}).length,
        completedTasks: tasks.filter(task => task.status === "Completed").length,
        pendingTasks: tasks.filter(task => task.status === "Pending").length
    };
}

create_task = async(req,res)=>{

    try{
    const userid=req.user.id;

    const {description,status,priority,dueDate}=req.body

    let user_tasks=await task_model.findOne({user_id:userid});

    if(!user_tasks){
        user_tasks= await task_model.create({
            user_id:userid,
            tasks:[],
        })
    }

    user_tasks.tasks.push({
        description,priority,status,dueDate
    })
    
    sortTasks(user_tasks.tasks);
    
    await user_tasks.save();

    res.status(201).json({
            message: "Task added successfully",
            tasks: user_tasks.tasks,
            stats:getTaskStats(user_tasks.tasks)
    })
    }
    catch(err){
        res.json({
            message:err.message
        })
    }

}

get_tasks = async (req, res) => {
    try {
        const userid = req.user.id;
        const { status, due } = req.query;

        const user = await user_model.findById(userid);

        const user_tasks = await task_model.findOne({
            user_id: userid
        });

        if (!user_tasks || user_tasks.tasks.length === 0) {
            return res.status(200).json({
                message: "User has no tasks saved",
                username: user.username,
                tasks: [],
                stats: getTaskStats([])
            });
        }

        let tasks = user_tasks.tasks;
        const alltasks=user_tasks.tasks;

        if (status === "pending") {
            tasks = tasks.filter(
                task => task.status === "Pending"
            );
        }

        if (status === "completed") {
            tasks = tasks.filter(
                task => task.status === "Completed"
            );
        }

        if (due === "active") {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            tasks = tasks.filter(task => {
                const dueDate = new Date(task.dueDate);
                dueDate.setHours(0, 0, 0, 0);

                return dueDate <= today;
            });
        }

        tasks = tasks.map(task => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const dueDate = new Date(task.dueDate);
            dueDate.setHours(0, 0, 0, 0);

            return {
                ...task.toObject(),
                overdue:
                    task.status === "Pending" &&
                    dueDate < today
            };
        });

        res.status(200).json({
            username: user.username,
            tasks,
            stats: getTaskStats(alltasks)
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

delete_all_tasks = async(req,res)=>{

    try{
    const userid=req.user.id;

    const user_tasks= await task_model.findOne({user_id:userid});

    if(!user_tasks|| user_tasks.tasks.length===0){
        return res.status(404).json({
            message:"User have not tasks saved",
            stats:getTaskStats([])
        })
    }

    user_tasks.tasks=[];

    await user_tasks.save();

    res.status(200).json({
        message:"All Tasks Deleted",
        tasks:user_tasks.tasks,
        stats:getTaskStats(user_tasks.tasks)
    })
    }
    catch(err){
        res.json({
            message:err.message
        })
    }

}

delete_task = async(req,res)=>{

    try{

    const userid=req.user.id;
    const taskId=req.params.id;

    const user_tasks=await task_model.findOne({user_id:userid});
    
    if(!user_tasks|| user_tasks.tasks.length===0){

        return res.status(404).json({
            message:"User have no tasks saved",
            stats:getTaskStats([])
        })
    }

    const taskIndex = user_tasks.tasks.findIndex(task => task._id.toString() === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    user_tasks.tasks.splice(taskIndex,1);
    
    await user_tasks.save()

    res.status(200).json({
        message:"Task Deleted Successfully",
        tasks:user_tasks.tasks,
        stats:getTaskStats(user_tasks.tasks)
    })

    }
    catch(err){
        res.json({
            message:err.message
        })
    }

}

update_task = async (req, res) => {
    try {
        const userid = req.user.id;
        const taskId = req.params.id;
        const { status } = req.body;

        const user_tasks = await task_model.findOne({
            user_id: userid
        });

        if (!user_tasks || user_tasks.tasks.length === 0) {
            return res.status(404).json({
                message: "User have no tasks saved",
                stats: getTaskStats([])
            });
        }

        const task = user_tasks.tasks.id(taskId);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        task.status = status;

        sortTasks(user_tasks.tasks);

        await user_tasks.save();

        res.status(200).json({
            message: "Task Updated Successfully",
            tasks: user_tasks.tasks,
            stats: getTaskStats(user_tasks.tasks)
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


module.exports={create_task,get_tasks,delete_all_tasks,delete_task,update_task}