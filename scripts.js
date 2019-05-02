/**
 *
 * Set .time
 *
 */
var shouldFormat = localStorage.getItem('shouldFormat') === 'true'

function startTime () {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var timeEl = document.querySelector('.time')

  // Formatting
  if (shouldFormat) {
    h = h % 12
    h = h || 12
    h = checkTime(h)
  }

  m = checkTime(m)

  timeEl.innerHTML = h + ':' + m

  setTimeout(startTime, 500)

  // Toggle format hours on .time click
  timeEl.parentElement.addEventListener('click', function () {
    shouldFormat = !shouldFormat
    localStorage.setItem('shouldFormat', shouldFormat)
  })
}

function checkTime (i) {
  if (i < 10) {
    i = '0' + i
  } // add zero in front of numbers < 10
  return i
}

startTime()

/**
 *
 * Set time period
 *
 */

function setTimePeriod () {
  var today = new Date()
  var hours = today.getHours()
  var period = 'morning'

  if (hours > 12) {
    period = 'afternoon'
  }

  if (hours > 18) {
    period = 'evening'
  }

  if (hours) document.querySelector('.period').innerHTML = period
}

setTimePeriod()

/**
 *
 * Set background
 *
 */

function setBackground (photo) {
  var bgEl = document.querySelector('.background')
  var authorEl = document.querySelector('.author')
  var authorNameEl = document.querySelector('.author-name')

  var url = adaptSizeForViewport(photo.url)

  var image = new Image()

  image.onload = function () {
    // Add image as background
    bgEl.setAttribute('style', "background-image: url('" + url + "');")

    // Show author info
    authorEl.classList.add('show')
    authorEl.setAttribute('href', photo.authorUrl)
    authorNameEl.innerHTML = photo.author

    // Fade in body
    document.body.classList.add('show')
  }

  image.src = url
}

function adaptSizeForViewport (url) {
  var screenWidth = window.screen.width

  // Useful for large images to show in better quality on 4K monitors
  if (screenWidth > 2000) {
    url = url.replace('w_2000', 'w_4000')
  }

  return url
}

var photos = getPhotos()
var randomIndex = Math.floor(Math.random() * photos.length)
setBackground(photos[randomIndex])

