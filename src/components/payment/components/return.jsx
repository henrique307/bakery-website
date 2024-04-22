import { useEffect, useState } from "react";
import { SuccessComponent } from "./success";
import { stripeInstance } from "../../..";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

export function ReturnComponent() {
  const [status, setStatus] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    async function getSession() {
      const session = await stripeInstance.checkout.sessions.retrieve(
        sessionId
      );

      console.log(session);

      setStatus(session.status);
      setClientEmail(session.customer_details.email);
    }

    getSession();
  }, []);

  console.log(status, clientEmail);

  if (status === "complete") {
    return <SuccessComponent clientEmail={clientEmail} />;
  }

  if (status === "open") {
    return <SuccessComponent clientEmail={clientEmail} />;
  }

  return <></>;
}
