import { redirect } from "remix";

export const loader = async () => {
  return redirect(`/maps/World/Arkesia?tile=0`);
};
