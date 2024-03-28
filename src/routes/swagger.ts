import path from 'path';
import fs from 'fs';

import { koaSwagger } from 'koa2-swagger-ui';

const specFile = path.resolve(__dirname, '../spec/main.json');

const spec = JSON.parse(fs.readFileSync(specFile, 'utf-8'));

export default koaSwagger({ routePrefix: false, swaggerOptions: { spec } });
