import PeopleIcon from "@mui/icons-material/People";
import {
  PersonAddAlt,
  AutoAwesome,
  ChatBubbleOutline,
} from "@mui/icons-material";

const sidebar = () => {
  return (
    <div id="mainTab" className="main_tab py-3">
      <div className="d-flex flex-column align-items-center my-2 w-100">
        <div id="humbergbtn">
          <span className="humberg"></span>
          <span className="humberg"></span>
          <span className="humberg"></span>
        </div>
        <ul className="nav d-flex text-white mt-4 w-100 flex-column text-center align-items-center">
          <li className="py-3 w-100 position-relative">
            <div className="d-flex flex-column text-white-50 text-center align-items-center">
              <div className="position-relative  mb-1">
                <ChatBubbleOutline fontSize="large" />
                <span
                  className="badge rounded-pill text-bg-primary position-absolute"
                  id="mainTab_badge"
                >
                  2
                </span>
              </div>

              <p className="my-auto small">All chats</p>
            </div>
          </li>
          <li className="py-3 w-100 position-relative">
            <div className="d-flex flex-column text-center align-items-center">
              <div className="position-relative mb-1">
                <PeopleIcon fontSize="large" />
                <span
                  className="badge rounded-pill text-bg-primary position-absolute"
                  id="mainTab_badge"
                >
                  2
                </span>
              </div>

              <p className="my-auto small">Groups</p>
            </div>
          </li>
          <li className="py-3 w-100 position-relative active">
            <div className="d-flex flex-column text-center align-items-center">
              <div className="position-relative">
                <AutoAwesome fontSize="large" />
                <span
                  className="badge rounded-pill text-bg-primary position-absolute"
                  id="mainTab_badge"
                >
                  2
                </span>
              </div>

              <p className="my-auto small">Channels</p>
            </div>
          </li>
          <li className="py-3 w-100 position-relative">
            <div className="d-flex flex-column text-center align-items-center">
              <div className="position-relative mb-1">
                <PersonAddAlt />
                <span
                  className="badge rounded-pill text-bg-primary position-absolute"
                  id="mainTab_badge"
                >
                  2
                </span>
              </div>

              <p className="my-auto small">Personal</p>
            </div>
          </li>

          <li className="py-3 w-100 position-relative">
            <div className="d-flex flex-column text-center align-items-center">
              <div className="position-relative mb-1">
                <PersonAddAlt />
                <span
                  className="badge rounded-pill text-bg-primary position-absolute"
                  id="mainTab_badge"
                >
                  2
                </span>
              </div>

              <p className="my-auto small">Edit</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
