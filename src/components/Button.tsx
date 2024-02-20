import { useState, ButtonHTMLAttributes } from "react";
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  //   const [counter, setCounter] = useState(0);

  //   function increment() {
  //     setCounter(counter + 1);
  //   }

  return (
    // <button className="button" onClick={increment}>
    //   {counter}
    // </button>

<button className="button" {...props} />

  )
}

<Button />