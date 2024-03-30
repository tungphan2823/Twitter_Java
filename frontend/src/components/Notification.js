import XIcon from "@mui/icons-material/X";
import Avatar from "@mui/joy/Avatar";

const Notification = () => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "540px",
        fontSize: "15px",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Avatar />
      <div style={{ paddingLeft: "1rem" }}>
        There was a login to your account @admin123 from a new device on Mar 13,
        2024. Review it now.
      </div>
      
    </div>
  );
};
export default Notification;
