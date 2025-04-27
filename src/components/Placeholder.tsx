import React, { ReactNode } from 'react';

function Placeholder({ msg, children }: { msg: string; children: ReactNode }) {
  return (
    <div className="flex items-center flex-col gap-3 justify-center h-full">
      <h3>{msg}</h3>
      {children}
    </div>
  );
}

export default Placeholder;
