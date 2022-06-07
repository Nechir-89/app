import { Outlet } from "react-router-dom";
import InvoicesNavList from "../../components/invoicesNavList";
export default function Invoices() {

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <InvoicesNavList />
      <Outlet />
    </main>
  );
}
