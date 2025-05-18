import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="quick-actions-card">
      <h2>Quick Actions</h2>
      <div className="action-buttons">
        <Link to="/add-item" className="action-button">
          Add New Item
        </Link>
        <Link to="/order" className="action-button">
          Create Purchase Order
        </Link>
        <Link to="/reports" className="action-button">
          Generate Report
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
