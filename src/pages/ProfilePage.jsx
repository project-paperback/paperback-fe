import axios from "axios";

const ProfilePage = () => {
  return (
    <button
      onClick={async () => {
        await axios.delete(
          "https://paperback-vy73.onrender.com/api/delete_account"
        );
        localStorage.clear();
      }}
    >
      Delete User
    </button>
  );
};
export default ProfilePage;
