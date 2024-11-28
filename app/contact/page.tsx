

import Fieldset from "../components/Fieldset";
import Textbox from "../components/Textbox";
import Radio from "../components/Radio";
import Button from "../components/Button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Retro computers",
  description: "Details about a specific retro computer",
};

export default function Contact() {
  return (
    <>
      <h1>Contact us </h1>
      <form>
        <Fieldset legend="Provide details">
          <Textbox label="first name" id="firstName" name="firstName" />
          <Textbox label="Last name" id="lastName" name="lastName" />
          <Radio name="radio" label="By email" value="email" />
          <Radio name="radio" label="By phone" value="phone" />
        </Fieldset>
        <Button text="Send details" />
      </form>
    </>
  );
}
