import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CustomTable = ({ columns, rows, getRowId }: any) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 0,
      }}
    >
      <Table
        sx={{
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "collapse",
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              height: "37px",
              borderTop: "1px solid #e8e8e8",
              borderBottom: "1px solid #e8e8e8",
            }}
          >
            {columns.map((column) => (
              <TableCell
                key={column.key}
                sx={{
                  width: column.width,
                  height: "37px",
                  padding: "0 16px",
                  borderBottom: "none",
                  fontSize: "14px",
                  color: "#858585",
                  whiteSpace: "nowrap",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={getRowId(row)}
              sx={{
                height: "70px",

                "&:last-child td": {
                  borderBottom: "none",
                },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  sx={{
                    height: "70px",
                    padding: "8px 16px",
                    borderBottom: "1px solid #e8e8e8",
                    fontSize: "14px",
                    color: "#414451",
                    verticalAlign: "middle",
                  }}
                >
                  {column.render ? column.render(row) : row[column.key] || "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
