import type { ReactNode } from 'react';
import React from 'react';

import { Card, CardContent, CardHeader } from './ui/card';

function CardWrapper({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm">{description}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default CardWrapper;
