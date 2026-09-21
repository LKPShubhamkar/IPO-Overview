import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const data = [
  {
    scripid: "VEEGALAND",
    applicationno: "41844498",
    category: "IND",
    applicantname: "NITIN DEEPCHAND SELOT",
    depository: "CDSL",
    dpid: "0",
    clientbenfid: "1202350000281511",
    chequereceivedflag: "Y",
    chequeamount: "14980.0000",
    chequeno: "",
    panno: "AMGPS5982F",
    bankname: "8888",
    location: "UPIIDL",
    accountnumber_upiid: "v9404283094@upi",
    ifsccode: "",
    referenceno: "",
    entrydatetime: "15-09-2026 16:57:15",
    lastmodifieddatetime: "15-09-2026 16:57:15",
    dpstatus: "S",
    dpremarks: "",
    sponsorbankpaystatus: "10",
    sponsorbankactiontime: "15-09-2026 21:51:21",
    sponsorbankamtblocked: "14980.00",
    rejectreason: "10-- REQUEST SENT TO INVESTORS UPI APP FOR ACCEPTANCE",
    loginid: "",
    branchcode: "39",
    subbrokercode: "",
    errorcode: "0",
    message: "",
    bids: [
      {
        bidid: "1293708612",
        quantity: "107.0000",
        rate: "140.0000",
        cuttoffflag: "0",
        orderno: "2172775",
        orderstatus: "N",
      },
    ],
  },
];

