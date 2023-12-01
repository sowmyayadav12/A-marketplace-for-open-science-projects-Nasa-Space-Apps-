import CostLink from "../components/cost-link";
import GroupIcon from "../components/group-icon";
import GroupComponent5 from "../components/group-component5";

const LIST = () => {
  return (
    <div className="relative bg-white w-full h-[1393px] overflow-hidden text-left text-11xl text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[1393px] overflow-hidden">
        <img
          className="absolute h-[100.22%] top-[0%] bottom-[-0.22%] left-[calc(50%_-_720px)] max-h-full w-[1440px] object-cover"
          alt=""
          src="/image-21@2x.png"
        />
        <CostLink />
        <GroupIcon />
        <div className="absolute top-[171px] left-[0px] bg-darkseagreen w-[1440px] h-[115px] mix-blend-color-burn" />
        <CostLink cOSTLeft="789px" cOSTTop="327px" />
        <CostLink cOSTLeft="209px" cOSTTop="804px" />
        <CostLink cOSTLeft="789px" cOSTTop="804px" />
        <b className="absolute top-[228px] left-[120px] inline-block w-[724px] h-6">
          YOUR WISH LIST❤..
        </b>
      </div>
      <GroupComponent5
        imageDimensions="/vector.svg"
        imageDimensionsText="/vector1.svg"
        imageDimensionsText2="/vector2.svg"
        imageDimensionsText3="/vector3.svg"
        yOUTop="92.25%"
        yOULeft="0%"
        yOUWidth="100%"
        yOUHeight="7.75%"
        yOURight="0%"
        yOUBottom="0%"
        propCursor="pointer"
        propTextDecoration="none"
        propCursor1="unset"
      />
    </div>
  );
};

export default LIST;
