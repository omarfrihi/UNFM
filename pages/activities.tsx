import Activity from "../components/activity-page";
import Cover from "../components/who-us/cover";

const Activities = () => (
  <>
    <Cover
      image={require("../public/assets/activities.png")}
      title="Activités"
    />
    <Activity></Activity>
  </>
);

export default Activities;
