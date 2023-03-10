import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const menuData = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faHouse as IconProp} />,
    text: "Page 1",
    link: "/",
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faCircleInfo as IconProp} />,
    text: "Page 2",
    link: "/page-2",
  },
];

export const collapseIcon = {
  openIcon: <FontAwesomeIcon icon={faChevronLeft as IconProp} />,
  closeIcon: <FontAwesomeIcon icon={faChevronRight as IconProp} />,
};
