import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./SignIn";
import Rewards from "./Rewards";
import Gifts from "./GiftCards";
import Finder from "./FindStore";
import JoinNow from "./JoinNow";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" >
      <Main />
      <Footer />
      </Route>
      <Route path="/menu">
      <Menu />
      <Footer />
      </Route>
      <Route path="/rewards">
      <Rewards />
      <Footer />
      </Route>
      <Route path="/giftCards">
      <Gifts />
      <Footer />
      </Route>
      <Route path="/findStore">
      <Finder />
      </Route>
      <Route path="/signIn">
        <SignIn />
        <Footer />
      </Route>
      <Route path="/joinNow">
        <JoinNow />
        <Footer />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
