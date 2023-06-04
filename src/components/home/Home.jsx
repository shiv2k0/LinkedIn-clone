import "./home.css";
import { Feed, Header, Sidebar, Widgets } from "../../components";

const Home = () => {

  return (
    <div className="Home">
      <>
        <Header />
        <div className="Home__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
    </div>
  );
};
export default Home;
