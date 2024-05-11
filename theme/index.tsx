import Theme from "rspress/theme";
import HomeRest from "./homeRest";

const Layout = () => <Theme.Layout afterFeatures={<HomeRest />} />;

export default {
  ...Theme,
  Layout,
};

export * from "rspress/theme";
