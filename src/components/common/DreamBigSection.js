"use client"
import { DefaultButton } from "./DefaultButton";
import { usePathname } from "next/navigation";
import { ImageWrapper } from "./ImageWrapper";

const DreamBigSection = ({ data }) => {
  const pathname = usePathname();
  const cleanPath = pathname.trim() === "/" ? "home" : pathname.substring(1);
  const page_name = cleanPath.split("/")[0].trim();
  const enabledPages = ["home", "market", "about", "services"];
  if (enabledPages.indexOf(page_name) === -1) return;

  return (
    <section className="section-dream-big">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 column-1">
            <div className="container-img no-phone">
            <ImageWrapper defaultDimensions={{ width: 1356, height: 953 }} url={data.desktopBackgroundImage} min_w={"1356"} min_h={"953"} customClasses={"media"} attributes={{ "data-preload": "" }} />
            </div>
            <div className="container-img no-desktop no-tablet">
            <ImageWrapper defaultDimensions={{ width: 434, height: 773 }} url={data.mobileBackgroundImage} min_w={"434"} min_h={"773"} customClasses={"media"} attributes={{ "data-preload": "" }} />
            </div>
            <div
              data-parallax
              data-trigger=".section-dream-big"
              data-translate-y-from="30vh"
              data-end="center center"
              className="content"
            >
              <DefaultButton
                data={{
                  label: data.buttonText,
                  action: data.buttonAction
                }}
                attributes={{
                  "data-cursor-style": "off",
                }}
              ></DefaultButton>
              <p
                className="fs--20 flex-center fs-phone-16 fw-500 font-2 blue-1 text-center pos-relative z-5 mt-30 text"
                data-parallax
                data-trigger=".section-dream-big"
                data-translate-y-from="30vh"
                data-end="center center"
              >
                {data.paragraph1} <br />
                {data.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamBigSection;
