import React from "react";

export default function IF({ condition, children, ELSE = null }) {
  return <>{condition ? children : ELSE}</>;
}
