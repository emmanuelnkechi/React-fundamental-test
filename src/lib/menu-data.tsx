import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { routesConstant } from "../constants/routes-constant";

export const menuData = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faHouse as IconProp} />,
    text: "Page 1",
    link: routesConstant.GET_PAGE1,
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faCircleInfo as IconProp} />,
    text: "Page 2",
    link: routesConstant.GET_PAGE1,
  },
];

export const collapseIcon = {
  openIcon: <FontAwesomeIcon icon={faChevronLeft as IconProp} />,
  closeIcon: <FontAwesomeIcon icon={faChevronRight as IconProp} />,
};
