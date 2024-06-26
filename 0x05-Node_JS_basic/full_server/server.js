import express from 'express';
import router from './routes/index.js';

const PORT = 1245;
const app = express();
app.use(router);

app.listen(PORT,
  console.log(`Server running on http://localhost:${PORT}`)
);

export default app;
