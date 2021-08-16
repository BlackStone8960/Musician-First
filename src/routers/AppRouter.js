import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Filter1 from "../components/filter/Filter1";
import Filter2 from "../components/filter/filter2/Filter2";
import Filter3 from "../components/filter/filter3/Filter3";
import MusicianPage from "../components/MusicianPage/MusicianPage";
import EditProfile from "../components/userAccount/EditProfile";
import NotFoundPage from "../components/NotFoundPage";
import TopPage from "../components/TopPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import FlatRoute from "./FlatRoute";
import SignUp from "../components/userAccount/SignUp";
import LoginPage from "../components/auth/LoginPage";
import ConfirmSendingMail from "../components/auth/ConfirmSendingMail";
import SentMail from "../components/auth/SentMail";
import PrivacyPolicy from "../components/legalDocuments/PrivacyPolicy";
import TermsAndConditions from "../components/legalDocuments/TermsAndConditions";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={TopPage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} />
        <FlatRoute path="/signup" component={SignUp} />
        <FlatRoute path="/filter1" component={Filter1} />
        <FlatRoute path="/filter2/:category" component={Filter2} />
        <FlatRoute path="/filter3" component={Filter3} />
        <FlatRoute path="/privacy-policy" component={PrivacyPolicy} />
        <FlatRoute
          path="/terms-and-conditions"
          component={TermsAndConditions}
        />
        <FlatRoute path="/MusicianPage/:id" component={MusicianPage} />
        <PrivateRoute path="/profile" component={EditProfile} />
        <PrivateRoute path="/change_password" component={ConfirmSendingMail} />
        <PrivateRoute path="/sentmail" component={SentMail} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default };
