import moment from "moment";

export const dateFormatter = () => {
  return moment().format("MM/DD/YYYY h:mm:ss");
};
