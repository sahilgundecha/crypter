export interface bidDataProps {
  userData: {
    id: number;
    mainImg: string;
    artName: string;
    ETH: number;
    instock: number;
    highestBid: number;
    creatorArray: string;
    bidType: string;
    creatorList?: creatorArray[];
  }[];
}

type creatorArray = {
  creators: string;
};

const Data = {
  userData: [
    {
      id: 1,
      mainImg: "../../Assets/images/bidImg.png",
      artName: "Sally Fadel",
      ETH: 161,
      InStock: 5,
      highestBid: 6,
      bidType: "ajscdsjc",
      creatorArray: [
        "../../Assets/images/creatorImg.png",
        "../../Assets/images/creatorImg.png",
      ],
    },
  ],
};

export default Data;
