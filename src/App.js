import { AboutUs } from './components/AboutUs/AboutUs';
import { Member } from './components/Member/Member';
import Header from './components/Header/Header';
import "./App.css";
import MemberList from './components/MembersList/MemberList';
import Loader from './components/Loader/Loader';
// import "./Member.css";
function App() {

  return (
    <div>
      <Header/>
      <div className="Alignment">
      <MemberList/>
      <AboutUs/>
     
     

        </div>

    </div>
  );
}

export default App;
