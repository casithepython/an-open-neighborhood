import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { FilePath, FullSlug } from "../../util/path"
import { sharedPageComponents } from "../../../quartz.layout"
import { GlobalGraph, Graph } from "../../components"
import { defaultProcessedContent } from "../vfile"
import { write } from "./helpers"
import { i18n } from "../../i18n"
import DepGraph from "../../depgraph"

export const HomePage: QuartzEmitterPlugin = () => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    pageBody: GlobalGraph(),
    beforeBody: [],
    left: [],
    right: [],
  }

  const { head: Head, pageBody, footer: Footer } = opts
  const Body = BodyConstructor()

  return {
    name: "HomePage",
    getQuartzComponents() {
      return [Head, Body, pageBody, Footer]
    },

    async emit(ctx, _content, resources): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const slug = "index" as FullSlug

      const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
      const path = url.pathname as FullSlug
      const externalResources = pageResources(path, resources)
      const notFound = "Homepage"
      const [tree, vfile] = defaultProcessedContent({
        slug,
        text: notFound,
        description: notFound,
        frontmatter: { title: notFound, tags: [] },
      })
      const componentData: QuartzComponentProps = {
        ctx,
        fileData: vfile.data,
        externalResources,
        cfg,
        children: [],
        tree,
        allFiles: [],
      }

      return [
        await write({
          ctx,
          content: renderPage(cfg, slug, componentData, opts, externalResources),
          slug,
          ext: ".html",
        }),
      ]
    },
  }
}
