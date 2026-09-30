import { commonApi } from ".";

export const fetchIpoApi = () => {
  return commonApi("Fundamental/IPODashboard", {}, "GET");
};

export const fetchIpoDetailApi = (ipoId: number) => {
  return commonApi(`Fundamental/IPODetail/${ipoId}`, {}, "GET");
};

export const IpoClientDetailsApi = (payload: any) => {
  return commonApi("IPO/GetIpoClientDetails", payload, "POST");
};

export const PlaceIpoOrderApi = (payload: any) => {
  return commonApi("IPO/PlaceIpoOrder", payload, "POST");
};
export const myIPOApplicationsApi = (payload: any) => {
  return commonApi("IPO/GetMyIPOApplications", payload, "POST");
};
export const GetIPOAppEnquiryApi = (payload: any) => {
  return commonApi("IPO/GetIPOAppEnquiry", payload, "POST");
};
export const IPOLoginApi = (payload: any) => {
  return commonApi("IPO/IPOLogin", payload, "POST");
};
export const IPOLoginVerifyOTPApi = (payload: any) => {
  return commonApi("IPO/IPOLoginVerifyOTP", payload, "POST");
};
