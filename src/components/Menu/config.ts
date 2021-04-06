import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://pharmswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://pharmswap.finance/farms'
  },
  {
    label: 'Stake',
    icon: 'PoolIcon',
    href: 'http://pharmswap.finance/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://pharmswap.finance/lottery',
  },
  {
    label: 'Flash',
    icon: 'AuditIcon',
    href: 'http://pharmswap.finance/flash',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'http://pharmswap.finance/nft',
  },
  {
    label: 'Launchpad',
    icon: 'GooseIcon',
    href: 'http://pharmswap.finance/launch',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Pharmswap',
        href: 'https://pharmswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/pharm-swap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/pharm-swap/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://www.github.com/pharmswap/',
      },
      {
        label: 'Docs',
        href: 'https://pharmswap.gitbook.io/',
      },
      {
        label: 'Blog',
        href: 'https://pharmswap.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
