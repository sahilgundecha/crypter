import cole from "../../Assets/images/cole.jpg";
import raquel from "../../Assets/images/raquel.jpg";
import selina from "../../Assets/images/selina.jpg";
import adah from "../../Assets/images/adah.jpg";
import lady from "../../Assets/images/lady.jpg";
import avatar from "../../Assets/images/avatar-2.jpg";
const Info = [
  {
    id: 1,
    profile: avatar,
    Designation: "Owner",
    Name: "Raquel Will",
  },
  {
    id: 2,
    profile: selina,
    Designation: "Creator",
    Name: "Selina Mayert",
  },
];

const Owners = [
  {
    id: 1,
    profile: selina,
    Designation: "Owner",
    Name: "Cole Mayret",
  },
];

const History = [
  {
    id: 1,
    profile: avatar,
    Name: "Raquel Will",
    PlaceBid_ETH: 1.46,
    DateTime: "Jun 14 - 4:12 PM",
  },
  {
    id: 2,
    profile: cole,
    Name: "Cole Fahey",
    artName: "Awesome work",
    DateTime: "Jun 14 - 4:12 PM",
  },
  {
    id: 3,
    profile: adah,
    Name: "Adah Mitchell",
    acceptedBidName: "Raquel Will",
    DateTime: "Jun 14 - 4:12 PM",
  },
];

const Bids = [
  {
    id: 1,
    profile: avatar,
    Name: "Raquel Will",
    highestBidETH: 1.46,
  },
  {
    id: 2,
    profile: selina,
    Designation: "#2",
    Name: "Cole Fahey",
  },
  {
    id: 3,
    profile: lady,
    Designation: "#3",
    Name: "Selina Mayert",
  },
];

export { Info, Owners, History, Bids };
