import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
    { title: "Home" },
    { name: "description", content: "Home" },
  ];

export default function Index() {
  return (
<main>
  <h2>Home</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Voluptas perspiciatis, non nobis veniam architecto fuga! 
    Excepturi, tempore, exercitationem qui nam alias commodi, 
    animi inventore necessitatibus laborum molestias quos asperiores perspiciatis.
  </p>
</main>
  );
}
