import React from "react";
import { assets } from "../../assets/assets";
import Video from "../../components/Video/Video";
import Slider from "../../components/Slider/Slider";
import Experience from "../../components/Experience/Experience";
import Partner from "../../components/Partner/Partner";
import Engagements from "../../components/Engagements/Engagements";
import Paragraph from "../../components/Paragraph/paragraph";

// const sliderImages = [
//   assets.hp,
//   assets.Canadian,
//   assets.Citibank,
//   assets.Desjardins,
//   assets.Coreio,
//   assets.bank,
//   assets.honda,
// ];

const Automotive = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Manufacturing & Engineering'
        paragraph='Driving innovation and precision in Manufacturing & Engineering for a smarter, more efficient future.
'
      />
      <Paragraph
        title={'Manufacturing & Engineering'}
        description={
          'To succeed today, manufacturers must address many challenges and market changes, meet customer demands, and continuously improve quality while controlling costs'
        }
      />
      {/* <Slider images={sliderImages} /> */}
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Automotive;
