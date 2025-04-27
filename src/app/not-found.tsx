import Link from 'next/link';
import React from 'react';

import Placeholder from '@/components/Placeholder';

function NotFoundPage() {
  return (
    <Placeholder msg="Sorry Not Found Your Page">
      <Link href="/" className="underline underline-offset-8">
        Go To Home
      </Link>
    </Placeholder>
  );
}

export default NotFoundPage;
