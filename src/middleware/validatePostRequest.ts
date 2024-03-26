import { Context, Next } from 'koa';
import { z, ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

export function validatePostRequest(schema: z.ZodObject<any, any>) {
  return async (ctx: Context, next: Next) => {
    try {
      await schema.parseAsync(ctx.request.body);
      await next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }));
        ctx.status = StatusCodes.BAD_REQUEST;
        ctx.body = { error: 'Invalid data', details: errorMessages };
      } else {
        ctx.status = StatusCodes.INTERNAL_SERVER_ERROR;
        ctx.body = { error: 'Internal Server Error' };
      }
    }
  };
}
