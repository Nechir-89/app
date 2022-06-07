import { NavLink, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../../models/data';

export default function InvoicesNavList() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <nav>
      <div>
        <input type="text" value={searchParams.get('filter')} onChange={event => {
          let filter = event.target.value;
          filter ? setSearchParams({
            filter
          }) : setSearchParams({});
        }} placeholder="Search for invoice" />
      </div>
      <ul>
        {invoices.filter(invoice => {
          if (!searchParams.get('filter')) return true;
          let invoiceName = invoice.name.toLowerCase();
          let filter = searchParams.get('filter').toLowerCase();
          return invoiceName.startsWith(filter);
        })?.map(invoice => <li key={invoice.number}>
          <NavLink to={`/invoices/${invoice.number}`} style={({
            isActive
          }) => ({
            "color": isActive ? "red" : "black",
            "fontWeight": isActive ? "700" : "500"
          })}>
            {invoice.name}
          </NavLink>
        </li>)}
      </ul>
    </nav>
  );
}
