import React from "react";

export type ChildrenProps = {
  children: React.ReactNode;
};

const MasterLayout: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  return (
    <div className="relative bg-backdrop min-h-screen">
      <div className="top-4 text-center bg-slate-300  w-full">
        <label htmlFor="" className="text-xl font-semibold">
          CATALOG ITEMS
        </label>
      </div>

      <div className="w-full my-5">{children}</div>
    </div>
  );
};

export default MasterLayout;
