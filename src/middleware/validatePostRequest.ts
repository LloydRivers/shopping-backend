/* eslint-disable */

import { Context, Next } from 'koa';
import { z } from 'zod';
import { handleZodError } from '../helpers/handleZodErrors';

export function validatePostRequest(schema: z.ZodObject<any, any>) {
  return async (ctx: Context, next: Next) => {
    try {
      await schema.parseAsync(ctx.request.body);
      await next();
    } catch (error) {
      handleZodError(ctx, error);
    }
  };
}
