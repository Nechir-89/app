// modules
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// components
import App from '../App';
import Expenses from '../pages/expenses';
import Invoices from '../pages/invoices';
import Invoice from '../pages/invoices/invoice';
import Home from '../pages/home';
import PageNotFound from '../pages/notFoundPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          {/* because of children routes invoices can not be set index route */}
          <Route path='invoices' element={<Invoices />}>
            <Route index
              element={
                <main>
                  <div>Please select an invoice to see its details if you have list of invoices</div>
                </main>
              } />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path='expenses' element={<Expenses />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
