import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

routes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;
