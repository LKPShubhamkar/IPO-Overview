import { commonApi } from ".";

export const fetchIpoApi = () => {
  return commonApi("Fundamental/IPODashboard", {}, "GET");
};

export const fetchIpoDetailApi = (ipoId: number) => {
  return commonApi(`Fundamental/IPODetail/${ipoId}`, {}, "GET");
};

// export const verifyOtpApi = (mobileNo: string, otp: string) => {
//   return commonApi("Auth/CommonSendOrVerifyOTP", {
//     sourceType: "GIFTCity",
//     mobileNo,
//     emailId: "",
//     otp,
//     action: "Verify",
//   });
// };