function getPhotos () {
  return [
    {
      url: 'http://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444877/greenhouse_e0yuvb.jpg',
      author: 'Chelsea Block',
      authorUrl: 'https://unsplash.com/photos/NyGlFaryqsM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'http://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444882/noom-peerapong-127907-unsplash_ydows8.jpg',
      author: 'Noom Peerapong',
      authorUrl: 'https://unsplash.com/photos/LTCoPkg88ks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'http://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444886/taylor-hernandez-497490-unsplash_fffmnr.jpg',
      author: 'taylor hernandez',
      authorUrl: 'https://unsplash.com/photos/aL6iFnespCU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'http://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444878/kriti-535793-unsplash_jczas0.jpg',
      author: 'Kriti .',
      authorUrl: 'https://unsplash.com/photos/S7lm238W5_o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444884/tania-ramirez-trejo-485242-unsplash_m5pad4.jpg',
      author: 'Tania Ramirez Trejo',
      authorUrl: 'https://unsplash.com/photos/XxdWGstVjrY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444880/lizzie-285620-unsplash_aj25t4.jpg',
      author: 'Lizzie',
      authorUrl: 'https://unsplash.com/photos/gKk9rpyDryU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444882/mikkel-bech-403259-unsplash_rwdmdp.jpg',
      author: 'Mikkel Bech',
      authorUrl: 'https://unsplash.com/photos/27v6BSNYE68?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444886/tucker-good-568734-unsplash_utqnuj.jpg',
      author: 'Tucker Good',
      authorUrl: 'https://unsplash.com/photos/7leMlEB9STs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444877/annie-spratt-651319-unsplash_e7qzt0.jpg',
      author: 'Annie Spratt',
      authorUrl: 'https://unsplash.com/photos/0cAlNigDa8Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444876/cherry-laithang-138648-unsplash_czgzqk.jpg',
      author: 'Cherry Laithang',
      authorUrl: 'https://unsplash.com/photos/DEAIMSWjxxI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444881/matt-montgomery-3790-unsplash_ptbvk8.jpg',
      author: 'Matt Montgomery',
      authorUrl: 'https://unsplash.com/photos/2fW55mLSiSQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444874/anel-van-dyk-710942-unsplash_nwtrum.jpg',
      author: 'Anél van Dyk',
      authorUrl: 'https://unsplash.com/photos/S65fgjiR2T4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444875/ashley-van-dyke-59332-unsplash_mbzpkx.jpg',
      author: 'Ashley Van Dyke',
      authorUrl: 'https://unsplash.com/photos/0idia_JIPWg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444876/chao-sum-708739-unsplash_zxryyh.jpg',
      author: 'Chao Sum ',
      authorUrl: 'https://unsplash.com/photos/qBjcPyoA0Z8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto,y_0/w_2000,c_scale/v1536444876/chao-sum-708739-unsplash_zxryyh.jpg',
      author: 'Chao Sum ',
      authorUrl: 'https://unsplash.com/photos/qBjcPyoA0Z8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444875/lena-orwig-555602-unsplash_mckqm4.jpg',
      author: ' Lena Orwig',
      authorUrl: 'https://unsplash.com/photos/0iCpJsz6X8c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444876/edgar-castrejon-459812-unsplash_bu0ebq.jpg',
      author: 'Edgar Castrejon',
      authorUrl: 'https://unsplash.com/photos/Se5cwIoUbzE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444881/milada-vigerova-79341-unsplash_ktbzpz.jpg',
      author: 'Milada Vigerova',
      authorUrl: 'https://unsplash.com/photos/0-yy0iMe8VU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444876/kyle-glenn-350546-unsplash_z70468.jpg',
      author: 'Kyle Glenn',
      authorUrl: 'https://unsplash.com/photos/coOZa2c1ss4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536444883/sweet-ice-cream-photography-95120-unsplash_g3cbx8.jpg',
      author: 'Sweet Ice Cream Photography',
      authorUrl: 'https://unsplash.com/photos/ym3di0nIgeY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536451894/annie-spratt-42459-unsplash_jorkxu.jpg',
      author: 'Annie Spratt',
      authorUrl: 'https://unsplash.com/photos/hS46bsAASwQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/milada-vigerova-44071-unsplash',
      author: 'Milada Vigerova',
      authorUrl: 'https://unsplash.com/photos/n1Y2tKFvN1Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto,y_0/w_2000,c_scale/freddie-marriage-92628-unsplash',
      author: 'freddie marriage',
      authorUrl: 'https://unsplash.com/photos/UcfKYTan-LU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/cristian-newman-44282-unsplash',
      author: 'Cristian Newman',
      authorUrl: 'https://unsplash.com/photos/IVluebZ-I-k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536451970/annie-spratt-78044-unsplash_ky5cai.jpg',
      author: 'Annie Spratt',
      authorUrl: 'https://unsplash.com/photos/ncQ2sguVlgo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/gardenly-105741-unsplash',
      author: 'Gardenly',
      authorUrl: 'https://unsplash.com/photos/r6Pueuplv-8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/jeff-sheldon-3226-unsplash',
      author: 'Jeff Sheldon',
      authorUrl: 'https://unsplash.com/photos/rDLBArZUl1c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/tony-lam-hoang-199782-unsplash',
      author: 'Tony Lam Hoang',
      authorUrl: 'https://unsplash.com/photos/dY7ONzZzoU8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/katie-burkhart-973394-unsplash',
      author: 'Katie Burkhart',
      authorUrl: 'https://unsplash.com/photos/REk6cxrceoQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/scott-webb-104380-unsplash',
      author: 'Scott Webb',
      authorUrl: 'https://unsplash.com/photos/4ET5xgOzEOI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/rachel-lees-267177-unsplash',
      author: 'Rachel Lees',
      authorUrl: 'https://unsplash.com/photos/WlhzJkBvNDo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/the-bialons-365005-unsplash',
      author: 'the Bialons',
      authorUrl: 'https://unsplash.com/photos/MVCu1JIYuoM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/rawpixel-463436-unsplash',
      author: 'rawpixel',
      authorUrl: 'https://unsplash.com/photos/nMjej3Q3yac?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/fancy-crave-158545-unsplash',
      author: 'Fancy Crave',
      authorUrl: 'https://unsplash.com/photos/WNtXzzFjE_k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/ren-ran-232079-unsplash',
      author: 'Ren Ran',
      authorUrl: 'https://unsplash.com/photos/bBiuSdck8tU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/jordan-sanchez-46261-unsplash',
      author: 'Jordan Sanchez',
      authorUrl: 'https://unsplash.com/photos/GXV2uVv1DrE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/chris-abney-116403-unsplash',
      author: 'Chris Abney',
      authorUrl: 'https://unsplash.com/photos/qLW70Aoo8BE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/thomas-verbruggen-162373-unsplash',
      author: 'Thomas Verbruggen',
      authorUrl: 'https://unsplash.com/photos/OIVuAKXW9VA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/scott-webb-248996-unsplash',
      author: 'Scott Webb',
      authorUrl: 'https://unsplash.com/photos/9vWcVqVJZFo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/tim-bennett-583066-unsplash',
      author: 'Tim Bennett',
      authorUrl: 'https://unsplash.com/photos/An0uaO4IhcQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/lena-orwig-555602-unsplash',
      author: 'Lena Orwig',
      authorUrl: 'https://unsplash.com/photos/0iCpJsz6X8c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536451793/alvin-engler-48444-unsplash_rq7b7z.jpg',
      author: 'Alvin Engler',
      authorUrl: 'https://unsplash.com/photos/bIhpiQA009k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/malte-bremer-33760-unsplash',
      author: 'Malte Bremer',
      authorUrl: 'https://unsplash.com/photos/K8ObzYzCKrA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/brooke-cagle-39567-unsplash',
      author: 'Brooke Cagle',
      authorUrl: 'https://unsplash.com/photos/gXQA37fFpBU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/vaida-tamosauskaite-85615-unsplash',
      author: 'Vaida Tamošauskaitė',
      authorUrl: 'https://unsplash.com/photos/Lv5ndK10jZo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/jules-marchioni-674802-unsplash',
      author: 'Jules Marchioni',
      authorUrl: 'https://unsplash.com/photos/19oKY-zVg60?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/brina-blum-215893-unsplash',
      author: 'Brina Blum',
      authorUrl: 'https://unsplash.com/photos/7gUdXVJEnOo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/judah-guttmann-212395-unsplash',
      author: 'Judah Guttmann',
      authorUrl: 'https://unsplash.com/photos/t69fIZXxrwQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/v1536452366/arno-smit-83025-unsplash_clkg2w.jpg',
      author: 'Arno Smit',
      authorUrl: 'https://unsplash.com/photos/iI72r3gSwWY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      url: 'https://res.cloudinary.com/dtgyq2fcv/image/upload/ar_16:9,c_crop,f_auto,q_auto:good,w_auto/w_2000,c_scale/kriti-535793-unsplash',
      author: 'Kriti .',
      authorUrl: 'https://unsplash.com/photos/S7lm238W5_o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    }
  ]
}
