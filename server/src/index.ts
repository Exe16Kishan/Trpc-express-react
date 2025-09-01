import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './router';
import { createContext } from './trpc';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter ,
    createContext,
  }),
);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript Express!');
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});