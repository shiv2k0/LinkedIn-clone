import "./widgets.css"

import { BsFillInfoSquareFill, BsDot, BsChevronDown } from "react-icons/bs";

const WidgetList = ({ title, time, reader }) => (
  <li className="widgets__list">
    <p>{title}</p>
    <div className="time_reader">
      {time} <BsDot /> {reader} readers
    </div>
  </li>
);

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_top">
        <h3>LinkedIn News</h3>
        <div>
          <BsFillInfoSquareFill size={13} />
        </div>
      </div>
      <ul className="widgets__lists">
        <WidgetList
          title={"IT Firm Infogain to hire 800"}
          time={"7h ago"}
          reader={"4486"}
        />
        <WidgetList
          title={"More women enter IT Workforce"}
          time={"16h ago"}
          reader={"2090"}
        />
        <WidgetList
          title={"Reimagining employee rewards"}
          time={"8h ago"}
          reader={"160"}
        />
        <WidgetList
          title={"How India Inc is using generative AI"}
          time={"8h ago"}
          reader={"1180"}
        />
        <WidgetList
          title={"Millennials and their money habits"}
          time={"16h ago"}
          reader={"5266"}
        />
      </ul>
      <div className="widget__more">
        Show more <BsChevronDown />
      </div>
    </div>
  );
};
export default Widgets