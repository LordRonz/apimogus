export const handleRequest = async (request: Request): Promise<Response> => {
  return new Response(`AMOGUS ${request.method}`);
};
