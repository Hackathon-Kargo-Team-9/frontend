import React from "react";
import { useRouter } from "next/router";

function DriverDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <div>DriverDetail{id}</div>;
}

export default DriverDetail;
