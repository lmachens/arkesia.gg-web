import { redirect } from "remix";

export const loader = async () => {
  return redirect(`/maps/Rethramis/Prideholme?tile=0`);
};
