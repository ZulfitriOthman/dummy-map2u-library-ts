import React from "react";

function DrawerButton({ onClick }) {
  return (
    <div className="flex justify-center"> {/* Center the button */}
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
        style={{ position: "relative", overflow: "hidden" }}
        onClick={onClick}
      >
        Open Drawer
      </button>
    </div>
  );
}

export default DrawerButton;
