import React from "react";
import { Drawer, Button, Typography, } from "@material-tailwind/react";
import DrawerButton from "./MdStaticDrawerButton";

function MdStaticDrawer() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    
<React.Fragment>
  <DrawerButton onClick={openDrawer} />
  <Drawer open={open} onClose={closeDrawer} className="drawer-content">
    <div className="dreawer-content">
     <div className="drawer-header" >
      <Typography className="drawer-title">
        Material Tailwind
      </Typography>
      {/* <IconButton className="drawer-close-button" onClick={closeDrawer} ripple="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </IconButton> */}
    </div>
    <Typography className="drawer-description">
      Material Tailwind features multiple React and HTML components, all written with Tailwind CSS classes and Material Design guidelines.
    </Typography>
    <div className="drawer-actions">
      <div className="text-left"> {/* Center the buttons */}
        <Button className="drawer-button-sm drawer-button-lightBlue" outline>
          Documentation
        </Button>
        <Button className="drawer-button-sm drawer-button-lightBlue">
          Get Started
        </Button>
      </div>
     </div>
    </div>
  </Drawer>
</React.Fragment>



    // <React.Fragment>
    //   <Button className="drawer-button" onClick={openDrawer} ripple="light" display="flex">
    //     Open Drawer
    //   </Button>
    //   <Drawer open={open} onClose={closeDrawer} className="drawer-content">
    //     <div className="drawer-header">
    //       <Typography className="drawer-title">
    //         Material Tailwind
    //       </Typography>
    //       <IconButton className="drawer-close-button" onClick={closeDrawer} ripple="light">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={2}
    //           stroke="currentColor"
    //           className="h-5 w-5"
    //         >
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //         </svg>
    //       </IconButton>
    //     </div>
    //     <Typography className="drawer-description">
    //       Material Tailwind features multiple React and HTML components, all written with Tailwind CSS classes and Material Design guidelines.
    //     </Typography>
    //     <div className="drawer-actions">
    //       <Button className="drawer-button-sm drawer-button-lightBlue" outline>
    //         Documentation
    //       </Button>
    //       <Button className="drawer-button-sm drawer-button-lightBlue">
    //         Get Started
    //       </Button>
    //     </div>
    //   </Drawer>
    // </React.Fragment>
  );
}

export default MdStaticDrawer;
