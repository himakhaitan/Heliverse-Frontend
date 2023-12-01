import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { increasePage, decreasePage } from "../slicers/search";

const Results = () => {
  const dispatch = useDispatch();
  const domain = useSelector((state) => state.users.domain);
  const gender = useSelector((state) => state.users.gender);
  const available = useSelector((state) => state.users.available);
  const page = useSelector((state) => state.users.page);
  const name = useSelector((state) => state.users.name);
  const [userData, setUserData] = useState([]);
  const req_uri = `https://heliverse-pycj.onrender.com/api/users?domain=${domain}&gender=${gender}&available=${available}&page=${page}&name=${name}`;
  const main = async () => {
    const response = await axios.get(req_uri);
    setUserData(response.data);
  };
  useEffect(() => {
    main();
  });

  const decHandler = () => {
    if (page === 1) return;
    dispatch(decreasePage());
  };

  const incHandler = () => {
    dispatch(increasePage());
  };

  return (
    <>
      <div className="controller">
        <div className="icon" onClick={decHandler}>
          <ChevronLeftIcon fontSize="large" />
        </div>

        <h3>List of Users - {page}</h3>
        <div className="icon" onClick={incHandler}>
          <ChevronRightIcon className="icon" fontSize="large" />
        </div>
      </div>
      <div className="results">
        {userData.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </>
  );
};

export default Results;
