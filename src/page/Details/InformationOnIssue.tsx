import { Box, Typography } from "@mui/material";

const InformationOnIssue = ({ data }: any) => {
  return (
    <Box>
      <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>
        Information on Issue
      </Typography>

      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 1.5,
        }}
      >
        <Typography sx={{ fontSize: 11, fontWeight: 500 }}>
          About the Company
        </Typography>

        <Typography
          sx={{
            fontSize: 9,
            color: "#999",
            lineHeight: 1.5,
            mt: 0.5,
          }}
        >
          {data?.about_the_company_text}
        </Typography>

        <Box sx={{ borderTop: "1px solid #eee", my: 1 }} />

        <Typography sx={{ fontSize: 11, fontWeight: 500 }}>
          Object of the Issue
        </Typography>

        <Box
          sx={{
            fontSize: 9,
            color: "#999",
            lineHeight: 1.5,
            mt: 0.5,
          }}
        >
          {data?.object_of_the_issue_text}
        </Box>

        <Box sx={{ borderTop: "1px solid #eee", my: 1 }} />

        <Typography sx={{ fontSize: 11, fontWeight: 500 }}>
          Promoters
        </Typography>

        {data?.promoters?.map((promoter: string) => (
          <Typography
            key={promoter}
            sx={{
              fontSize: 9,
              color: "#999",
              mt: 0.5,
            }}
          >
            {promoter}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default InformationOnIssue;
