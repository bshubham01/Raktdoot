
import "./App.css";
import Showcase from './pages/Home/Showcase';
import Footer from './components/Footer';
import Statistics from './pages/Home/Statistics';
import Operation from './pages/Home/Operation';
import Info from './pages/Home/Info';
import Availability from "./pages/Availability/Availability";
import DonateBlood from './pages/DonateBlood/DonateBlood';
import Login from './pages/Login/Login';
import Host from "./pages/Host/Host";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/Profile/ProfileEdit"
import Community from './pages/Community/Community'
import AdminMess from "./pages/Community/AdminMess";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import { useAuthContext } from "./hooks/useAuthContext";
import QuickLinks from "./pages/Home/QuickLinks/QuickLinks";
import EligibilityQuiz from "./pages/EligibilityQuiz/EligibilityQuiz";
import IronDeficiency from "./pages/Home/QuickLinks/IronDeficiency/IronDeficiency";
import HowIGive from "./pages/Home/QuickLinks/HowIGive/HowIGive";
import PostDetails from "./pages/Community/PostDetails";
import HostSuccess from "./pages/Host/HostSuccess";
import Blogs from "./pages/Profile/Blogs";
import CreateBlog from "./pages/Profile/CreateBlog";
import Success from "./pages/Profile/Success";
import BlogDetails from "./pages/Profile/BlogDetails";

function App() {

  const {user, authIsReady} = useAuthContext();
  return (
    <div className="App">
        
        <Navbar />
        {!authIsReady && <h1>Loading</h1>}

        {authIsReady && (

        <Switch>
          <Route path="/" exact>
            
            <Showcase />
            <QuickLinks />
            <Statistics />
            <Operation />
            <Info />
            <Footer />
            
            
          </Route>
          {user && <Route path={`/${user.uid}`} >
            <Showcase />
            <QuickLinks />
            
            <Statistics />
            <Operation />
            <Info />
            <Footer />
            
          </Route>}

          <Route path="/donate" exact>
            {!user && <Redirect to="/login" />}
            {user && <DonateBlood />}
          </Route>

          <Route path="/login" exact>
            {user && <Redirect to="/" />}
            {!user && <Login />}
          </Route>

          <Route path="/signup" exact>
            {user && <Redirect to="/" />}
            {!user && <Signup />}
          </Route>

          <Route path="/availability" exact>
            {!user && <Redirect to="/login" />}
            {user && <Availability />}
          </Route>

          <Route path="/host" exact>
            {!user && <Redirect to="/login" />}
            {user && <Host />}
          </Route>

          <Route path="/host/success">
          {!user && <Redirect to="/login" />}
            {user && <HostSuccess />}
          </Route>
          
          <Route path="/profile/:id" exact>
            {!user && <Redirect to="/login" />}
            {user && <Profile />}
          </Route>

          <Route path="/profile/:id/blogs" exact>
            {!user && <Redirect to="/login" />}
            {user && <Blogs />}
          </Route>

          <Route path="/profile/:id/blogs/:bid" exact>
            {!user && <Redirect to="/login" />}
            {user && <BlogDetails />}
          </Route>

          <Route path="/profile/:id/create-blog" exact>
            {!user && <Redirect to="/login" />}
            {user && <CreateBlog />}
          </Route>

          <Route path="/success">
          {!user && <Redirect to="/login" />}
            {user && <Success />}
          </Route>


          
          <Route path="/community" exact>
            {!user && <Redirect to="/login" />}
            {user && <Community />}
          </Route>

          
          <Route path="/blood/eligibiltyQuiz" exact>
            {/* {!user && <Redirect to="/login" />}
            {user && <EligibilityQuiz />} */}
            <EligibilityQuiz />
          </Route>

          <Route path="/iron-deficiency" exact>
            {/* {!user && <Redirect to="/login" />}
            {user && <IronDeficiency />} */}
            <IronDeficiency />
          </Route>

          <Route path="/making-your-donation" exact>
            {/* {!user && <Redirect to="/login" />}
            {user && <HowIGive />} */}
            <HowIGive />
          </Route>

          <Route path="/edit" exact>
            {!user && <Redirect to="/login" />}
            {user && <ProfileEdit />}
          </Route>


          <Route path="/admin-post">
            <AdminMess />
          </Route>

          <Route path="/community/:pid">
            <PostDetails />
          </Route>


        </Switch>
        )}
    </div>
  );
}

export default App;
