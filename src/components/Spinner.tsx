import { LoaderCircle } from 'lucide-react';
import React from 'react';

function Spinner() {
  return (
    <div className="flex justify-center  items-center self-center ">
      <LoaderCircle className=" h-14 w-14 animate-spin" />
    </div>
  );
}

export default Spinner;
