import React from "react";
import BodySide from "./BodySide";
import BoxBodyMain from "./BoxBodyMain";

function BodyMain() {
  return (
    <div className="mt-5 mx-[3rem] grid grid-cols-12 gap-10">
      <div className="col-span-9 flex gap-5">
        <BoxBodyMain/>
        <BoxBodyMain/>
        <BoxBodyMain/>
      </div>
      <BodySide />
    </div>
  );
}

export default BodyMain;
