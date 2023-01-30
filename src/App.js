import RightDrawer from "component/drawer/index";
import { Fragment } from "react";
import Navigation from "routing/index";

function App() {
  console.log("demo");
  return (
    <Fragment>
      <Navigation />
      <RightDrawer />
    </Fragment>
  );
}

export default App;
