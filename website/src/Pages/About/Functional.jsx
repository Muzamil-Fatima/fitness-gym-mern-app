import PageWrapper from "./PageWrapper";
import women8 from "../../../images/women8.png";
import women12 from "../../../images/women12.png";
export default function Functional() {
  return (
    <>
      <PageWrapper
        title1="Functional"
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
        image1={women8}
        image2={women12}
      />
    </>
  );
}
