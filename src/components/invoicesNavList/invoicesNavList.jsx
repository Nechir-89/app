import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { getInvoices } from '../../models/data';

// doing some cury
// const handleIt = (v) => {
//   return (m) => console.log(m.target.value, v)
// }

export default function InvoicesNavList() {
  let invoices = getInvoices();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  // doing some cury
  const handleChange = () => {
    return (event) => {
      let filter = event.target.value;
      filter ? setSearchParams({ filter }, { replace: true }) : setSearchParams({}, { replace: true });
    }
  }

  return (
    <nav>
      <input
        type="text"
        value={searchParams.get('filter') || ''}
        onChange={handleChange()}
        placeholder="Search for an invoice" />
      <ul>
        {
          invoices.filter(
            invoice => {
              let filter = searchParams.get('filter');
              if (!filter) return true;

              let invoiceName = invoice.name.toLowerCase();
              filter = filter.toLowerCase()

              return invoiceName.startsWith(filter);
            }
          )?.map(
            invoice => {
              return <li key={invoice.number}>
                <NavLink to={`/invoices/${invoice.number}${location.search}`} style={({ isActive }) => ({
                  "color": isActive ? "red" : "black",
                  "fontWeight": isActive ? "700" : "500"
                })}>
                  {invoice.name}
                </NavLink>
              </li>
            }
          )
        }
      </ul>
    </nav>
  );
}

// having both (url params and search params)
// to keep filtered result on the screan even when clicking
// the link
// function InvoiceLink({ to, ...props }) {
//   const location = useLocation();
//   return (
//     <NavLink to={to + location.search} {...props} />
//   );
// }

