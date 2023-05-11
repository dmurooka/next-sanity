import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "0fwginzl",
    dataset: "production",
    title: "My Personal Website",
    apiVersion:"2023-29-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
 });

export default config;