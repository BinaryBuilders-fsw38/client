let apiUrl;

if (process.env.NODE_ENV === "production") {
  apiUrl = "http://3.106.253.144";
} else {
  apiUrl = "http://localhost:3000";
}

export default apiUrl;
