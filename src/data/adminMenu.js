import { faImage, faQuoteLeft, faPen, faThumbsUp, faShieldAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const adminMenuData = [
    {
        href: "background/edit",
        icon: faImage,
        text: "Image de fond"
    },
    {
        href: "quotation/edit",
        icon: faQuoteLeft,
        text: "Phrase du moment"
    },
    {
        href: "news/new",
        icon: faPen,
        text: "Nouvel article"
    },
    {
        href: "benefits/new",
        icon: faThumbsUp,
        text: "Nouvel avantage"
    },
    {
        href: "cssct/new",
        icon: faShieldAlt,
        text: "Nouvelle mission"
    },
    {
        href: "members/new",
        icon: faUserPlus,
        text: "Nouveau membre"
    }
]