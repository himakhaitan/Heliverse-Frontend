import UserCard from "../components/UserCard";
const Results = ({ userData }) => {
  return (
    <div className="results">
      {userData.map((user, index) => {
        return <UserCard key={index} user={user} />;
      })}
    </div>
  );
};

export default Results;
