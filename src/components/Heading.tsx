import React from 'react';

type HeadingProps = {
  title: string;
  description?: string;
};

function Heading({ title, description }: HeadingProps) {
  return (
    <div className="border-b border-muted-foreground pb-3 ">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p className="text-sm ">{description}</p>
    </div>
  );
}

export default Heading;
