import { Box, Typography } from "@mui/material";
import SongImage from "../../Assets/song.jpg";
import { useContext } from "react";
import SpotifyContext from "../../Context/SpotifyContext";

function FooterMusicProfile() {
  const { playingSong } = useContext(SpotifyContext);
  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        "@media(max-width: 950px)": {
          width: "150px",
        },
      }}
    >
      <Box>
        <img
          width="50px"
          height="auto"
          src={playingSong ? playingSong.album.images[0].url : SongImage}
          alt={SongImage}
        />
      </Box>

      <Box>
        <Typography fontSize="14px" fontWeight="bold">
          {playingSong ? playingSong.name : "Select a song"}
        </Typography>
        <Typography fontSize="12px" color="Gray">
          {playingSong ? playingSong.artists[0].name : null}
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterMusicProfile;
