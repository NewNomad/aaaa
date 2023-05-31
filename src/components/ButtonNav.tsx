import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useCustomRouter } from "@/hooks/useCustomRouter";

export const ButtonNav = () => {
  const { isActive } = useCustomRouter();
  const routes = [
    {
      active: isActive("/map"),
      path: "/map",
      icon: "/navicon/map.svg",
      active_icon: "/navicon/active_map.svg",
    },
    {
      active: isActive("/notification"),
      path: "/notification",
      icon: "/navicon/notification.svg",
      active_icon: "/navicon/active_notification.svg",
    },
    {
      active: isActive("/submit"),
      path: "/submit",
      icon: "/navicon/submit.svg",
      active_icon: "/navicon/active_submit.svg",
    },
    {
      active: isActive("/profile"),
      path: "/profile",
      icon: "/navicon/profile.svg",
      active_icon: "/navicon/active_profile.svg",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        left: "2%",
        width: "96%",
        height: 70,
        backgroundColor: "#999",
        display: "flex",
        background: "#fff",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {routes.map((route, index) => (
        <Link href={route.path} key={index}>
          <Image
            src={route.active ? route.active_icon : route.icon}
            width={60}
            height={60}
            alt={route.path}
          />
        </Link>
      ))}
      <Image
        src={"/navicon/toggle.svg"}
        width={60}
        height={60}
        alt={"toggle"}
      />
    </div>
  );
};
