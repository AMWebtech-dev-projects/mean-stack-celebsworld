interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Artists',
    url: '/artists',
    icon: 'fa fa-users',
    children: [
      {
        icon: 'fa fa-plus',
        name: 'Create Artists',
        url: 'artists/add-artist',
      },
      {
        icon: 'fa fa-list-alt',
        name: 'Manage Artist',
        url: 'artists/manage-artist',
      },
    ],
  },
  {
    name: 'Categories',
    url: '/categories',
    icon: 'fa fa-list-alt',
  },
  {
    name: 'Order List',
    url: 'orders',
    icon: 'icon-list'
  },
  {
    name: 'Users List',
    url: 'user-list',
    icon: 'fa fa-users'
  }
];
