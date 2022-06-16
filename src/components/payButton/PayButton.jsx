import './payButtonStyle.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { deleteInvoice } from '../../models/data';

export default function PayButton({ invoiceNumber }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickEvent = (number) => {
    return () => {
      console.log('Deleting invoice ' + number);
      deleteInvoice(number);
      console.log(`invoice ${number} deleted`);
      navigate(`/invoices${location.search}`)
    }
  }
  return (
    <button
      className='payBtn'
      onClick={handleClickEvent(invoiceNumber)}
    >
      Pay Invoice
    </button>
  )
}