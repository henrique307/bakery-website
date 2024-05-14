import { useEffect, useState } from "react";
import { SuccessComponent } from "./success";
import { stripeInstance } from "../../..";
import { Navigate } from "react-router-dom";

export function ReturnComponent() {
  const [status, setStatus] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const queryString = window.location.href.split("#/return?")[1];
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get("session_id");

  useEffect(() => {
    async function getSession() {
      if(!sessionId) return

      const session = await stripeInstance.checkout.sessions.retrieve(
        sessionId
      );

      setStatus(session.status);
      setClientEmail(session.customer_details.email);
    }

    getSession();
  }, []);

  if (!sessionId) {
    return <Navigate to={"/"} />;
  }

  if (status === "complete") {
    return <SuccessComponent clientEmail={clientEmail} />;
  }

  if (status === "open") {
    return <SuccessComponent clientEmail={clientEmail} />;
  }

  return <></>;
}
