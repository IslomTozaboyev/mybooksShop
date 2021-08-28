import React from "react";
import SidebarWrapper from "../../Wrappers/sidebarWrapper";
import Link from "next/link";

const Sidebar = ({ data }) => {
  return (
    <SidebarWrapper>
      <div className="container py-3">
        <div className="menu shadow">
          <ul>
            {data.results.map((value, index) => {
              return (
                <li>
                  <Link
                    key={index}
                    href={"/category/" + value.list_name_encoded}
                  >
                    <a className="sidebar_link">{value.list_name_encoded}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
