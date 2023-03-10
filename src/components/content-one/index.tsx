import { useContext, useEffect, useState } from "react";
import {
  firstContentStyle,
  leftWrapStyle,
  rightWrapStyle,
  btnThemeStyle,
  addTextActionStyle,
  textAreaStyle,
  multipleBtnFlexStyle,
  multipleBtnContainerStyle,
  themeButton,
} from "../../assets/styles/content-one.css";
import { ThemeContext } from "../../context/themeContext";
import { VariantInterface } from "../../model/common.interface";
import { dateFormatter } from "../../lib/date-format";

const ContentOne = () => {
  const currentDate = dateFormatter();
  const [message, setMessage] = useState("");
  const [, setShowMessage] = useState("");
  const [buttonCount, setButtonCount] = useState(0);
  const [multipleButtonMessages, setMultipleButtonMessages] = useState<
    string[]
  >([]);
  const [buttonSentMessages, setButtonSentMessages] = useState<string[]>([]);

  //Get Theme value, message and toggle function from context
  const { toggleTheme, themeMessage } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext) as VariantInterface;

  useEffect(() => {
    setButtonSentMessages([themeMessage, ...buttonSentMessages]);
  }, [themeMessage]);

  //Function that handles setting value from the textarea
  const handleMessages = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  //Function that handles setting display message from the textarea when button is clicked
  const handleMessageClick = () => {
    setShowMessage(message);
    setButtonSentMessages([
      `${currentDate} Message Sent: ${message}`,
      ...buttonSentMessages,
    ]);
    setMessage("");
  };

  //Function that handles setting display message when add button is clicked
  const handleMultipleButton = () => {
    let newCount = buttonCount + 1;
    setButtonCount(newCount);
    let newMessages = multipleButtonMessages;
    newMessages.push(`Button ${newCount}`);
    setMultipleButtonMessages(newMessages);
    setButtonSentMessages([
      `${currentDate} Button ${newCount} added`,
      ...buttonSentMessages,
    ]);
  };

  //Function that handles setting display message when added buttons are clicked
  const handleButtonClicks = (count: number) => {
    setButtonSentMessages([
      `${currentDate} Button ${count + 1} clicked`,
      ...buttonSentMessages,
    ]);
  };

  return (
    <div className={firstContentStyle}>
      <div className={leftWrapStyle[theme]}>
        <button onClick={toggleTheme} className={themeButton[theme]}>
          Set Dark Theme
        </button>
        <div className={addTextActionStyle}>
          <textarea
            value={message}
            className={textAreaStyle}
            onChange={handleMessages}
          />
          <button
            className={btnThemeStyle[theme]}
            disabled={message ? false : true}
            onClick={handleMessageClick}
          >
            Add Text
          </button>
        </div>

        <div className={multipleBtnContainerStyle}>
          <div>
            <button
              onClick={handleMultipleButton}
              className={themeButton[theme]}
            >
              Add button {buttonCount + 1}
            </button>
          </div>
          <div className={multipleBtnFlexStyle}>
            {multipleButtonMessages.map((message, index) => (
              <button
                onClick={() => handleButtonClicks(index)}
                key={index}
                className={themeButton[theme]}
              >
                {message}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={rightWrapStyle[theme]}>
        <div>
          {buttonSentMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
