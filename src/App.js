import { useState } from "react";
import Block from "./Block";
import Quote from "./components/Quote";
import PinPad from "./PinPad";

const passcode = "1234";

export default function App() {
  const [passcodeValid, setPasscodeValid] = useState(false);

  function checkPasscode(userPasscode) {
    setPasscodeValid(userPasscode === passcode);
  }

  if (!passcodeValid)
    return (
      <div className="App">
        <PinPad checkPasscode={checkPasscode} />
      </div>
    );

  return (
    <div className="App">
      <Block>
        <Quote
          text="Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved."
          author="Helen Keller"
        />
      </Block>
      <Block>
        <Quote
          text="Don't forget who you are and where you came from. Don't get too emotional over little things. Don't. Quit until you win the grand prize."
          author="Robert Randle"
        />
      </Block>
      <Block>
        <Quote
          text="You can either be crushed by a horrific event and lose your sanity, your family and your life. Or, you can take this pain that was thrust upon you, to propel into greatness. You can make it through this. I know it's hard."
          author="Marie White"
        />
      </Block>
      <Block>
        <Quote
          text="You can do things today that shape your unknown future. Make every day the time when you turn what you don't know into what would like to happen."
          author="Michael Nulty"
        />
      </Block>
      <Block>
        <Quote
          text="The epic story of tomorrow can't be written if it ends today."
          author="Unknown"
        />
      </Block>
      <Block>
        <Quote
          text="Think of all the beauty that's still left in and around you and be happy!"
          author="Anne Frank"
        />
      </Block>
      <Block>
        <Quote
          text="Never let a stumble in the road be the end of the journey."
          author="Unknown"
        />
      </Block>
      <Block>
        <Quote
          text="When it is darkest, we can see the stars."
          author="Ralph Waldo Emerson"
        />
      </Block>
    </div>
  );
}
