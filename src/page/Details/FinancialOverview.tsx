import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const FinancialOverview = ({ data }: any) => {
  const [activeGraph, setActiveGraph] = useState("revenue");

  const financialData = useMemo(() => {
    if (!data) return [];

    const parser = new DOMParser();
    const document = parser.parseFromString(data, "text/html");
    const rows = Array.from(document.querySelectorAll("table tr"));

    return rows.slice(1).map((row) => {
      const cells = Array.from(row.querySelectorAll("td")).map(
        (cell) => cell.textContent?.trim() ?? "",
      );

      const parseNumber = (value: any) =>
        Number(value.replace(/,/g, "").replace("%", "")) || 0;

      return {
        period: cells[0],
        revenue: parseNumber(cells[1]),
        profit: parseNumber(cells[2]),
        cashFlow: parseNumber(cells[3]),
        freeCashFlow: parseNumber(cells[4]),
        margins: parseNumber(cells[5]),
      };
    });
  }, [data]);

  const graphOptions = [
    {
      key: "revenue",
      label: "Revenue",
      title: "Revenue from Operations",
      dataKey: "revenue",
      suffix: " Cr",
    },
    {
      key: "profit",
      label: "Net Profit",
      title: "Net Profit",
      dataKey: "profit",
      suffix: " Cr",
    },
    {
      key: "cashFlow",
      label: "Cash Flow",
      title: "Cash Flow from Operations",
      dataKey: "cashFlow",
      suffix: " Cr",
    },
    {
      key: "freeCashFlow",
      label: "Free Cash Flow",
      title: "Free Cash Flow",
      dataKey: "freeCashFlow",
      suffix: " Cr",
    },
    {
      key: "margins",
      label: "Margins",
      title: "Margins",
      dataKey: "margins",
      suffix: "%",
    },
  ] as const;

  const activeOption =
    graphOptions.find((item) => item.key === activeGraph) ?? graphOptions[0];

  const chartData = financialData.map((item) => ({
    period: item.period,
    value: item[activeOption.dataKey],
  }));

  return (
    <Box>
      {/* Heading */}
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          mb: 0.5,
        }}
      >
        Financial Overview
      </Typography>

      {/* Graph Container */}
      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 2,
          mt: 1,
        }}
      >
        {/* Graph Title */}
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: "#252730",
            mb: 2,
          }}
        >
          {activeOption.title}
        </Typography>

        {/* Bar Graph */}
        <Box
          sx={{
            width: "100%",
            height: 250,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="period"
                tick={{
                  fontSize: 10,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fontSize: 10,
                }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) =>
                  activeGraph === "margins" ? `${value}%` : value
                }
              />

              <Tooltip
                contentStyle={{
                  fontSize: 11,
                  borderRadius: 6,
                  border: "1px solid #e5e5e5",
                }}
                formatter={(value: any) => [
                  activeGraph === "margins" ? `${value}%` : `${value} Cr`,
                  activeOption.title,
                ]}
              />

              <Bar
                dataKey="value"
                name={activeOption.title}
                radius={[4, 4, 0, 0]}
                fill={"#2b7bc2"}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Graph Tabs */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,

            overflowX: "auto",
            borderTop: "1px solid #e5e5e5",
            pt: 1,
            "&::-webkit-scrollbar": {
              height: 0,
            },
          }}
        >
          {graphOptions.map((option) => (
            <Box
              key={option.key}
              component="button"
              onClick={() => setActiveGraph(option.key)}
              sx={{
                border: "none",
                backgroundColor: "transparent",
                color: activeGraph === option.key ? "#0861a3" : "#858585",
                fontSize: 11,
                fontWeight: activeGraph === option.key ? 500 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                px: 1,
                py: 0.8,
                borderBottom:
                  activeGraph === option.key
                    ? "2px solid #0861a3"
                    : "2px solid transparent",
                "&:hover": {
                  color: "#0861a3",
                },
              }}
            >
              {option.label}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Existing Financial Table */}
      {/* <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 1.5,
          mt: 2,
          overflow: "auto",

          "& table": {
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "12px",
          },

          "& td": {
            border: "1px solid #eee",
            padding: "6px",
          },

          "& tr:first-of-type": {
            fontWeight: 500,
            backgroundColor: "#f7f7f7",
          },
        }}
        dangerouslySetInnerHTML={{
          __html: data || "",
        }}
      /> */}
    </Box>
  );
};

export default FinancialOverview;
