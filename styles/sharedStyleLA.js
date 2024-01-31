import { styled } from '@mui/system';

export const Link = styled("a")({
    color: (theme) => theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  });
  
  export const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap", // Allow items to wrap to the next line
  });
  
  export const Sidebar = styled("div")({
    width: "20vw", // Set the width to 100% initially
    // flex: "1", // Allow the sidebar to take up available space
    boxSizing: "border-box", // Include padding and border in the total width/height
    textAlign: "center",
    transition: "top 0.3s ease", // Add a smooth transition for top changes
    position: "fixed",
    top: 0,
    marginTop: "7vh",
    bottom: 0, // Adjust this based on your design
    left: 0,
    overflowY: "auto", // Enable vertical scrolling if needed
    padding: "20px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  });

  export const SidebarList = styled("ul")({
    listStyleType: "none", // Remove the default list style (dots)
    paddingLeft: "0", // Remove default left padding
    textAlign: "left",
    marginLeft: "10px",
  });
  
  export const SidebarListItem = styled("li")({
    marginBottom: "8px", // Add some space between list items
    color: (theme) => theme.palette.primary.main, // Customize the link color based on your theme
  // color: "inherit",
  textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  });
  
  export const MainContent = styled("div")({
    flex: "1", // Set to 1 to take up remaining space
  boxSizing: "border-box",
  padding: "20px",
  marginLeft: "20vw",
    // flex: "3", // Allow the main content area to take up more space
  });
  
  export const NotesSection = styled("div")({
    marginTop: "20px",
  });
  
  export const ImageContainer = styled("div")({
    maxHeight: "20vh", // 10% of the viewport height
    overflow: "hidden",
  });
  
  export const Image = styled("img")({
    width: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto", // Center the image horizontally
  });
  