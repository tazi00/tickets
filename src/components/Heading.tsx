import React from 'react';

type HeadingProps = {
  title: string;
  description?: string;
};

function Heading({ title, description }: HeadingProps) {
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
    </>
  );
}

export default Heading;
