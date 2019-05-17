export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
      },
      {
        title: true,
        name: 'Datos Maestros',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        title: true,
        name: 'Áreas de Trabajo',
        wrapper: {
          element: '',
          attributes: {},
        },
      },
      {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Carousels',
            url: '/base/carousels',
            icon: 'icon-puzzle',
          },
          {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle',
          },
          {
            name: 'Tooltips',
            url: '/base/tooltips',
            icon: 'icon-puzzle',
          },
        ],
      },
      {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart',
      },
      {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
          {
            name: 'CoreUI Icons',
            url: '/icons/coreui-icons',
            icon: 'icon-star',
            badge: {
              variant: 'info',
              text: 'NEW',
            },
          },
          {
            name: 'Flags',
            url: '/icons/flags',
            icon: 'icon-star',
          },
          {
            name: 'Simple Line Icons',
            url: '/icons/simple-line-icons',
            icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
          {
            name: 'Modals',
            url: '/notifications/modals',
            icon: 'icon-bell',
          },
        ],
      },
      {
        divider: true,
      },
      {
        title: true,
        name: 'Extras de extras',
      },
      {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
          {
            name: 'Error 500',
            url: '/500',
            icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        attributes: { disabled: true },
      },
    ],
  };
  