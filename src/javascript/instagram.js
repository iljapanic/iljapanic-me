// Instagram widget
var feed = new Instafeed({
  get: 'user',
  userId: '185311',
  clientId: 'f8e005a8ac66424ebc0b83c6ce0812a6',
  accessToken: '185311.f8e005a.323950a5e742475c8685f54948408d21',
  resolution: 'low_resolution',
  limit: '24',
  template: '<div class="instagram-pic"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
})

feed.run()
