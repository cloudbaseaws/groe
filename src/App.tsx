import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import Message from "./Message";
import Hello from "./Hello";
import MyComponent from "./MyComponent";
const client = generateClient<Schema>();

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <MyComponent />
    </div>
  );
}

export default App;
