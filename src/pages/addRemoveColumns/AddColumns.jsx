import React from "react";
import DataEditor from "@glideapps/glide-data-grid";
import {
  useMockDataGenerator, 
  useAllMockedKinds,
  BeautifulWrapper,
  Description,
  MoreInfo,
  PropName,
  KeyName,
} from "./utils";

const defaultProps = {
  smoothScrollX: true,
  smoothScrollY: true,
  getCellsForSelection: true,
  width: "100%",
  height: "100%",
};

export const AddColumns = (p) => {
//   const { cols, getCellContent } = useMockDataGenerator(p.columnsCount);
  const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
  const ref = React.useRef(null);

  const onClick = React.useCallback(() => {
    void ref.current?.appendRow(3, false);
  }, [ref]);

  return (
    <BeautifulWrapper
      title="appendRow Ref"
      description={
        <>
          <Description>
            Adding data can also be triggered from outside of{" "}
            <PropName>DataEditor</PropName>
          </Description>
          <MoreInfo>
            By calling <PropName>appendRow</PropName> on a{" "}
            <PropName>ref</PropName> to your grid, you can trigger the append
            elsewhere, like this <KeyName onClick={onClick}>Append</KeyName>{" "}
            button
          </MoreInfo>
        </>
      }
    >
      <DataEditor
        {...defaultProps}
        rowMarkers="number"
        getCellContent={getCellContent}
        experimental={{ strict: true }}
        columns={cols}
        rows={10}
      />
    </BeautifulWrapper>
  );
};

AddColumns.args = {
  columnsCount: 10,
};

AddColumns.argTypes = {
  columnsCount: {
    control: {
      type: "range",
      min: 2,
      max: 200,
    },
  },
};
