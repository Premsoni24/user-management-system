

import { useState } from "react";
import API from "../services/api";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleCreate = async () => {
    try {
      await API.post("/users", {
        name,
        email,
        password,
        role
      });

      alert("User created");

    } catch (err) {
      alert("Error creating user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Create User
        </h2>

        <input
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
          className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          onChange={(e)=>setRole(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleCreate}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Create User
        </button>

      </div>
    </div>
  );
}