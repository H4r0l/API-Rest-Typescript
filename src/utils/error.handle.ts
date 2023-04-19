import { Response } from "express";

const handleHttp = (
  res: Response,
  error: string,
  errorRaw?: any,
  statusCode?: number
) => {
  console.log(errorRaw);
  res.status(statusCode || 500);
  res.send({ error });
};
export { handleHttp };
