import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="adminDashboardDiv">
      <h1 className="adminDashboardHeader">Admin Dashboard</h1>
      <div className="adminDashContainer">
        <h2>Posts</h2>
        <div className="adminDashHeaderTitle">
          <button type="button" className="adminDashAddButton">
            Add New Location
          </button>
          <button type="button" className="adminDashHomeButton">
            Go to Site
          </button>
        </div>
      </div>
      <div className="adminDashListContainer">
        {/* .map will go here showing: title --> edit button -->delete button */}
      </div>
    </div>
  );
}

export default AdminDashboard;
