import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const RecentActivity = ({ activities }) => {
  return (
    <div className="activity-card">
      <h2>Recent Activity</h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </div>
  );
};

const ActivityItem = ({ activity }) => (
  <li className="activity-item">
    <div className="activity-icon">
      {activity.change.startsWith("+") ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </div>
    <div className="activity-details">
      <span className="item-name">{activity.item}</span>
      <span className="activity-change">{activity.change}</span>
    </div>
    <span className="activity-time">{activity.time}</span>
  </li>
);

export default RecentActivity;
