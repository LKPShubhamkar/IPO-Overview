export const maskMobile = (mobile) => {
  if (!mobile) return "";
  return `******${mobile.slice(-2)}`;
};

export const maskEmail = (email) => {
  if (!email) return "";

  const [username, domain] = email.split("@");

  if (username.length <= 1) {
    return `*@${domain}`;
  }

  return `${username[0]}${"*".repeat(Math.max(username.length - 1, 1))}@${domain}`;
};
