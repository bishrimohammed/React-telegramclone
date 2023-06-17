import Sidebar from "../components/sidebar";

//import img from "./assets/_F2A3857_1660135787480_1660135869754.JPG";

import Friends from "../components/friends/Friends";
import SearchForm from "../components/friends/SearchForm";
import Chat from "../components/chatDetails/Chat";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setConservations } from "../storeReduxToolkit/authSlice";
const Homepage = () => {
  const conser = useSelector((state) => state.auth.Conservations);
  const user = useSelector((state) => state.auth.user);
  const [friendActive, setFriendActive] = useState({});
  const dispatch = useDispatch();
  const URL = process.env.REACT_APP_server_URL;
  useEffect(() => {
    const getconservation = async () => {
      const res = await fetch(`${URL}/api/conservations/${user._id}`);
      const resdata = await res.json();
      dispatch(setConservations({ consevations: resdata }));
    };
    getconservation();
  }, [user._id, dispatch]);
  //console.log(conser);
  const getFriend = (friend) => {
    setFriendActive(friend);
  };
  return (
    <div className="wrapper container-fluid  px-0 py-0 d-flex ">
      <Sidebar />
      <div className=" main_container w-100 flex-grow-1">
        <div className=" d-flex h-100 w-100 ">
          <div className="middle_container   d-md-flex flex-column d-none px-0 position-relative">
            <SearchForm />
            <Friends conservation={conser} getFriend={getFriend} />
          </div>
          <Chat friend={friendActive} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
