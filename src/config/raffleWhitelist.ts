import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
//  ['2tyFcRqu4dThVJnCsHELjLmaHXvyGmghVtRdT9Bs7Drw', { name: 'TheSuperSOL 3 wl' }],

   [
   '4JZfysFwAMseh3xTykzzdexdb3LGBxVBu79kkDSZbwuA',
     {
      name: '100 $Bulg',
       overviewImageUri: 'https://raw.githubusercontent.com/dodechaedron/Labsbulg/main/bulgae.jpeg',
   //   alternatePurchaseMints: [
  //       new PublicKey('So11111111111111111111111111111111111111112'),
   //    ],
   },
   ],
   [
    '2r2Me9rMSwSBdQkfW2i2T3HafzwiWu1ZuziZ1PX34hLN',
      {
       name: '200 $Bulg',
        overviewImageUri: 'https://raw.githubusercontent.com/dodechaedron/Labsbulg/main/bulgae.jpeg',
   //    alternatePurchaseMints: [
   //       new PublicKey('So11111111111111111111111111111111111111112'),
   //     ],
    },
    ],

  [
    'Bumu8zXP9ayRm2UkPSA5EcH8LHJXhpyrcxwEiGnqpwDm',
    {
      name: '$Bulg 300',
      overviewImageUri: 'https://raw.githubusercontent.com/ogadwintara/SOSTOKEN/main/RAKUDOS-RAFFLE-PRIZE-3-NFT.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  
  
  [
    '7W3o5w1KEta5fwhpkpS1U2q7GVKoyJ1i6QR5PsBY5xrJ',
    {
      name: 'Vandal #9423',
      overviewImageUri: 'https://storage.googleapis.com/vc-metadata.appspot.com/images/9423.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  
  [
    'HNscf22XXDPt82omw8sYSHAoiqPovm6ZSziD7MGwwv4j',
    {
      name: 'Primate #960',
      overviewImageUri: 'https://bafybeigm2dtupeo4aytbpg5w2zk2fd4x6hvd6bpqc74ono5ud3nfbf24by.ipfs.nftstorage.link/959.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  [
    'D4K3ToJ7pcPaFfxAP1PqrWa9JpoaoyGijC26P4pShQ3J',
    {
      name: '3-NFT Rakkudos',
      overviewImageUri: 'https://raw.githubusercontent.com/ogadwintara/SOSTOKEN/main/RAKUDOS-RAFFLE-PRIZE-3-NFT.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],

  [
    'dZ1V9awzQNVRAxDURkivGX98D49nnoV3BcC16aiRCHV',
    {
      name: 'DeGod #9560',
      overviewImageUri: 'https://metadata.degods.com/g/9559-dead.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
//  [
//    '8pw3gjNJNc6fJAGwUeLY8ktmEp8A2cJy4hHVYUnSPEgD',
//    {
//      name: 'Okay Bear #4965',
//      overviewImageUri: 'https://bafybeie6axzmpeqswiugsuim2d7d3mptwgviwnt5o6k5wuyxfkd357sk24.ipfs.nftstorage.link/4964.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    'BUZwRhhREXFsA3fysmPhTimPBtViQ5mF9ZUHsUndmtH3',
//    {
//      name: 'Blocksmith Labs #391',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    'DuXQXfkASwRTXRRsspRnQSyBBj1zdRiErUwh7aM4rJKY',
//    {
//      name: 'Rakkudo #5146',
//      overviewImageUri: 'https://bafybeih7d4w3wbpeataqv4cictt7z3r6rzmopy4e3pib2hfzfae7r3rv3e.ipfs.nftstorage.link/5145.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    'Fbi7Xnve6wWkey244pVTkUZess6Wq3YoJFXHMPb89tCM',
//    {
//      name: '1000 $TSOS',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
 //   'G8MYUG2VDnuJKHu1icVjHWcoNDMLpACdjCu4uveyAFw7',
//    {
 //     name: 'Reveal TheSuperSOL 3 NFT',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
 //   'DaCbuiX3JFurJ5ZvvT4v4XhMapNJH2bgAc2bdXrBKH8G',
 //   {
 //     name: 'TheSuperSOL #14',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
 //   },
 // ],
 // [
 //   'BqtSZWca7bCz1hPSnf2AV6gepaGYbpUGW1tAMCfweEeF',
 //   {
 //     name: 'TheSuperSOL #1',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
 //   },
//  ],
//  [
//    'SCVbXpQZGPevST9QYi9UoeNhuDNBNp2D3VXbtMMF7H3',
//    {
//      name: 'TheSuperSOL #17',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    'xNeVqAtyMyK9WPSgZPfa4CG4xRuSWUwiJjFbfXdzVeg',
//    {
//      name: 'THESUPERSOL REVEAL PRIZE 30 NFT',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    'Fbi7Xnve6wWkey244pVTkUZess6Wq3YoJFXHMPb89tCM',
//    {
//      name: '1000 $TSOS',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    'GoEDBB72X9eBBmrntrn9JQmoqJEHpbxx3jHvm3yEF1W8',
//    {
//      name: 'TheSuperSOL 6 WL',
//      overviewImageUri: 'https://bafybeiaclj2dyfvm27kdwh2yhvdr77wnpdum6ccyd6outymxv527dchvna.ipfs.nftstorage.link/391.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    '2tyFcRqu4dThVJnCsHELjLmaHXvyGmghVtRdT9Bs7Drw',
//    {
//      name: 'TheSuperSOL 3 WL',
//      overviewImageUri: '/resources/unreveal.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
//    },
//  ],
//  [
//    '7VaNZ1tHpJanMoF1jFDVqGsC74CQ6j7bJNNMaFLzNFTu',
//    {
//      name: 'TheSuperSOL 9 WL',
//      overviewImageUri: '/resources/unreveal.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
 //   },
 // ],
 // [
//    '9aRm2CGQkDuo7nW7w3aApycfJ9cv3hDTcAdEnm3C4GVs',
//    {
//      name: 'THESUPERSOL REVEAL PRIZE 30 NFT',
//      overviewImageUri: '/resources/001-mainnet-launch.gif',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//     ],
 //   },
//  ],
//  [
//    'J9zV6QbJhgwWmCAHCioS5dFLibsZ8GsrnmNTK52ckhAx',
//    {
//      name: 'THESUPERSOL PRIZE 5 NFT',
//      overviewImageUri: '/resources/001-mainnet-launch.gif',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//     ],
//    },
//  ],
//  [
//    '3yN96n5yqWGT6MNZg8z4M8SfQG5okF4bgNgGuuLwvmRp',
//    {
//      name: 'THESUPERSOL WL 15',
//      overviewImageUri: '/resources/unreveal.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//     ],
//    },
//  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'BUZwRhhREXFsA3fysmPhTimPBtViQ5mF9ZUHsUndmtH3',
    {
      name: 'The 97 Universe #91',
      overviewImageUri: 'https://tn72w7g3egypmkcfhdf3qbbuvo4yhhnznx5wc3vlhn4remod57va.arweave.net/m3-rfNshsPYoRTjLuAQ0q7mDnblt-2Fuqzt5EjHD7-o?ext=png',
    },
  ],
  [
    '2QjkshNu3mrcCnriekTpppa3PFwnAR9Yf7v5vc54m2Yh',
    {
      name: 'First SOL raffle',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    '8aEm1MoDqkYT5vCB21jC6aMMcMbdQJgmHpyBbtHDfUjU',
    {
      name: 'Anti Artist Club',
      overviewImageUri: '/resources/aartist-raffle-overview.gif',
    },
  ],
  [
    '2ziwAj4awgvNyn8ywwjkBRkBsmv259u9vVyEdrGYTb54',
    {
      name: 'More SOL',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    'EgHys3WPcM5WRpKqVHs1REfK6Npzq9sJ7dZPFPzQy2xG',
    {
      name: 'Triple SOL',
      overviewImageUri: '/resources/solana-logo-x3.gif',
    },
  ],
  [
    'CjzFZfrMW4D1jZVm5upCobRi96UYnQTk5cescSt12rhV',
    {
      name: 'SAMO raffle',
      overviewImageUri: '/resources/samo-x3.gif',
    },
  ],
  [
    'EZtBKgWq66KT4jRKtd4VT3LWh3mVC4pwcCsqLzKas63G',
    {
      name: 'BitBoat raffle',
      overviewImageUri: '/resources/bitboat-raffle.gif',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
