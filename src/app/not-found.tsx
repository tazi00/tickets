import Placeholder from '@/components/Placeholder';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

function NotFoundPage() {
  return (
    <Placeholder msg="Sorry Not Found Your Page">
      <Link href={'/'} className="underline underline-offset-8">
        Go To Home
      </Link>
    </Placeholder>
  );
}

export default NotFoundPage;
