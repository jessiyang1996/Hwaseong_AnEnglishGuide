import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="adminDashboardDiv">
      <h1>Admin Dashboard</h1>
      <button type="button">Add New Location</button>
      <button type="button">Go to Site</button>

      <h2>Posts</h2>
      {/* .map will go here showing: title --> edit button -->delete button */}
    </div>
  );
}

export default AdminDashboard;
