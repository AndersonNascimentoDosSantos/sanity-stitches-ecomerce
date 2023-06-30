"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

import Head from "next/head";
import { StudioLayout, StudioProvider } from "sanity";
import NextStudioHead from "./head";
export default function AdminPage() {
  return (
    <>
      <Head>
        <NextStudioHead favicons={false} />
      </Head>

      <NextStudio config={config}>
        <StudioProvider config={config}>
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  );
}
