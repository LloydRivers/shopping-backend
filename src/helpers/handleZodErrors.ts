/* eslint-disable */

import { Context } from 'koa';
import { ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

export function handleZodError(ctx: Context, error: any) {
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
