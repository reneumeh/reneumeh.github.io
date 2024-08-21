import { ArticleType } from "../../types"

export const main001 : ArticleType =
{   
    id: 31940001,
    title: "title",
    summary : "summary",
    content: [
        {
            type: "text",
            font: "superheader",
            value: "Lorem Ipsum"
        },
        {
            type: "text",
            font: "header",
            value: "Lorem Ipsum"
        },
        {
            type: "text",
            font: "paragraph",
            value: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: "image",
            position: "center",
            description: "image 1",
            src: "static/main001/image1",
        },
        {
            type: "text",
            font: "paragraph",
            value: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: "video",
            position: "top-left",
            description: "video 1",
            src: "static/main001/video1",
        },
        {
            type: "text",
            font: "paragraph",
            value: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: "text",
            font: "subheader",
            value: "Lorem ipsum dolor sit amet",
        },

        {
            type: "text",
            font: "paragraph",
            value: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: "link",
            text: "laborum",
            to: "https://reneumeh.github.io",
        },
        {
            type: "link",
            img_src: "static/main001/linkIcon",
            to: "https://reneumeh.github.io",
        },
    ]
}