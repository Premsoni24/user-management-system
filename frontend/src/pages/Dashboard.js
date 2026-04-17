

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">

        <h2 className="text-2xl font-bold mb-4">
          User Dashboard
        </h2>

        <h3 className="text-lg mb-4">
          Welcome, <span className="font-semibold">{user.name}</span> 👋
        </h3>

        <div className="text-left space-y-2 mb-6">
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Role:</span> {user.role}</p>
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}