import { MetaFunction } from "@remix-run/node";

const meta: MetaFunction = () => [
    { title: "Blog" },
    { name: "description", content: "Blog" },
  ];

  export default meta;