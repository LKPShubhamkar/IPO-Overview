import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GetIPOCategoryListBySymbolApi } from "../../../services/api";

const InvestorType = ({ category, data, onChange }: any) => {
  console.log(category, data, "category,options");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const ipoDetails = async () => {
      try {
        const payload = {
          scripID: data?.BSEScriptCode,
        };
        const response = await GetIPOCategoryListBySymbolApi(payload);
        setOptions(response?.data || []);
        console.log("IPO Order Response:", response);
      } catch (error) {
        console.error("Failed to fetch IPO applications:", error);
      }
    };

    ipoDetails();
  }, [data?.BSEScriptCode]);

  return (
    <Box sx={{ mt: 1 }}>
      <Typography
        sx={{
          fontSize: 11,
          color: "#858585",
          mb: 0.7,
        }}
      >
        Investor Type
      </Typography>

      <Box
        component="select"
        value={category}
        onChange={(e: any) => onChange(e.target.value)}
        sx={{
          width: "100%",
          height: 44,
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          px: 1.5,
          fontSize: 13,
          backgroundColor: "#fff",
          outline: "none",
          cursor: "pointer",

          "&:focus": {
            borderColor: "#0066b3",
          },
        }}
      >
        {options.map((item: any) => (
          <option key={item.categoryKey} value={item.categoryKey}>
            {item.categoryDescription}
          </option>
        ))}
      </Box>
    </Box>
  );
};

export default InvestorType;
