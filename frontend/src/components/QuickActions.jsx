import { Link } from "react-router-dom";
import {
  PlusIcon,
  DocumentArrowUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import React, { useCallback, useEffect } from "react";
import "../styles/QuickActions.css";

const QuickActions = () => {
  // Preload target routes on hover
  const preloadRoute = useCallback((path) => {
    // const componentsToPreload = {
    //   "/add-item": () => import("../pages/AddItem"),
    //   "/order": () => import("../pages/PurchaseOrder"),
    //   "/reports": () => import("../pages/Reports"),
    // };
    // if (componentsToPreload[path]) {
    //   componentsToPreload[path]();
    // }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case "n":
            e.preventDefault();
            window.location.href = "/add-item";
            break;
          case "p":
            e.preventDefault();
            window.location.href = "/order";
            break;
          case "r":
            e.preventDefault();
            window.location.href = "/reports";
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="quick-actions-card">
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="action-grid">
        <Link
          to="/add-item"
          className="action-card"
          // onMouseEnter={() => preloadRoute("/add-item")}
          // aria-label="Add new inventory item"
        >
          <PlusIcon className="action-icon" />
          <span className="action-text">New Item</span>
          <span className="keyboard-hint">⌘N</span>
        </Link>

        <Link
          to="/order"
          className="action-card"
          onMouseEnter={() => preloadRoute("/order")}
          aria-label="Create purchase order"
        >
          <DocumentArrowUpIcon className="action-icon" />
          <span className="action-text">Purchase Order</span>
          <span className="keyboard-hint">⌘P</span>
        </Link>

        <Link
          to="/reports"
          className="action-card"
          onMouseEnter={() => preloadRoute("/reports")}
          aria-label="Generate inventory report"
        >
          <DocumentTextIcon className="action-icon" />
          <span className="action-text">Generate Report</span>
          <span className="keyboard-hint">⌘R</span>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(QuickActions);
