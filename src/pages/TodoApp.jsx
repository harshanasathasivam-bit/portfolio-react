import React, { useState, useEffect } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false, editing: false },
    ]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const enableEdit = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, editing: true } : t)));
  };

  const saveEdit = (id, newText) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text: newText, editing: false } : t))
    );
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 ${
        darkMode ? "bg-[#111] text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      {/* Inline CSS */}
      <style>{`
        .card {
          width: 100%;
          max-width: 380px;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
          transition: 0.3s ease;
        }
        .task-input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          outline: none;
          border: 2px solid #ccc;
        }
        .task-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0,0,0,0.05);
          padding: 10px 14px;
          border-radius: 12px;
          margin-top: 10px;
        }
        .dark .task-row {
          background: rgba(255,255,255,0.1);
        }
        .edit-input {
          width: 100%;
          padding: 6px;
          border-radius: 6px;
          border: 1px solid #aaa;
        }
      `}</style>

      <div className={`card ${darkMode ? "bg-[#222]" : "bg-white"}`}>
        <h1 className="text-2xl font-bold text-center mb-3">To-Do List</h1>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full mb-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            className="task-input"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="mt-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-row ${task.completed ? "opacity-60 line-through" : ""}`}
            >
              {/* Editable Text */}
              {task.editing ? (
                <input
                  className="edit-input"
                  defaultValue={task.text}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(task.id, e.target.value);
                  }}
                />
              ) : (
                <span
                  className="flex-1 cursor-pointer"
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </span>
              )}

              {/* Buttons */}
              <div className="flex gap-2 ml-3">
                {task.editing ? (
                  <button
                    className="text-blue-500"
                    onClick={() => {
                      const input = document.querySelector(".edit-input");
                      saveEdit(task.id, input.value);
                    }}
                  >
                    ✔
                  </button>
                ) : (
                  <button
                    className="text-yellow-500"
                    onClick={() => enableEdit(task.id)}
                  >
                    ✎
                  </button>
                )}

                <button
                  className="text-red-500"
                  onClick={() => deleteTask(task.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No tasks added.</p>
          )}
        </div>
      </div>
    </div>
  );
}
