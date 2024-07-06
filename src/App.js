import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';
import HouseType from './pages/HouseType';
import HousesPage from './pages/HousesPage';
import TenantsPage from './pages/TenantsPage';
import BookingsPage from './pages/BookingsPage';
import PaymentsPage from './pages/PaymentsPage';
import ReportsPage from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';
import SingleRooms from './pages/SingleRooms';
import DoubleRooms from './pages/DoubleRooms';
import TripleRooms from './pages/TripleRooms';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route exact path="/housetype" element={<HouseType />} />
          <Route exact path="/houses" element={<HousesPage />} />
          <Route exact path="/tenants" element={<TenantsPage />} />
          <Route exact path="/bookings" element={<BookingsPage />} />
          <Route exact path="/payments" element={<PaymentsPage />} />
          <Route exact path="/reports" element={<ReportsPage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/singleroom" element={<SingleRooms />} />
          <Route exact path="/doubleroom" element={<DoubleRooms />} />
          <Route exact path="/tripleroom" element={<TripleRooms />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
