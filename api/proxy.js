export default async function handler(req, res) {
    const backendURL = "http://expensetracker-env.eba-pxxfnkz2.ap-southeast-2.elasticbeanstalk.com";
  
    const target = backendURL + req.url; // forward same path
  
    try {
      const response = await fetch(target, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          ...req.headers,
        },
        body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
      });
  
      const data = await response.text();
  
      res.status(response.status).send(data);
    } catch (err) {
      res.status(500).json({ error: "Proxy error", details: err.toString() });
    }
  }
  