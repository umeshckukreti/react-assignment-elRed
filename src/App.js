import RightDrawer from "component/drawer/index";
import { ContextProvider } from "context/index";
import { Fragment } from "react";
import Navigation from "routing/index";

function App() {
  console.log("demo");
  return (
    <Fragment>
      <ContextProvider>
        <Navigation />
      </ContextProvider>
    </Fragment>
  );
}

export default App;
