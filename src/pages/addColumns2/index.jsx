import React from "react";
import DataEditor from "@glideapps/glide-data-grid";
import {
  useMockDataGenerator,
  BeautifulWrapper,
  Description,
  MoreInfo,
  SimpleThemeWrapper,
} from "./utils";

const defaultProps = {
  smoothScrollX: true,
  smoothScrollY: true,
  getCellsForSelection: true,
  width: "100%",
  height: "100%",
};

export const AddColumns2 = (p) => {
  const { cols, getCellContent } = useMockDataGenerator(p.columnsCount);

  return (
    <SimpleThemeWrapper>
      <BeautifulWrapper
        title="Add and remove columns"
        description={
          <>
            <Description>
              You can add and remove columns at your disposal
            </Description>
            <MoreInfo>
              Use the story&apos;s controls to change the number of columns
            </MoreInfo>
          </>
        }
      >
        {/* <Story /> */}
        <DataEditor
          {...defaultProps}
          rowMarkers="number"
          getCellContent={getCellContent}
          experimental={{ strict: true }}
          columns={cols}
          rows={10}
        />
      </BeautifulWrapper>
    </SimpleThemeWrapper>
  );
};

AddColumns2.args = {
  columnsCount: 10,
};

AddColumns2.argTypes = {
  columnsCount: {
    control: {
      type: "range",
      min: 2,
      max: 200,
    },
  },
};
