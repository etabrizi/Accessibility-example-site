import Fieldset from "../components/Fieldset";
import Textbox from "../components/Textbox";
import Radio from "../components/Radio";
import Button from "../components/Button";

export default function Contact() {
    return (
      <>
        <h1>Contact us page</h1>
        <form>
        <Fieldset legend="Provide details">
            <Textbox label="first name" id="firstName" name="firstName" />
            <Textbox label="Last name" id="lastName" name="lastName" />
            <Radio name="radio" label="By email" value="email"/>
            <Radio name="radio" label="By phone" value="phone"/>
        </Fieldset>
        <Button text="Send details"/>
        </form>
      </>
    );
  }
  