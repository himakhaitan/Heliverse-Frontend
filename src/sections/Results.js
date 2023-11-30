import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Results = () => {
  const domain = useSelector((state) => state.users.domain);
  const gender = useSelector((state) => state.users.gender);
  const available = useSelector((state) => state.users.available);
  const page = useSelector((state) => state.users.page);
  const name = useSelector((state) => state.users.name);
  const [userData, setUserData] = useState([]);
  const req_uri = `http://localhost:8000/api/users?domain=${domain}&gender=${gender}&available=${available}&page=${page}&name=${name}`;
  const main = async () => {
    const response = await axios.get(req_uri);
    setUserData(response.data);
  };
  useEffect(() => {
    main();
  });

  return (
    <div className="results">
      {userData.map((user) => {
        return <UserCard key={user.id} user={user}/>;
      })}
    </div>
  );
};

export default Results;
