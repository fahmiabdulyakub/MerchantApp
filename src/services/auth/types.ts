export type SendOTPType = {
  country_dialling_code: string;
  mobile_number: string;
};

export type VerifyOTPType = {
  otp: string;
  session_id: string;
};

export type SendOTPResponseType = {
  session_id: string;
};

export type VerifyOTPResponseType = {
  token: string;
};
