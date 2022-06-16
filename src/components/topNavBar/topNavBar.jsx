// Modules
import { NavLink } from 'react-router-dom';

function TopNavBar() {
  console.count('TopNavBar Render: ');
  return (
    <nav>
      <NavLink to='invoices' style={({ isActive }) => ({ "fontWeight": isActive ? "800" : "500" })}>
        Invoices
      </NavLink> | {" "}
      <NavLink to='expenses' style={({ isActive }) => ({ "fontWeight": isActive ? "800" : "500" })}>
        Expenses
      </NavLink>
    </nav>
  );
}

export default TopNavBar;
