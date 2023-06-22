import { LocalPhone, MoreVert, Search, Splitscreen } from "@mui/icons-material";

const chatInfo = ({ friendD }) => {
  return (
    <div className="profile_detail mb-2  w-100 d-flex px-4 justify-content-between align-items-center">
      <div className="profile_name">
        <div className="fw-semibold">{friendD.name}</div>
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
  );
};

export default chatInfo;
