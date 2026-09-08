import { Box, Button, Typography } from "@mui/material";

const Header = ({ data, onApply }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        px: 1.5,
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          component="img"
          src={data?.company_logo}
          alt={data?.company_name}
          sx={{
            width: 40,
            height: 40,
            objectFit: "contain",
          }}
        />

        <Box>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 500,
              color: "#353844",
            }}
          >
            {data?.company_name}
          </Typography>

          <Typography
            sx={{
              fontSize: 9.5,
              color: "#3aaa55",
              backgroundColor: "#eaf8ed",
              width: "fit-content",
              px: 0.5,
              mt: 0.2,
            }}
          >
            Active
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "#0066b3",
          textTransform: "none",
          fontSize: 11,
          px: 3,
        }}
        onClick={onApply}
      >
        Apply IPO
      </Button>
    </Box>
  );
};

export default Header;
