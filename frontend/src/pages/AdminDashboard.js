
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-between">
      
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">
          Admin Dashboard
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* View Users Card */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Users
            </h3>
            <p className="text-gray-500 mb-4">
              View and manage all users
            </p>

            <button
              onClick={() => navigate("/users")}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View Users
            </button>
          </div>

          {/* Create User Card */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Create User
            </h3>
            <p className="text-gray-500 mb-4">
              Add a new user to the system
            </p>

            <button
              onClick={() => navigate("/create-user")}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Create User
            </button>
          </div>

        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

    </div>
  );
}