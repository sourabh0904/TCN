const LowStockAlerts = ({ items }) => {
  return (
    <div className="alerts-card">
      <h2>
        Low Stock Items <span className="alert-badge">{items.length}</span>
      </h2>
      <ul className="alert-list">
        {items.map((item, index) => (
          <li key={item.id} className="alert-item">
            <span>{item.name}</span>
            <span
              className={`stock-level ${
                item.level < 20 ? "critical" : "warning"
              }`}
            >
              {item.quantity} units
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowStockAlerts;
