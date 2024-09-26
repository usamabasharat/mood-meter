import React from "react";
import Button from "./Button";

export default function CallToAction() {
  return (
    <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
      <Button text="Sign Up" />
      <Button text="Login" dark />
    </div>
  );
}
