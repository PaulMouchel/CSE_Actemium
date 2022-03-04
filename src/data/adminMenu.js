import { faImage, faQuoteLeft, faPen, faThumbsUp, faShieldAlt, faUserPlus, faUserCog, faFire, faAt } from "@fortawesome/free-solid-svg-icons";

export const adminMenuData = [
    {
        href: "/background/edit",
        icon: faImage,
        text: "Image de fond",
        external: false
    },
    {
        href: "/quotation/edit",
        icon: faQuoteLeft,
        text: "Phrase du moment",
        external: false
    },
    {
        href: "/news/new",
        icon: faPen,
        text: "Nouvel article",
        external: false
    },
    {
        href: "/benefits/new",
        icon: faThumbsUp,
        text: "Nouvel avantage",
        external: false
    },
    {
        href: "/cssct/new",
        icon: faShieldAlt,
        text: "Nouvelle mission",
        external: false
    },
    {
        href: "/members/new",
        icon: faUserPlus,
        text: "Nouveau membre",
        external: false
    },
    {
        href: "/users/edit",
        icon: faUserCog,
        text: "Admins",
        external: false
    },
    {
        href: process.env.REACT_APP_FIREBASE_CONSOLE_URL,
        icon: faFire,
        text: "Firebase",
        external: true
    },
    {
        href: "https://dashboard.emailjs.com/admin",
        icon: faAt,
        text: "Emailjs",
        external: true
        
    }
]