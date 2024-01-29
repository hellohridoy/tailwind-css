import React from "react";
function Pre(props) {
  const { load } = props;
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}
export default Pre;
