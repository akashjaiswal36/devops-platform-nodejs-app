const express = require('express');
const app = express();

app.use('/', require('./routes/ui'));
app.use('/health', require('./routes/health'));
app.use('/version', require('./routes/version'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 App running on port ${PORT}`);
});
