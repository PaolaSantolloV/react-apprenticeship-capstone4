import React from "react";
import GlobalProvider from "./context/global/Global.provider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  );
}

export default App;
