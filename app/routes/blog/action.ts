import { unstable_defineAction as defineAction } from "@remix-run/node";
import resolvers from "~/resolvers";

const action = defineAction(async ({ request }) => {
  const { method } = request;
  const { type, ...data } = await request.json();

  if (method === "POST") {
    if (type === "post") return await resolvers.create.post(data);
    if (type === "category") return await resolvers.create.category(data);
  };

  if (method === "DELETE") {
    if (type === "post") return await resolvers.delete.post(data.id);
    if (type === "category") return await resolvers.delete.category(data.id);
  };

  if (method === "PATCH") {
    if (type === "post") return await resolvers.update.post(data);
  };

  return null;
})

export default action;