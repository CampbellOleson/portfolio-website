module.exports = {
  user: "notifications@campbelloleson.dev",
  pass: "?I5*1^]#YN+k",
  host: "premium44.web-hosting.com",
  port: 465,
  URL:
    process.env.NODE_ENV === "production"
      ? "https:/campbelloleson.dev/send"
      : "http://localhost:3000/send"
};
