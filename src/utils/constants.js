import {
  FaCarAlt,
  FaBookOpen,
  FaMoneyBillWave,
  FaGamepad,
  FaWifi,
  FaRegNewspaper,
  FaBuffer,
  FaShoppingCart,
  FaPlane,
} from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { HiDesktopComputer } from "react-icons/hi";

export const categories = [
  { name: "Overall Trend", icon: <BiTrendingUp /> },
  { name: "Vehicles", icon: <FaCarAlt /> },
  { name: "Books", icon: <FaBookOpen /> },
  { name: "Computer and Technologies", icon: <HiDesktopComputer /> },
  { name: "Finance", icon: <FaMoneyBillWave /> },
  { name: "Games", icon: <FaGamepad /> },
  { name: "Health", icon: <FaBuffer /> },
  { name: "Internet and Telecom", icon: <FaWifi /> },
  { name: "News", icon: <FaRegNewspaper /> },
  { name: "Property", icon: <FaPlane /> },
  { name: "Shopping", icon: <FaShoppingCart /> },
  { name: "Travel", icon: <FaPlane /> },
];