const ViewDetails = ({
  onClose,
  propsData,
}: {
  onClose: () => void;
  propsData: any;
}) => {
  console.log("data ViewDetails", propsData);
  // const [data, setData] = useState([]);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // useEffect(() => {
  //   const ipoDetails = async () => {
  //     try {
  //       const payload = {
  //         scripID: "NSE",
  //         applicationNos: ["46973362"],
  //       };

  //       const response = await myIPOApplicationsApi(payload);

  //       console.log("IPO Order Response:", response);

  //       const result = response ?? [];

  //       // setAppliedData(formattedData);
  //     } catch (error) {
  //       console.error("Failed to fetch IPO applications:", error);
  //     }
  //   };

  //   ipoDetails();
  // }, []);

  const ipo = data[0];
  const bid = ipo.bids?.[0];

  const bidAmount = Number(ipo.sponsorbankamtblocked || 0).toLocaleString(
    "en-IN",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  );

  const bidQuantity = Number(bid?.quantity || 0);
  const bidRate = Number(bid?.rate || 0);

  const formatDate = (dateTime: string) => {
    if (!dateTime) return "-";

    const [date, time] = dateTime.split(" ");
    const [day, month, year] = date.split("-");

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${day} ${months[Number(month) - 1]} ${year}${
      time ? `, ${time}` : ""
    }`;
  };

  const getStatus = () => {
    if (ipo.rejectreason?.includes("REQUEST SENT")) {
      return "UPI Pending";
    }

    if (ipo.dpstatus === "S") {
      return "Submitted";
    }

    return ipo.message || "Submitted";
  };

  return (
    <Box
      sx={{
        width: "100%",
        // minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#414451",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: 70,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #e5e5e5",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              border: "1px solid #e5e5e5",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 600,
              color: "#7bbd00",
            }}
          >
            {ipo.scripid.substring(0, 2)}
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {ipo.scripid}
            </Typography>

            <Typography
              sx={{
                display: "inline-block",
                mt: 0.3,
                px: 0.5,
                fontSize: 10,
                color: "#4caf50",
                backgroundColor: "#eaf7ec",
                borderRadius: 0.5,
              }}
            >
              Active
            </Typography>
          </Box>
        </Box>

        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            width: 26,
            height: 26,
            border: "1px solid #555",
            borderRadius: "50%",
          }}
        >
          <CloseIcon sx={{ fontSize: 17 }} />
        </IconButton>
      </Box>

      {/* Success */}
      <Box
        sx={{
          textAlign: "center",
          pt: 2.5,
        }}
      >
        <Box
          sx={{
            width: 74,
            height: 74,
            mx: "auto",
            borderRadius: "50%",
            backgroundColor: "#edf8ef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckIcon
            sx={{
              fontSize: 52,
              color: "#4caf50",
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 2.5,
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Your IPO request has been submitted successfully.
        </Typography>
      </Box>

      {/* Amount / Date */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2.5,
          mt: 2.5,
        }}
      >
        <Typography sx={{ fontSize: 12 }}>
          <Box component="span" sx={{ color: "#999", mr: 1 }}>
            Bid Amount
          </Box>
          <Box component="span" sx={{ fontSize: 14 }}>
            ₹{bidAmount}
          </Box>
        </Typography>

        <Typography sx={{ fontSize: 12 }}>
          <Box component="span" sx={{ color: "#999", mr: 1 }}>
            Submitted on
          </Box>
          <Box component="span" sx={{ fontSize: 14 }}>
            {formatDate(ipo.entrydatetime)}
          </Box>
        </Typography>
      </Box>

      {/* IPO Bid Snapshot */}
      <Box
        sx={{
          mx: 2.5,
          mt: 2.5,
          border: "1px solid #e2e2e2",
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* 40% */}
        <Box
          sx={{
            p: 2,
            flex: isMobile ? "auto" : "0 0 45%",
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: 500,
              mb: 1.5,
            }}
          >
            IPO Bid Snapshot
          </Typography>

          <InfoRow label="UPI Handle" value={ipo.accountnumber_upiid || "-"} />

          <InfoRow label="Category" value={ipo.category || "-"} />
        </Box>

        {/* 60% */}
        <Box
          sx={{
            p: 2,
            flex: isMobile ? "auto" : "0 0 55%",
            minWidth: 0,
            backgroundColor: "#f3f6fa",
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 500,
              mb: 1,
            }}
          >
            Stock Exchange will send mandate to your UPI app
          </Typography>

          <Typography sx={stepStyle}>
            1. Your IPO request has been sent to stock exchange
          </Typography>

          <Typography sx={stepStyle}>
            2. Exchange will send UPI request to confirm payment
          </Typography>

          <Typography sx={stepStyle}>
            3. Check your UPI app for pay request for IPO
          </Typography>
        </Box>
      </Box>

      {/* Order Summary */}
      <Box
        sx={{
          mx: 2.5,
          mt: 2.5,
          mb: 2.5,
          border: "1px solid #e2e2e2",
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 17,
            fontWeight: 500,
            mb: 1.5,
          }}
        >
          Order Summary
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            columnGap: 2,
            rowGap: 1.5,
          }}
        >
          <SummaryItem label="Status" value={getStatus()} />

          <SummaryItem label="Order Type" value="IPO" />

          <SummaryItem label="Application Number" value={ipo.applicationno} />

          <SummaryItem
            label="Order Time"
            value={formatDate(ipo.entrydatetime)}
          />

          <SummaryItem
            label="Bid 1 Quantity / Price"
            value={`${bidQuantity} / ₹${bidRate.toFixed(2)}`}
          />
          <SummaryItem label="Allotment Date" value="---x---" />

          <SummaryItem label="Refund Date" value="---x---" />
          <SummaryItem label="Transfer Date" value="---x---" />
          <SummaryItem label="Listing Date" value="---x---" />

          {/* <SummaryItem label="Bid ID" value={bid?.bidid || "-"} />

          <SummaryItem label="Order Number" value={bid?.orderno || "-"} />

          <SummaryItem label="Bid Status" value={bid?.orderstatus || "-"} />

          <SummaryItem label="Depository" value={ipo.depository || "-"} /> */}

          <SummaryItem
            label="CDSL Demat Account"
            value={ipo.clientbenfid || "-"}
          />

          <SummaryItem label="DP ID" value={ipo.dpid || "-----"} />

          <SummaryItem label="Client PAN" value={ipo.panno || "-"} />

          {/* <SummaryItem label="Sponsor Bank" value={ipo.bankname || "-"} />

          <SummaryItem label="Amount Blocked" value={`₹${bidAmount}`} />

          <SummaryItem
            label="Sponsor Bank Status"
            value={ipo.sponsorbankpaystatus || "-"}
          />

          <SummaryItem label="Mandate Status" value={ipo.rejectreason || "-"} />

          <SummaryItem
            label="Sponsor Bank Action Time"
            value={formatDate(ipo.sponsorbankactiontime)}
          />

          <SummaryItem label="Branch Code" value={ipo.branchcode || "-"} /> */}
        </Box>
      </Box>
    </Box>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 1,
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          color: "#999",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          textAlign: "right",
          wordBreak: "break-word",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const SummaryItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 11,
          color: "#999",
          mb: 0.5,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const stepStyle = {
  fontSize: 12,
  color: "#999",
  mb: 1,
};

export default ViewDetails;
