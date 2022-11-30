import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader 
    speed={0}
    width={316}
    height={478}
    viewBox="0 0 316 478"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="146" cy="145" r="129" /> 
    <rect x="0" y="326" rx="9" ry="9" width="306" height="88" /> 
    <rect x="3" y="280" rx="0" ry="0" width="300" height="27" /> 
    <rect x="0" y="440" rx="0" ry="0" width="89" height="37" /> 
    <rect x="151" y="434" rx="0" ry="0" width="150" height="45" />
  </ContentLoader>
)

export default Skeleton;