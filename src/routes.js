import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import CustomerInformation from "views/CustomerInformation.js";
import Categories from "views/Categories.js";
import AdvertAttributes from "views/AdvertAttributes.js";
import Transactions from "views/Transactions.js";
import Packages from "views/Packages.js";
import CustomerSupport from "views/CustomerSupport.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/customer-page",
    name: "Customer Information",
    icon: "users_circle-08",
    component: CustomerInformation,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "design_image",
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/advert-attributes",
    name: "Advert Attributes",
    icon: "design_image",
    component: AdvertAttributes,
    layout: "/admin"
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "design_image",
    component: Transactions,
    layout: "/admin"
  },
  {
    path: "/packages",
    name: "Packages",
    icon: "design_image",
    component: Packages,
    layout: "/admin"
  },
  {
    path: "/customer-support",
    name: "Customer Support",
    icon: "design_image",
    component: CustomerSupport,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/admin"
  }
];
export default dashRoutes;
