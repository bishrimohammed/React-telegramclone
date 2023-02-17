import "./index.css";
import Sidebar from "./components/sidebar";

import img from "./assets/_F2A3857_1660135787480_1660135869754.JPG";

import Friends from "./components/friends/Friends";
import SearchForm from "./components/friends/SearchForm";
import Chat from "./components/chatDetails/Chat";
import {
  Attachment,
  LocalPhone,
  MicNoneRounded,
  Mood,
  MoreVert,
  Search,
  Splitscreen,
} from "@mui/icons-material";

function App() {
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
          {/*
          <div className="detail_container   h-100 position-relative">
         <div className="profile_detail  w-100 d-flex px-4 justify-content-between align-items-center">
              <div className="profile_name">
                <div className="fw-semibold">Guysa</div>
                <div className="small">last seen recently</div>
              </div>
              <div className="profile_icon d-flex align-items-center">
                <div className="ps-lg-5 ps-4">
                  <Search />
                </div>
                <div className="ps-lg-5 ps-4">
                  <LocalPhone />
                </div>
                <div className="ps-lg-5 ps-4">
                  <Splitscreen />
                </div>
                <div className="ps-lg-5 ps-4">
                  <MoreVert />
                </div>
              </div>
            </div>
            <div className="chatDetail px-2">
              <div className="pt-3 position-relative">
                <div className="inmessage d-flex flex-row mb-2 justify-content-start">
                  <img src={img} alt="avatar 1" className="rounded-circle" />
                  <div className="px-2 ms-3 mb-1 position-relative   bg-white ">
                    <p className="mb-0 small ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. lorem30Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Temporibus ea quaerat sunt, delectus
                    </p>
                    <p className="small mb-0 messageTime  text-muted ">
                      12:00 PM | Aug 13
                    </p>
                  </div>
                </div>

                <div className=" outmesssage d-flex mb-2 flex-row justify-content-end">
                  <div className="px-2 me-3 mb-1 d-flex flex-column  text-white position-relative  bg-primary">
                    <p className="small mb-0 ">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.Lorem
                    </p>
                    <p className="small messageTime   text-white-50  align-self-end">
                      12:00 PM | Aug 13
                    </p>
                  </div>
                  <img src={img} alt="avatar 1" className="rounded-circle" />
                </div>
              </div>
            </div>
            <div className="messageInput bg-white w-100 px-3 d-flex align-items-center">
              <div className="text-muted">
                <Attachment />
              </div>
              <div className="flex-grow-1 mx-2">
                <input
                  type="text"
                  className="form-control-lg w-100 border-0"
                  placeholder="write messages..."
                />
              </div>
              <div className="me-4 text-muted">
                <Mood />
              </div>
              <div className="text-muted">
                <MicNoneRounded />
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
