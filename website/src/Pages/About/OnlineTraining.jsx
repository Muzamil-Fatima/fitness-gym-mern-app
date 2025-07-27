import women13 from "../../../images/women13.png";
import male from "../../../images/male.png";
import PageWrapper from "./PageWrapper";

export default function OnlineTraining() {
  return (
    <>
      <PageWrapper
        title1="Online"
        title2="Training"
        para1="  Lorem Ipsum'is simply dummy text of the printing and typesetting
                  industry."
        para2="Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer."
        para3="Lorem Ipsum'is simply dummy text of the printing and typesetting
                  industry."
        para4="Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer."
        image1={women13}
        image2={male}
      />
    </>
  );
}
