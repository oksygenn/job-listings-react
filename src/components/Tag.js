import { useState } from "react";

const Tag = ({ enabled, uniqueTag, handleTagClick }) => {
  return (
    <li
      className={enabled ? "tag tag-enabled" : "tag tag-disabled"}
      onClick={() => handleTagClick(uniqueTag)}
    >
      {uniqueTag}
      <span className="icon-remove">
        <img src="../images/icon-remove.svg" />
      </span>
    </li>
  );
};

export default Tag;
