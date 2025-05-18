import {
  ExclamationTriangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const StatCard = ({ icon, title, value, trend, positive, alert }) => {
  return (
    <div className={`stat-card ${alert ? "alert" : ""}`}>
      <div className="stat-icon">
        {icon === "shopping" ? (
          <ShoppingCartIcon />
        ) : (
          <ExclamationTriangleIcon />
        )}
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <div className="stat-value">
          <span>{value}</span>
          <span className={`trend ${positive ? "positive" : "negative"}`}>
            {trend}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
