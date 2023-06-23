import React from "react";

export default function IF({ condition, THEN, ELSE = null }) {
  return <>{condition ? THEN : ELSE}</>;
}
