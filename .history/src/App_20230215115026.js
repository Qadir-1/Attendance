/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./components/pages/Customers/Customers";
import Cat from "./components/pages/Cat/Cat";
import Terms from "./components/pages/Terms&Condition/Terms";
import Privacy from "./components/pages/PrivacyPolicy/Privacy";
import Help from "./components/pages/Help/Help";
import Labour from "./components/pages/Labours/Labour";
import GenerateId from "./components/pages/GenerateId/GenerateId";
import NotifyLabour from "./components/pages/Notifications/NotifyLabour";
import NotifyCustomer from "./components/pages/Notifications/NotifyCustomer";
import Payment from "./components/pages/Payment/Payment";
import Transaction from "./components/pages/Transaction/Transaction";
import City from "./components/pages/City/City";
import PushNotification from "./components/pages/Notification/PushNotification";
import CommonUser from "./components/pages/CommonUser";
import Servie from "./components/pages/Payment/Servie";
import WorkSchedul from "./components/pages/WorkSchedul";
import Shift from "./components/pages/Shift";
import Attendance from "./components/pages/Attendance";
import Leave from "./components/pages/Leave";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/city" element={<City />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/notification" element={<PushNotification />} />
        <Route path="/generateId" element={<GenerateId />} />
        <Route path="/common" element={<CommonUser />} />
        <Route path="/Notice/Labour" element={<NotifyLabour />} />
        <Route path="/Notice/Customer" element={<NotifyCustomer />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/service" element={<Servie />} />
        <Route path="/trans" element={<Transaction />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/workSchedule" element={<WorkSchedul />} />
        <Route path="/shift" element={<Shift />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave /> } />
        <Route path="/cat" element={<Cat />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/leaveType" element={<LeaveTy}

      </Routes>
    </>
  );
}

export default App;
