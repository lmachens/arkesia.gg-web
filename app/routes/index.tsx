import { useEffect } from "react";
import { useNavigate } from "remix";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/maps/Yorn/${encodeURIComponent("Unfinished Garden")}`, {
      replace: true,
    });
  }, []);

  return <></>;
}
