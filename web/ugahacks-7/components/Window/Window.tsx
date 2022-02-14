import React, { ReactElement, useState } from "react";
import Draggable from "react-draggable";
import "98.css";
import { faqWindow } from "../FAQ/FAQ";
import { schedule } from "../Schedule/Schedule";
import styles from "../../styles/Window.module.css";
import Sponsors from "../../components/Sponsors";
import SponsorLogo from "../../components/Sponsors";

interface WindowProps {
  windowTitle: string;
  width?: string;
  height?: string;
  windowType: "browser" | "chat" | "chat-faq" | "schedule" | "image";
  showTopBarButtons: boolean;
  windowHeading?: string;
  windowBodyText?: string;
  position?: string;
  dataList?: [{ id: number; sender: string; message: string }];
  sponsorList?: [{ id: number; image: string; alt: string}];
  stateChanger?: any;
}

const generateWindowStructure = (
  type: string,
  windowTitle: string,
  heading = "",
  bodyText = "",
  dataList?: [{ id: number; sender: string; message: string }],
  sponsorList?: [{ id: number; image: string; alt: string}],
): ReactElement => {
  switch (type) {
    case "browser":
    default:
      return (
        <div className="layer">
          <ul className="tree-view">
            <li className={styles.url}>https://7.ugahacks.com/{windowTitle}</li>
          </ul>
          <ul className="tree-view">
            <li>
              <h3 className={styles.heading}>{heading}</h3>
            </li>
            <li>
              <p className={styles.bodyText}>{bodyText}</p>
            </li>
          </ul>
        </div>
      );
    case "chat":
      return (
        <div className="layer">
          <ul className="tree-view">
            {dataList &&
              dataList.map(
                (data: { id: number; sender: string; message: string }) => (
                  <li key={data.id}>
                    <span>{data.sender}</span>: {data.message}
                  </li>
                )
              )}
          </ul>
          <div className="field-row-stacked">
            <textarea></textarea>
          </div>
          <button className="send-btn">Send Message</button>
        </div>
      );
    case "chat-faq":
      return (
        // Thinking of passing array of faq and answers, and reading them
        <>
          <ul className="tree-view">
            <li className={styles.url}>https://7.ugahacks.com/{windowTitle}</li>
          </ul>
          {faqWindow()}
        </>
      );
    case "schedule":
      return (
        // Thinking of passing array of schedule
        <>
          <ul className="tree-view">
            <li className={styles.url}>https://7.ugahacks.com/{windowTitle}</li>
          </ul>
          {schedule()}
        </>
      );
    case "sponsors":
      return (
        <div className="layer">
          <ul className="tree-view">
            {sponsorList &&
              sponsorList.map(
                (data: { id: number; image: string; alt: string }) => (
                  <li key={data.id}>
                    <span>
                      <SponsorLogo 
                       
                      />
                    </span>
                  </li>
                )
              )}
          </ul>
        </div> // Add similar structure to chat layout with mapping over an obj with image data - See Sponsors section on Hacks 6
      )
  }
};

const Window = ({
  windowTitle,
  width = "40vw",
  height = "auto",
  windowType = "browser",
  showTopBarButtons,
  windowHeading,
  windowBodyText,
  dataList,
  sponsorList,
  stateChanger,
}: WindowProps): ReactElement => {
  const [active, setActive] = useState(true);
  const win = (
    <div className={styles.draggable_container} >
      <Draggable handle=".title-bar" defaultPosition={{ x: 550, y: 75 }} bounds="parent">
        <div className="window" style={{ width: width, height: height }}>
          <div className={`title-bar ${styles.blueBanner}`}>
            <div className="title-bar-text" style={{ fontSize: "1.75em" }}>
              {windowTitle}
            </div>
            {showTopBarButtons && (
              <div className="title-bar-controls">
                {/* <button aria-label="Minimize" style={{ padding: "1em", backgroundSize: "1em", backgroundPosition: "50% 80%" }} /> */}
                {/* <button aria-label="Maximize" style={{ padding: "1em", backgroundSize: "1.3em" }} /> */}
                <button aria-label="Close" style={{ padding: "1em", backgroundSize: "1.3em" }} onClick={() => {setActive(false); stateChanger("")}} />
              </div>
            )}
          </div>
          <div className="window-body">
            {generateWindowStructure(
              windowType,
              windowTitle,
              windowHeading,
              windowBodyText,
              dataList,
              sponsorList,
            )}
          </div>
        </div>
      </Draggable>
    </div>
  );

if (active) {
  return win;
}
else {
  return (
    <div></div>
  )
}
};

export default Window;
