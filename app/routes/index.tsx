import { redirect } from "remix";

export const loader = async () => {
  return redirect(`/maps/Yorn/${encodeURIComponent("Unfinished Garden")}`);
};
