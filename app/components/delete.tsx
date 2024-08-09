import { Category, Post } from "@prisma/client";
import { useFetcher } from "@remix-run/react"
import { IoMdTrash } from "react-icons/io";
import { CgSpinner } from "react-icons/cg";

type action = {
  data: Post | Category;
  error: null;
} | {
  data: null;
  error: Error;
} | null

const Delete = ({ data }: { 
  data: {[key: string]: string}
}) => {
  const fetcher = useFetcher<action>();
  const isIdle = fetcher.state === "idle";

  const handleClick = () =>
    fetcher.submit(
      data,
      { method: "DELETE", encType: "application/json" }
    )


  return (
    <>
      {
        !isIdle ?
          <button>
            <CgSpinner data-spinner />
          </button> :
          <>
            <button
              onClick={handleClick}
            >
              <IoMdTrash color="crimson" />
            </button>
            {fetcher.data?.error && <span data-error>
              {fetcher.data.error.message}
            </span>
            }
          </>
      }
    </>
  )
}

export default Delete;