import React, { FC } from "react";

interface Props {
  label?: string;
}

const PageHeader: FC<Props> = ({ label }) => {
  return (
    <div className="container mx-auto py-10 text-center text-7xl font-semibold">
      {label}
    </div>
  );
};

export default PageHeader;
