import React from "react";
import { AddColumns } from "./AddColumns"

export const AddRemoveColumns = ()=>{

  return <div style={{height: '600px',width:'100vw',background:'grey'}}>
    addRemoveColumns 1
    <div style={{height: '500px',width:'100vw',background:'yellow'}}>
      <AddColumns columnsCount={8} />
    </div>
  </div>
}