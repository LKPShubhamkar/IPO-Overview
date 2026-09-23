import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const [pan, setPan] = useState("");
  const [subbroker, setSubbroker] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const labelStyle = {
    fontSize: 11,
    color: "#858585",
    mb: 0.7,
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      height: 44,
      borderRadius: 1,
      fontSize: 13,
      backgroundColor: "#fff",
      "& fieldset": {
        borderColor: "#e5e5e5",
      },
      "&:hover fieldset": {
        borderColor: "#0066b3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0066b3",
      },
    },
    "& .MuiInputBase-input": {
      px: 1.5,
    },
  };

  const buttonStyle = {
    mt: 2,
    height: 42,
    borderRadius: 1,
    backgroundColor: "#0066b3",
    textTransform: "none",
    fontSize: 13,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#005a9e",
      boxShadow: "none",
    },
  };

  const handleGetDetails = async () => {
    if (!pan || pan.length !== 10) return;

    setLoading(true);

    // API call here
    // const response = await fetchSubbrokerApi(pan);
    // setSubbroker(response?.body?.subbroker);

    setSubbroker("LKP Securities Ltd.");
    setLoading(false);
  };

  const handleSendOtp = async () => {
    if (!subbroker) return;

    setLoading(true);

    // Send OTP API here

    setOtpSent(true);
    setLoading(false);
  };

  const handleLogin = async () => {
    if (otp.length !== 6) return;

    setLoading(true);

    // Login API here

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f6f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: 2,
          p: { xs: 2.5, sm: 3.5 },
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            color: "#222",
            mb: 0.5,
          }}
        >
          Login
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            color: "#888",
            mb: 3,
          }}
        >
          Login using your PAN card
        </Typography>

        <Typography sx={labelStyle}>PAN Card</Typography>

        <TextField
          fullWidth
          value={pan}
          onChange={(e) => setPan(e.target.value.toUpperCase())}
          placeholder="Enter PAN"
          slotProps={{
            htmlInput: {
              maxLength: 10,
            },
          }}
          sx={inputStyle}
        />

        {!subbroker && (
          <Button
            fullWidth
            variant="contained"
            onClick={handleGetDetails}
            disabled={loading || pan.length !== 10}
            sx={buttonStyle}
          >
            {loading ? "Please wait..." : "Continue"}
          </Button>
        )}

        {subbroker && (
          <>
            <Box sx={{ mt: 2 }}>
              <Typography sx={labelStyle}>Subbroker</Typography>

              <TextField fullWidth value={subbroker} disabled sx={inputStyle} />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={labelStyle}>OTP</Typography>

              <TextField
                fullWidth
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter OTP"
                slotProps={{
                  htmlInput: {
                    maxLength: 6,
                    inputMode: "numeric",
                  },
                }}
                sx={inputStyle}
              />
            </Box>

            {!otpSent ? (
              <Button
                fullWidth
                variant="contained"
                onClick={handleSendOtp}
                disabled={loading}
                sx={buttonStyle}
              >
                {loading ? "Please wait..." : "Send OTP"}
              </Button>
            ) : (
              <>
                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: 11,
                    color: "#777",
                  }}
                >
                  OTP sent to your registered mobile number
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogin}
                  disabled={loading || otp.length !== 6}
                  sx={buttonStyle}
                >
                  {loading ? "Please wait..." : "Login"}
                </Button>
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Login;
