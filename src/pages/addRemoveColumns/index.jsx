import React from "react";
import { AddColumns } from "./AddColumns";
import { AddColumns2 } from "../addColumns2";

export const AddRemoveColumns = () => {
  return (
    <div>
      <AddColumns2 columnsCount={8} />
      <AddColumns columnsCount={8} />
    </div>
  );
};
