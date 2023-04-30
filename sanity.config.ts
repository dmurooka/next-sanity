import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';


const config = defineConfig({
    projectId: "0fwginzl",
    dataset: "production",
    title: "My Personal Website",
    apiVersion:"2023-29-04",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config;