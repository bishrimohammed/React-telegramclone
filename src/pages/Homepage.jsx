import Sidebar from "../components/sidebar";

//import img from "./assets/_F2A3857_1660135787480_1660135869754.JPG";

import Friends from "../components/friends/Friends";
import SearchForm from "../components/friends/SearchForm";
import Chat from "../components/chatDetails/Chat";
const Homepage = () => {
  return (
    <div className="wrapper container-fluid  px-0 py-0 d-flex ">
      <Sidebar />
      <div className=" main_container w-100 flex-grow-1">
        <div className=" d-flex h-100 w-100 ">
          <div className="middle_container   d-md-flex flex-column d-none px-0 position-relative">
            <SearchForm />
            <Friends />
          </div>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
