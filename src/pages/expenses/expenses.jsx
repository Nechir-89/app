import React, { Suspense } from 'react';
// import Button from '../../components/button';
import Loading from '../../components/loading';

const ActionButton = React.lazy(() => import('../../components/button'));

// const personAge = async () => {
//   return await import('...');
// }

export default function Expenses() {

  return (
    <main style={{ padding: "1rem 0" }}>

      <h2>Expenses</h2>
      <Suspense fallback={<Loading />}>
        <ActionButton text={"Action"} />
      </Suspense>
    </main>
  );
}
