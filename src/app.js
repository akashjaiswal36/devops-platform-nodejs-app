const express = require('express');
const app = express();

app.use('/', require('./routes/ui'));
app.use('/health', require('./routes/health'));
app.use('/version', require('./routes/version'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 App running on port ${PORT}`);
});

// Below code is to fail the pipeline to check rollback
// app.js / server.js
app.get("/health", (req, res) => {
  throw new Error("Simulated production failure");
});
