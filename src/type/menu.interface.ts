export interface MenuType {
    href: string;
    children?: MenuType[];
    label: string;
    id: string;
    nameSection: string;
    chooseActive?: string;
  }

  export interface MenuTypeMobile {
    href: string;
    children?: MenuType[];
    label: string;
    id: string;
  }