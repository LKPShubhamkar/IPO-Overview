import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabItem {
  value: string;
  label: string;
}

interface CustomTabsProps {
  tabs: TabItem[];
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const CustomTabs = ({ tabs, value, onChange }: CustomTabsProps) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      sx={{
        height: "53px",
        minHeight: "53px",

        "& .MuiTabs-list": {
          height: "53px",
          alignItems: "center",
          paddingLeft: "6px",
          gap: "22px",
        },

        "& .MuiTabs-indicator": {
          height: "2px",
          bottom: "15px",
          borderRadius: 0,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={tab.label}
          disableRipple
          sx={{
            minWidth: "auto",
            width: "auto",
            minHeight: "53px",
            height: "53px",

            padding: 0,
            margin: 0,

            textTransform: "none",
            fontSize: "13px",
            lineHeight: "16px",
            fontWeight: 400,

            color: "#969696",

            "&.Mui-selected": {
              color: "#0066B3",
              fontWeight: 500,
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
