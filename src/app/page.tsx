import Heading from '@/components/Heading';
import { ticketsPath } from '@/utils/paths';
import Link from 'next/link';
import React from 'react';

function HomePage() {
  // useState();

  return (
    <section className="pt-4">
      <div className="container mx-auto">
        <Heading title="Home" description="This is the Home page of Tickets" />
        <div className="text-center mt-4 ">
          <Link href={ticketsPath} className="underline underline-offset-5">
            Go to Tickets
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
