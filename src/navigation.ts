import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Productos',
      links: [
        // {
        //   text: 'Lead Generation',
        //   href: getPermalink('/landing/lead-generation'),
        // },
        // {
        //   text: 'Long-form Sales',
        //   href: getPermalink('/landing/sales'),
        // },
        // {
        //   text: 'Click-Through',
        //   href: getPermalink('/landing/click-through'),
        // },
        // {
        //   text: 'Product Details (or Services)',
        //   href: getPermalink('/landing/product'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
        {
          text: 'Tradicionales',
          href: getPermalink('/products/tradicionales'),
        },
        {
          text: 'Polvorones',
          href: getPermalink('/products/polvorones'),
        },
        {
          text: 'Corazoncitos',
          href: getPermalink('/products/corazoncitos'),
        },
      ],
    },
    {
      text: 'Sobre Nosotros',
      links: [
        // {
        //   text: 'Features (Anchor Link)',
        //   href: getPermalink('/#features'),
        // },
        // {
        //   text: 'Services',
        //   href: getPermalink('/services'),
        // },
        // {
        //   text: 'Pricing',
        //   href: getPermalink('/pricing'),
        // },
        {
          text: 'Nosotros',
          href: getPermalink('/about'),
        },
        {
          text: 'Contacto',
          href: getPermalink('/contact'),
        },
        // {
        //   text: 'Terminos y condiciones',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Politica de privacidad',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },

    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: 'Contacto', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'Tradicionales', href: '/products/tradicionales' },
        { text: 'Polvorones', href: '/products/polvorones' },
        { text: 'Corazoncitos', href: '/products/corazoncitos' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    {
      title: 'Soporte técnico',
      links: [{ text: 'Contacto', href: '/contact' }],
    },
    {
      title: 'Montenievas',
      links: [{ text: 'Sobre Nosotros', href: '/about' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos y condiciones', href: '/terms' },
    { text: 'Politicas de privacidad', href: '/privacy' },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/celosasgalletitas/?hl=es',
      target: '_blank',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/CelosasGalletitas',
      target: '_blank',
    },
  ],
  footNote: `
    <img class="w-5 md:w-6  md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://www.julianberardinelli.com/logos/logo.png" alt="onWidget logo" loading="lazy"></img>
    Desarollado por <a class="text-blue-600 font-bold underline dark:text-muted" href="https://julianberardinelli.com/"> Julián Berardinelli</a> · Todos los derechos reservados.
  `,
};
