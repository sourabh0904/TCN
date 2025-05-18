import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import {
  ShoppingCartIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import StatCard from "../components/StatCard";
import StockChart from "../components/StockChart";
import LowStockAlerts from "../components/LowStockAlerts";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import { Loader, Placeholder } from "rsuite";
import Header from "../components/Header";
import "../styles/Dashboard.css";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Sample data - replace with real API data
  const stockData = [
    {
      title: "Beverage Stock",
      data: {
        labels: ["Coffee", "Tea", "Juice", "Milk"],
        datasets: [
          {
            label: "Quantity",
            data: [40, 30, 50, 25],
            backgroundColor: "#ffa726",
          },
        ],
      },
    },
    {
      title: "Snacks Stock",
      data: {
        labels: ["Chips", "Cookies", "Nuts", "Crackers"],
        datasets: [
          {
            label: "Quantity",
            data: [35, 45, 20, 30],
            backgroundColor: "#66bb6a",
          },
        ],
      },
    },
    {
      title: "Supplies Stock",
      data: {
        labels: ["Cups", "Plates", "Napkins", "Straws"],
        datasets: [
          {
            label: "Quantity",
            data: [80, 60, 70, 40],
            backgroundColor: "#42a5f5",
          },
        ],
      },
    },
  ];

  const [lowStockItems] = useState([
    { id: 1, name: "Arabica Beans", quantity: 15 },
    { id: 2, name: "Paper Cups", quantity: 28 },
    { id: 3, name: "Almond Milk", quantity: 42 },
  ]);

  const [recentActivities] = useState([
    { id: 1, item: "Arabica Beans", change: "+200kg", time: "2h ago" },
    { id: 2, item: "Paper Cups", change: "-500 units", time: "4h ago" },
    { id: 3, item: "Almond Milk", change: "+150 units", time: "1d ago" },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  if (!user)
    return (
      <div>
        <Placeholder.Paragraph rows={8} />
        <Loader center content="loading" />
      </div>
    );

  return (
    <div className="dashboard-container">
      <Header user={user} handleLogout={handleLogout} />

      <main className="dashboard-content">
        {/* Left Main Column */}
        <div className="main-column">
          <div style={styles.wrapper}>
            <h2 style={styles.header}>Inventory Dashboard</h2>
            <div style={styles.grid}>
              {stockData.map((item, index) => (
                <StockChart
                  key={index}
                  title={item.title}
                  stockData={item.data}
                />
              ))}
            </div>
          </div>

          <div className="grid-section">
            <QuickActions />
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="sidebar-column">
          <div className="full-screen-section alert-section">
            <LowStockAlerts items={lowStockItems} />
          </div>

          <div className="grid-section activity-section">
            <RecentActivity activities={recentActivities} />
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "30px",
    backgroundColor: "#f5f6fa",
    // minHeight: "100vh",
  },
  header: {
    fontSize: "28px",
    marginBottom: "24px",
    color: "#2c3e50",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default Dashboard;
