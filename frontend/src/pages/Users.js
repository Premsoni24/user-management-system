

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      alert("Error deleting user");
    }
  };

  // UPDATE
  const handleUpdate = async (id) => {
    const newName = prompt("Enter new name");
    if (!newName) return;

    try {
      await API.put(`/users/${id}`, { name: newName });
      fetchUsers();
    } catch (err) {
      alert("Error updating user");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h2 className="text-2xl font-bold text-center mb-6">
        Users List
      </h2>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">
          
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-t hover:bg-gray-50 transition">
                
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3 capitalize">{u.role}</td>

                <td className="p-3">
                  
                  <button
                    onClick={() => handleUpdate(u._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(u._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}