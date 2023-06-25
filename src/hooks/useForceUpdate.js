import { useState } from "react";

function useForceUpdate() {
  const [, setUpdater] = useState({});
  return function () {
    setUpdater({});
  };
}

export { useForceUpdate };
