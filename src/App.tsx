import React from "react";
import { CalculatorPage } from "./pages/Calculator";
import { CalculatorProvider } from "./providers/Calculator";
import Global from "./styles/global";

function App() {
  return (
    <>
      <CalculatorProvider>
        <Global />
        <CalculatorPage />
      </CalculatorProvider>
    </>
  );
}

export default App;