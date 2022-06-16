// Modules
import { useParams } from 'react-router-dom';

// components
import { getInvoices } from '../../models/data';
import PayButton from '../../components/payButton'


export default function Invoice() {
  const { invoiceId } = useParams();

  const invoice = getInvoices().find(invoice => invoice.number === Number(invoiceId));

  if (!invoice) {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Can not find invoice number <b>{invoiceId}</b> </h2>
      </main>
    )
  }

  return (
    <RenderedInvoice invoice={invoice} />
  )
}

const RenderedInvoice = ({ invoice }) => {

  return <main style={{ padding: "1rem 0" }}>
    <h2>Invoice Number: {invoice.number}</h2>
    <h3>Invoice Name: {invoice.name} </h3>
    <h3>Invoice amount: {invoice.amount} </h3>
    <h3>Invoice due: {invoice.due} </h3>
    <PayButton invoiceNumber={invoice.number} />
  </main>
}
