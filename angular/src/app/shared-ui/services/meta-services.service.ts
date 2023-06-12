import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class MetaServicesService {
  constructor(private meta: Meta) {}

  setPageMeta(metaData: any) {
    // console.log('metaData', metaData)
    var getMeta = this.meta.getTags("name='description'");
    console.log("getMeta=====", getMeta.length);
    if (getMeta && getMeta.length) {
      console.log("iinnnnnnin");
      // Search Engine
      this.meta.updateTag(
        { name: "description", content: metaData.description },
        "name='description'"
      );
      this.meta.updateTag(
        { name: "keywords", content: metaData.keywords },
        "name='keywords'"
      );
      this.meta.updateTag(
        { name: "image", content: metaData.image },
        "name='image'"
      );

      // Schema.org for Google
      this.meta.updateTag(
        { itemprop: "name", content: metaData.title + "| Celebs Worldwide" },
        "itemprop='name'"
      );
      this.meta.updateTag(
        { itemprop: "description", content: metaData.description },
        "itemprop='description'"
      );
      this.meta.updateTag(
        { itemprop: "image", content: metaData.image },
        "itemprop='image'"
      );

      //Twitter
      this.meta.updateTag(
        {
          name: "twitter:title",
          content: metaData.title + "| Celebs Worldwide",
        },
        "name='twitter:title'"
      );
      this.meta.updateTag(
        { name: "twitter:description", content: metaData.description },
        "name='twitter:description'"
      );
      this.meta.updateTag(
        { name: "twitter:image", content: metaData.image },
        "name='twitter:image'"
      );
      this.meta.updateTag(
        { name: "twitter:image:alt", content: metaData.title },
        "name='twitter:image:alt'"
      );

      //Open Graph general (Facebook, Pinterest & Google+)
      this.meta.updateTag(
        { name: "og:url", content: metaData.url },
        "name='og:url'"
      );
      this.meta.updateTag(
        {
          property: "og:title",
          content: metaData.title + "| Celebs Worldwide",
        },
        "property='og:title'"
      );
      this.meta.updateTag(
        { name: "og:description", content: metaData.description },
        "name='og:description'"
      );
      this.meta.updateTag(
        { name: "og:image", content: metaData.image },
        "name='og:image'"
      );
    } else {
      this.meta.addTags([
        //Indexing / Spiders
        { name: "googlebot", content: "all" },
        { name: "bingbot", content: "all" },
        { name: "robots", content: "all" },
        { httpEquiv: "Content-Type", content: "text/html" },

        // Search Engine
        { name: "author", content: "celebsWorldWide" },
        { name: "description", content: metaData.description },
        { name: "keywords", content: metaData.keywords },
        { name: "image", content: metaData.image },

        // Schema.org for Google
        { itemprop: "name", content: metaData.title + "| Celebs Worldwide" },
        { itemprop: "description", content: metaData.description },
        { itemprop: "image", content: metaData.image },

        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: metaData.title + "| Celebs Worldwide",
        },
        { name: "twitter:site", content: "@celebsWorldWide" },
        { name: "twitter:description", content: metaData.description },
        { name: "twitter:image", content: metaData.image },
        {
          name: "twitter:image:alt",
          content: metaData.title + "| Celebs Worldwide",
        },

        //Open Graph general (Facebook, Pinterest & Google+)
        { name: "og:locale", content: "en_HK" },
        { name: "og:site_name", content: "celebsWorldWide" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: metaData.url },
        {
          property: "og:title",
          content: metaData.title + "| Celebs Worldwide",
        },
        { name: "og:description", content: metaData.description },
        { name: "og:image", content: metaData.image },
      ]);
    }
  }
}
