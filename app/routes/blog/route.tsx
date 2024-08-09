import { Await, useLoaderData } from "@remix-run/react"
import { Suspense } from "react";

import loader from './loader';
import action from "./action";
import links from "./links";
import meta from './meta';

export { loader, action, links, meta };

import Date from "~/components/date";
import Delete from "~/components/delete";
import Update from "~/components/update";
import Create from "~/components/create";
import Category from "~/components/category";

export default function Blog() {
  const { posts, categories } = useLoaderData<typeof loader>();

  return (
    <main>
      <h2>Blog</h2>
      <Create />
      <aside>
        {
          categories.error ?
            <div data-error>{categories.error.message}</div> :
            categories.data.map(({ id, title }) =>
              <nav key={id}>
                <Category title={title} />
                <Delete data={{ type: "category", id }} />
              </nav>
            )
        }
      </aside>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={posts} errorElement={<div data-error>Woops, something went wrong ...</div>}>
          {(posts) =>
            posts.map(({ id, title, categoryTitle, content, createdAt }) =>
              <article key={id}>
                <header>
                  <h3>{title}</h3>
                  <Category title={categoryTitle} />&nbsp;
                  <Date date={createdAt} />
                </header>
                <nav>
                  <Update data={{type:"post", id, content:"Post updated"}} />
                  <Delete data={{ type: "post", id }} />
                </nav>
                <p>{content}</p>
              </article>
            )}
        </Await>
      </Suspense>
    </main>
  )
}