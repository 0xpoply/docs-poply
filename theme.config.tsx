import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <Image src="/img/logo.png" alt="Poply logo" width={30} height={30} />
    </span>
  ),
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/img/icon.ico"></link>
    </>
  ),
  project: {
    link: "https://github.com/0xpoply",
  },
  chat: {
    link: "https://discord.gg/68wspMUhT7",
  },
  docsRepositoryBase: "https://github.com/0xpoply/docs-poply",
  footer: {
    text: "Poply Docs",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Poply docs",
      };
    } else {
      return {
        titleTemplate: "Introduction - Poply docs",
      };
    }
  },
};

export default config;
