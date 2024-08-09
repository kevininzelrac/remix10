import { useMemo, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";

const Create = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => setDisplay(!display);

  return (
    <div className="dropdown">
      <button
        className={display ? "create active" : "create"}
        onClick={handleClick}
      >
        <RiAddBoxFill color="#336699" />
      </button>
      {
        display &&
        <div>
          <Button data={{
            type: "post",
            title: "Hola, Mundo !",
            content: "What a wonderful world ...",
          }} 
          handleClick={handleClick}
          />
          <Button data={{
            type: "category",
            title: "travels",
          }} 
          handleClick={handleClick}
          />
        </div>
      }
    </div>
  )
}
export default Create;


import { useFetcher } from "@remix-run/react";
import { CgSpinner } from "react-icons/cg";
import { Category, Post } from "@prisma/client";

type action = {
  data: Post | Category;
  error: null;
} | {
  data: null;
  error: Error;
} | null

const Button = ({ data, handleClick }: { 
  data: {[key: string]: string},
  handleClick: ()=> void
}) => {
  const fetcher = useFetcher<action>();
  const isLoading = fetcher.state !== "idle";

  const handleSubmit = () =>{
    fetcher.submit(
      data,
      { method: "POST", encType: "application/json" }
    )
  }

  useMemo(() => fetcher.data?.data && handleClick(), [fetcher.data?.data]);


  console.log(fetcher.data?.data)

  if (isLoading) return <button>
    <CgSpinner data-spinner />
  </button>

  return (
    <>
      <button
        onClick={handleSubmit}
      >
        {data.type}
      </button>
      {fetcher.data?.error && <span data-error>
        {fetcher.data.error.message}
      </span>}
    </>
  )
}