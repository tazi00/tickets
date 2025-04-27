import React from 'react';

import Spinner from '@/components/Spinner';

function TicketLoadingPage() {
  return (
    <section className="ticket-sec mt-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    </section>
  );
}

export default TicketLoadingPage;
