import { LinksFunction } from "@remix-run/node";
import styles from "./styles.css?url";
import badge from "~/components/badge/styles.css?url";
import category from "~/components/category/styles.css?url";
import create from "~/components/create/styles.css?url"

const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: badge },
    { rel: "stylesheet", href: category },
    { rel: "stylesheet", href: create },
];

export default links;