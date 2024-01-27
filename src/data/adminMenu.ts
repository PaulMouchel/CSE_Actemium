import { FaImage, FaQuoteLeft, FaPen, FaThumbsUp, FaShieldAlt, FaUserPlus, FaUserCog, FaFire } from "react-icons/fa"

export const adminMenuData = [
    {
        href: "/background/edit",
        icon: FaImage,
        text: "Image de fond",
        external: false
    },
    {
        href: "/quotation/edit",
        icon: FaQuoteLeft,
        text: "Phrase du moment",
        external: false
    },
    {
        href: "/news/new",
        icon: FaPen,
        text: "Nouvel article",
        external: false
    },
    {
        href: "/benefits/new",
        icon: FaThumbsUp,
        text: "Nouvel avantage",
        external: false
    },
    {
        href: "/cssct/new",
        icon: FaShieldAlt,
        text: "Nouvelle mission",
        external: false
    },
    {
        href: "/members/new",
        icon: FaUserPlus,
        text: "Nouveau membre",
        external: false
    },
    {
        href: "/users/edit",
        icon: FaUserCog,
        text: "Admins",
        external: false
    },
    {
        href: import.meta.env.VITE_FIREBASE_CONSOLE_URL,
        icon: FaFire,
        text: "Firebase",
        external: true
    }
]