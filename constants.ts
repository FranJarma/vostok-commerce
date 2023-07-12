export const ACCESORIES = "Accesorios";
export const BREAKPOINT_SIZE = 768;
export const COLLECTIONS = "Colecciones";
export const CONTACT = "Subscribirse";
export const GO_TO_STORE = "Ir a tienda";
export const HOW_ARE_WE = "Quiénes somos";
export const HOODIES = "Hoodies";
export const LEGGINGS = "Calzas";
export const MEN = "Hombres";
export const NEW_COLLECTION = "Nueva colección";
export const OTHER_COLLECTIONS = "Otras colecciones";
export const PANTS = "Pantalones";
export const SHIRTS = "Remeras";
export const SHORTS = "Shorts";
export const TANK_TOP = "Musculosas";
export const TOPS = "Tops";
export const WOMEN = "Mujeres";

type LinkType = "anchor" | "link";
interface NavbarItem {
    buttonStyle?: boolean,
    href?: string,
    id?: string,
    linkType: LinkType,
    name: string,
    subItems?: NavbarItem[]
}

export const LANDING_NAVBAR_ITEMS: NavbarItem [] = [
    {
        id: "new-collection",
        linkType: "anchor",
        name: NEW_COLLECTION
    },
    {
        id: "who-are-we",
        linkType: "anchor",        
        name: HOW_ARE_WE
    },
    {
        id: "other-collections",
        linkType: "anchor",
        name: OTHER_COLLECTIONS
    },
    {
        id: "subscribe",
        linkType: "anchor",
        name: CONTACT
    },
    {
        buttonStyle: true,
        href: "/shop",
        linkType: "link",
        name: GO_TO_STORE
    }
];

export const SHOP_NAVBAR_ITEMS: NavbarItem [] = [
    {
        href: "/collections",
        linkType: "link",
        name: COLLECTIONS
    },
    {
        href: "/men",
        linkType: "link",
        name: MEN,
        subItems: [
            {
                href: "/hoodies",
                id: "men-hoodies",
                name: HOODIES,
                linkType: "link"
            },
            {
                href: "/shirts",
                name: SHIRTS,
                linkType: "link"
            },
            {
                href: "/shorts",
                name: SHORTS,
                linkType: "link"
            },
            {
                href: "/pants",
                name: PANTS,
                linkType: "link"
            }
        ]        
    },
    {
        href: "/women",
        linkType: "link",
        name: WOMEN,
        subItems: [
            {
                href: "/calzas",
                name: LEGGINGS,
                linkType: "link"
            },
            {
                href: "/hoodies",
                name: HOODIES,
                linkType: "link"
            },
            {
                href: "/pants",
                name: PANTS,
                linkType: "link"
            },
            {
                href: "/shirts",
                name: SHIRTS,
                linkType: "link"
            },
            {
                href: "/shorts",
                name: SHORTS,
                linkType: "link"
            }
        ]      
    },
    {
        href: "accesories",
        linkType: "link",
        name: ACCESORIES
    }
];