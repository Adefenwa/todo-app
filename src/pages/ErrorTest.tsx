import { useState } from "react";

export default function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("Test error triggered!");
  }

  return (
    <div>
      <h1>Error Test Page</h1>
      <button onClick={() => setShouldError(true)}>Trigger Error</button>
    </div>
  );
}
