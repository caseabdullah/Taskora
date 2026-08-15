import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Loader from "../components/layout/Loader";
import api from "../api/axios";
import {
  CircleCheckBig,
  Trash2,
  Check,
} from "lucide-react";

const Completed = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  const {
    task,
    settask,
    setstats,
  } = useOutletContext();

  // Delete task
  const deleteTask = async (Taskid) => {
    // Remove immediately from UI
    settask((prev) =>
      prev.filter((task) => task._id !== Taskid)
    );

    try {
      const response = await api.delete(
        "/dashboard/deleteTask/" + Taskid
      );

      settask(response.data.tasks);
      setstats(response.data.stats);
    } catch (err) {
      console.error(err);
    }
  };

  // Get completed tasks
  const getTasks = async () => {
    try {
      const response = await api.get(
        "/dashboard/getTask/?status=completed"
      );

      settask(response.data.tasks);
      setstats(response.data.stats);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  // Move task back to pending
  const pendingTask = async (taskId) => {
    // Update UI immediately
    settask((prev) =>
      prev.map((task) =>
        task._id === taskId
          ? { ...task, status: "Pending" }
          : task
      )
    );

    try {
      const response = await api.put(
        `/dashboard/updateTask/${taskId}`,
        {
          status: "Pending",
        }
      );

      // Keep only completed tasks
      const completedTasks =
        response.data.tasks.filter(
          (task) => task.status === "Completed"
        );

      settask(completedTasks);
      setstats(response.data.stats);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  // Check dashboard access
  useEffect(() => {
    const checkDashboardAccess = async () => {
      try {
        setloading(true);

        await api.get("/dashboard");

        await getTasks();
      } catch (err) {
        navigate("/signup");
      } finally {
        setloading(false);
      }
    };

    checkDashboardAccess();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-7">

      {/* Loading */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <Loader />
        </div>
      )}

      {/* Tasks */}
      {task.length !== 0 && (
        <div className="flex flex-col gap-3 pb-4">

          {task.map((item) => {
            const completed =
              item.status === "Completed";

            return (
              <div
                key={item._id}
                className="w-full"
              >

                {/* Task Card */}
                <div
                  className="
                    w-full
                    min-h-16
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-[#1F1F24]
                    bg-[#0C0C10]

                    flex
                    flex-col
                    gap-3

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  {/* =========================
                      FIRST ROW
                      Checkbox + Description
                  ========================== */}
                  <div className="flex items-start gap-3 min-w-0">

                    {/* Checkbox */}
                    <button
                      onClick={() =>
                        pendingTask(item._id)
                      }
                      className="
                        w-5
                        h-5
                        min-w-5
                        shrink-0
                        mt-0.5
                        cursor-pointer
                        rounded-md
                        border-2
                        flex
                        items-center
                        justify-center
                        bg-[#E0FF22]
                        border-[#E0FF22]
                      "
                    >
                      {completed && (
                        <Check
                          size={15}
                          strokeWidth={3}
                          color="black"
                        />
                      )}
                    </button>

                    {/* Description */}
                    <h3
                      className="
                        min-w-0
                        wrap-break-word
                        text-sm
                        sm:text-base
                        leading-5
                        line-through
                        text-zinc-500
                      "
                    >
                      {item.description}
                    </h3>

                  </div>

                  {/* =========================
                      SECOND ROW / RIGHT SIDE
                      Priority + Date + Delete
                  ========================== */}
                  <div
                    className="
                      flex
                      items-center
                      justify-end
                      gap-3
                      pl-8

                      sm:pl-0
                      sm:shrink-0
                      sm:gap-5
                    "
                  >

                    {/* Priority */}
                    <span
                      className={`
                        text-xs
                        sm:text-sm
                        font-medium
                        px-3
                        py-1
                        rounded-full
                        whitespace-nowrap

                        ${
                          item.priority === "High"
                            ? "bg-red-500/10 text-red-400"
                            : item.priority === "Medium"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-green-500/10 text-green-400"
                        }
                      `}
                    >
                      {item.priority}
                    </span>

                    {/* Date */}
                    <span
                      className="
                        text-xs
                        text-zinc-500
                        whitespace-nowrap
                      "
                    >
                      {new Date(
                        item.dueDate
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>

                    {/* Delete */}
                    <button
                      onClick={() =>
                        deleteTask(item._id)
                      }
                      className="
                        shrink-0
                        rounded-full
                        p-2
                        hover:bg-zinc-800
                        transition-colors
                        duration-200
                        cursor-pointer
                      "
                    >
                      <Trash2
                        color="#E0FF22"
                        size={20}
                      />
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      )}

      {/* Empty State */}
      {task.length === 0 && (
        <div
          className="
            flex
            flex-col
            gap-3
            justify-center
            items-center
            min-h-[60vh]
          "
        >
          <div className="flex justify-center">
            <CircleCheckBig
              size={30}
              color="#E0FF22"
            />
          </div>

          <h1
            className="
              text-lg
              font-medium
              text-[#A1A1AA]
            "
          >
            You're all caught up!
          </h1>
        </div>
      )}

    </div>
  );
};

export default Completed;