export interface IHeader {
    appName: string;
    navItems: INavItem[];
  }

export interface INavItem {
    text: string;
    url?: string;
    onClick?: any;
}
