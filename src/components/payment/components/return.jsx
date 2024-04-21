import { useEffect, useState } from "react";
import { SuccessComponent } from "./success";

export function ReturnComponent() {
  const [status, setStatus] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setClientEmail(data.custumer_email);
      });
  }, []);

  console.log(status, clientEmail)

  if (status === "complete") {
    return <SuccessComponent clientEmail={clientEmail} />;
  }

  if (status === "open") {
    return <SuccessComponent clientEmail={clientEmail} />;
  }

  return <faTruckLoading/>;
}
