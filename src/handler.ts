import amoguses from "./data/amoguses";
import { getRandom } from "./utils/getRandomChoice";

export const handleRequest = async (request: Request): Promise<Response> => {
  switch (request.method) {
    case 'GET': {
      const amogus = getRandom<string>(amoguses);
      return new Response(amogus);
    }
    default:
      return new Response('Amogus not found', {status: 404});
  }
};
