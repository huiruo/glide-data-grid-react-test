import React from "react";
import DataEditor from "@glideapps/glide-data-grid";
import { useMockDataGenerator } from "./utils";

const defaultProps = {
    smoothScrollX: true,
    smoothScrollY: true,
    getCellsForSelection: true,
    width: "100%",
    height: "100%"
};

export const AddColumns = p => {
    const { cols, getCellContent } = useMockDataGenerator(p.columnsCount);

    return (
        <DataEditor
            {...defaultProps}
            rowMarkers="number"
            getCellContent={getCellContent}
            experimental={{ strict: true }}
            columns={cols}
            rows={10}
        />
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
