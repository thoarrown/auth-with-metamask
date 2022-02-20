import { Box, CircularProgress, Button } from "@mui/material";
import { useGetProfile } from "../../api/auth";

const UserProfile = () => {
  const { data: user, isLoading } = useGetProfile();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="flex-end">
        <CircularProgress color="inherit" size={24} />
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="flex-end">
      {user ? `User: ${user.username}` : <Button>Connect 4</Button>}
    </Box>
  );
};

export default UserProfile;
