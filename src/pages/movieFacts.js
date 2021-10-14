const facts = [
    {
        id: 1,
        image: 'https://zombiesruineverything.files.wordpress.com/2013/10/75.jpg',
        text: "An original ending for the classic serial killer film Seven saw Detective Somerset (Morgan Freeman) shooting John Doe (Kevin Spacey). This was followed with the cringeworthy kiss off line, “I’m retiring”. In a move that may well re-establish your faith in a God the scene was storyboarded but never filmed."
    },
    {
        id: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/02f8b60483faca8dd53774b027d82b91512d90b8a97e3fd4ca598133f731c571._RI_V_TTW_.jpg',
        text: "Those who correctly state that Infernal Affairs is better than its remake, The Departed, often state the need for closure as one reason for its inferiority. It’s a surprise to learn then that one ‘happier’ ending saw the Hong Kong thriller lose its open ending as Andy Lau’s mole gets his comeuppance with arrest, negating the superb trilogy closer in which his guilt sent him over the edge."
    },
    {
        id: 3,
        image: 'https://rockthebestmusic.com/wp-content/uploads/2017/04/alien-resurrection-ripley-call.jpg',
        text: "Ripley (or at least her clone) finally makes it back to Earth in a deleted scene for Alien: Resurrection."
    },
    {
        id: 4,
        image: 'https://static.independent.co.uk/2021/08/10/09/newFile-1.jpg?width=1200',
        text: "If you made it to the end of I Am Legend you’ll have been treated to Will Smith going kablooey (along with the point of Matheson’s novel). In a surprising reversal of the usual ‘let the hero survive’ approach, an alt scene saw Neville survive."
    },
    {
        id: 5,
        image: 'https://i2.wp.com/marvin.com.mx/wp-content/uploads/2021/08/kevin-smith-clerks-pelicula-tercera-imagen-1.jpg?fit=1200%2C800&ssl=1',
        text: "After 90 minutes of knob jokes, arguments about the untimely demise of construction workers on the Death Star and one act of necrophilia, Kevin Smith’s Clerks ends with Dante simply clocking off his shift. However the original ending saw him meet his maker at the hands of an armed gunman. He wasn’t even supposed to have been there."
    },
    {
        id: 6,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rambo-acorralado-sylvestre-stallone-1566292817.jpg?crop=1xw:0.8891928864569083xh;center,top&resize=1200:*',
        text: "Fed up of killing other people Rambo grabs a gun aimed at him and pulls the trigger thus killing himself and ruling out a bajillion sequels. "
    },
    {
        id: 7,
        image: 'https://www.cheatsheet.com/wp-content/uploads/2021/02/Titanic-3-1024x541.jpg',
        text: "Jim ‘King of the World’ Cameron also had a second ending for Titanic in which Bill Paxton and the old lady face off over the million dollar necklace. If you thought the original ending was schmaltzy check out the ‘life is priceless’ alternative."
    },
    {
        id: 8,
        image: 'https://assets.mubicdn.net/images/film/3440/image-w1280.jpg?1625742970',
        text: "The final cut of Terminator 2: Judgement Day ends with a make-your-own-mind-up soliloquy about fate and the future. It could have ended with Sarah Connor as an old lady sitting in a futuristic LA park showing us that everything was hunky dory. Hasta la vista nuance."
    },
    {
        id: 9,
        image: 'https://cinescopia.com/wp-content/uploads/2019/07/dodgeball-charity-video.jpg',
        text: "Those who own the DVD of Dodgeball will be aware that the happy-go-lucky finale full of lesbians and treasure may well have ended on more of a bleak note, simply cutting as Ben Stiller’s White Goodman connects a ball right in Vince Vaughn’s oversized face."
    },
    {
        id: 10,
        image: 'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2016/01/83_Die_Hard-e1453559442533.jpg',
        text: "A different denouement for Die Hard with a Vengeance saw McClane turning the tables, so to speak, on Simon Gruber giving him a series of riddles to solve. The face off eventually ended with Gruber blowing himself away with a rocket launcher after the New York cop tricks him into thinking it’s pointed the wrong way. Daft."
    },
    {
        id: 11,
        image: 'https://screenagekicks.files.wordpress.com/2008/11/shit012trainspotting.jpg',
        text: "The poop in Trainspotting was made from chocolate. Yummy."
    },
    {
        id: 12,
        image: 'https://pbs.twimg.com/media/DIGpgypVYAA7aH-.jpg',
        text: "For his scene in Ferris Bueller’s Day Off Charlie Sheen stayed awake for 48 hours to give the desired ‘wasted’ look. To produce the look for his actual life Charlie Sheen hasn’t slept in 14 years."
    },
    {
        id: 13,
        image: 'https://static.dw.com/image/45081358_303.jpg',
        text: "Christoph Waltz, the man who won an Oscar for playing the Jew Hunter in Inglorious Basterds, has a son who is a rabbi. "
    },
    {
        id: 14,
        image: 'https://moviehaku.com/thumbs/gallery/1400x0/16-The-Prestige.jpg',
        text: "The main characters initials in The Prestige spell ABRA (as in Abracadabra). The main character’s first initials in Inception spell DREAMS."
    },
    {
        id: 15,
        image: 'https://www.bolsamania.com/cine/wp-content/uploads/2019/04/16-17.jpg',
        text: "The iconic body and hand in the poster for American Beauty belong to actress/model Chloe Hunter, not Mena Suvari."
    },
    {
        id: 16,
        image: 'https://pbs.twimg.com/media/DzTEG8uWoAAK2Su.jpg',
        text: "The names of the taxi driver and the policeman in everybody’s favourite Yuletide outing, It’s A Wonderful Life, are Bert and Ernie. The writers working on Sesame Street at the time claim it’s merely a coincidence."
    },
    {
        id: 17,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sigourney-avatar-1540977786.gif',
        text: "The cigarette smoked by Sigourney Weaver in Avatar is completely CGI."
    },
    {
        id: 18,
        image: 'https://medias.myfrenchfilmfestival.com/medias/201/94/155337/format_page/nicolas-winding-refn-presidente-del-jurado.jpg',
        text: "Drive director Nicolas Winding Refn failed his driving test eight times."
    },
    {
        id: 19,
        image: 'https://1.bp.blogspot.com/--ZI-HSj3H-U/VCmo2yo-U0I/AAAAAAAA8t4/ikN7byNzB4c/s1600/El%2Bgran%2BLebowski%2Bcinemelodic%2B69.bmp',
        text: "The cheque The Dude fills out at Ralph’s in The Big Lebowski is dated September 11th 1991. On the supermarket TV George Bush Sr. calls out Saddam Hussein over the invasion of Kuwait."
    },
    {
        id: 20,
        image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2012/05/LeonNataliePortman280312-2.jpg',
        text: "If you’re ever looking to authentically recreate the ‘assassin in love with a 12 year old’ look, the correct type of plant featured in Luc Besson’s gloriously wonderful Leon is an aglaonema. "
    },
    {
        id: 21,
        image: 'https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/cc_prometheus_2012_041_72dpi.jpg',
        text: "The Alien series has a continuing obsession with alphabetising their androids chronologically. Ash, Bishop, Call. Could Michael Fassbender’s David be an android in the upcoming Prometheus? SPOILER ALERT Yes. Although as it’s a prequel it should really be Zeus or Zola or Zebedee."
    },
    {
        id: 22,
        image: 'https://lh3.googleusercontent.com/proxy/9XxrtvcUMX5eZeBe1CrX807mVSSnR1YjWNJYq40JIMjwqKt790PvtXjkXugbv8RUf21-b3b8KMe9Knf-jZJLz4zeClF2XKqZgX4fy-kvZtNLMMRl5cvD-L_gIoebjJ3uYjfvUNsI7UMz_A',
        text: "The real Frank Abagnale Jr. appears in Catch Me If You Can as the French policeman who arrests Leo."
    },
    {
        id: 23,
        image: 'https://www.eltelegrafo.com.ec/media/k2/items/cache/d079041931387466716ada12640c43cf_XL.jpg',
        text: "And the voice of Zuul in Catch Me If You Can is director Ivan Reitman."
    },
    {
        id: 24,
        image: 'http://totallyawesometulsa.com/wp-content/uploads/2017/03/www.80sprom.comronbusters_2_orig-4a99e49a1ff06030c8709b084fe8f6ef0978866d.jpg',
        text: "Porn star Ron Jeremy can clearly be seen watching the events come to a climax (sorry) in the finale to Ghostbusters."
    },
    {
        id: 25,
        image: 'http://4.bp.blogspot.com/_2OyGaN9GUu8/TBDmbHAVB4I/AAAAAAAAAPo/DIqMs6dr3dc/w1200-h630-p-k-no-nu/Christopher.jpg',
        text: "After his character was shot in the foot by Joe Pesci in Goodfellas, Michael Imperioli’s Christopher got fictional retribution by shooting a baker in the foot in The Sopranos. His kiss-off line? “It happens”."
    },
    {
        id: 26,
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/7E99/production/_96690423_original.jpg',
        text: "While Cameron Crowe returns the favour in Minority Report wearing a newspaper. Or hiding behind one. Delete where applicable."
    },
    {
        id: 27,
        image: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/fb4/bc8/e3e3d9561484f9a11ee66924af.jpg',
        text: "Steven Spielberg pops up for a cameo in Vanilla Sky wearing a Pre-Crime baseball cap."
    },
    {
        id: 28,
        image: 'https://m.media-amazon.com/images/M/MV5BNWZlNjBhNjUtN2QwZS00YWIyLTg0ZWUtNWFmMWRmMzBjYmJjXkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg',
        text: "An excerpt from Donald Kaufman’s script for The Three can be found in the end credits to Adaptation."
    },
    {
        id: 29,
        image: 'https://i.redd.it/4vu252tvaqh11.jpg',
        text: "Michael Smiley aka Tyres from Spaced can be seen as one of the zombies outside The Winchester in Shaun of the Dead in full Tyres get-up."
    },
    {
        id: 30,
        image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2012/03/SocialNetworkPR041010-1.jpg',
        text: "When Mark Zuckerberg posts his art essay question on Facebook during The Social Network his alias can be seen as one Tyler Durden."
    },
    {
        id: 31,
        image: 'https://www.cinescondite.com/wp-content/uploads/2011/03/critica-mars-need-moms.jpg',
        text: "For all the talk of John Carter‘s $200m write-off, the worldwide box office is slowly catching up with the budget. Disney can’t say the same for 2011’s Mars Needs Moms which ended with a gulf of $112m between costs and ticket sales. Note to Disney: keep away from the red planet. "
    },
    {
        id: 32,
        image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/25d22c05faff1ffdc1a0029d3023ec7654bcfe616c4854ac7937881971186919._SX1080_.jpg',
        text: "The Postman, Costner’s second jaunt to a post-apocalyptic world, holds the 8th spot on the biggest flops losing $62m. "
    },
    {
        id: 33,
        image: 'https://img.europapress.es/fotoweb/fotonoticia_20200728111756_420.jpg',
        text: "Often derided as a mega-flop, Waterworld actually took home nearly $90m more in worldwide box office than its estimated budget. Factor in TV sales, merchandise and home video and Kevin Costner’s ‘Kevin’s Gate‘ ended up floating quite nicely."
    },
    {
        id: 34,
        image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/04/30/15250849075571.jpg',
        text: "In 1982, Spileberg’s kids classic stayed in the US top ten for ten months. "
    },
    {
        id: 35,
        image: 'https://media.timeout.com/images/101619421/image.jpg',
        text: "While Titanic holds the record for consecutive weeks at the top spot (15), E.T. beats it by one in total weeks at Number One."
    },
    {
        id: 36,
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/03/2f/6b/032f6be1-2480-00bc-0ed3-bd4f435aa713/pr_source.lsr/1200x675.jpg',
        text: "Despite pulling in over $240m My Big Fat Greek Wedding never once topped the US box office chart."
    },
    {
        id: 37,
        image: 'https://www.filmweb.no/incoming/article1202303.ece/binary/o/Jennifer%20Lawrence%20i%20The%20Hunger%20Games:%20Mockingjay%20-%20Part%201',
        text: "Within 3 days of release The Hunger Games has become the highest grossing film for production company Lionsgate."
    },
    {
        id: 38,
        image: 'https://rafaelcine.com/wp-content/uploads/2015/11/friday-the-13th.jpg',
        text: "Adjusted for inflation, all of the 12(!) Friday the 13th movies made more than the Saw series domestically, making Jason Voorhees the North American blood and guts box office champ."
    },
    {
        id: 39,
        image: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/cuanto-sabes-de-la-primera-entrega-de-saw/137702835-1-esl-ES/Cuanto-sabes-de-la-primera-entrega-de-Saw.png',
        text: "Worldwide ticket sales for the Saw franchise put it at just shy of a billion dollars, making it the highest earning horror franchise globally."
    },
    {
        id: 40,
        image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2012/07/DarkKnightHeathLedger600Gb280312-1.jpg',
        text: "The Dark Knight made more money in its first six days in the US than Batman Begins made in its entire domestic run. "
    },
    {
        id: 41,
        image: 'https://images.mubicdn.net/images/film/4256/cache-672220-1620061633/image-w1280.jpg',
        text: "Years before Hit-Girl caused Daily Mail readers heads to explode with the use of the C-word, its first outing in Hollywood was in Carnal Knowledge. Jack Nicolson’s character Jonathan utters the impressively eloquent line, “Answer me, you ball-busting, castrating, son of a cunt bitch!”. The actor would later call Nurse Ratched, “something of a cunt” in One Flew Over The Cuckoo’s Nest."
    },
    {
        id: 42,
        image: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/08/01/showgirls.jpg',
        text: "Showgirls still holds the record for most Razzie (anti-Oscars) nominations with 13. Paul Verhoeven was the first director to collect the award for Worst Picture in person."
    },
    {
        id: 43,
        image: 'https://m.media-amazon.com/images/M/MV5BYTlmZTY4YzktOTg5Zi00OTljLThlNWQtYTBhMWUyMGNlNzcwXkEyXkFqcGdeQXVyODAwMjYyNjI@._V1_.jpg',
        text: "The childish snickering during The Usual Suspects iconic line-up was genuine, caused by Benicio Del Toro’s persistent flatulence."
    },
    {
        id: 44,
        image: 'https://images.dailykos.com/images/463276/large/E1EC2085-8559-44EC-A623-807A4F414D00.jpeg?1508595027',
        text: "Dirk Diggler’s penis in Boogie Nights measured 13 inches, half an inch more than its inspiration, John Holmes. Michael Fassbender’s wang has yet to be measured. Except, presumably, by Michael Fassbender."
    },
    {
        id: 45,
        image: 'https://i.ytimg.com/vi/08HFhuXnmCs/maxresdefault.jpg',
        text: "South Park: Bigger Longer and Uncut only uses the f-word 199 times. Fuckers."
    },
    {
        id: 46,
        image: 'https://www.altfg.com/film/wp-content/uploads/images/2021/05/fuck-documentary.jpg.webp',
        text: "While Casino clocks up a breathtaking 398 uses of the word ‘fuck’ – and Nil By Mouth and Summer of Sam chuck over 400 F-bombs – a 2005 documentary takes the top spot. The name of the documentary? Fuck."
    },
    {
        id: 47,
        image: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2015/07/Psycho.gif?resize=620%2C299',
        text: "Alred Hitchcock’s Psycho was the first American film to show a toilet flushing."
    },
    {
        id: 48,
        image: 'https://video-images.vice.com/_uncategorized/1571148767856-fc1.png',
        text: "Marla Singer’s line of “I haven’t been fucked like that since grade school” in Fight Club was an alternative to the line “I want to have your abortion”. Head of Fox 2000, Laura Ziskin, said David Fincher could have any line but the original. Hating the new line even more, she still stood by her promise. "
    },
    {
        id: 49,
        image: 'https://www.telegraph.co.uk/multimedia/archive/01862/titanic_1862815a.jpg',
        text: "The arty charcoal pic of Kate Winslet’s boobs in Titanic? Drawn by one James Cameron."
    },
    {
        id: 50,
        image: 'https://cdnb.20m.es/sites/127/2016/10/Asia-Carrera-El-gran-Lebowski-3.jpg',
        text: "Real life pornstar Asia Carrera plays the flatmate of Tara Reid in Logjammin‘, the film within the film in The Big Lebowski. We’re still unsure if she gets her cable fixed."
    },
    {
        id: 51,
        image: 'https://frasesdelapelicula.com/wp-content/uploads/2011/09/a-hard-days-night.jpg',
        text: "The name of the band isn’t mentioned once in The Beatles’ first feature, A Hard Day’s Night."
    },
    {
        id: 52,
        image: 'https://i0.wp.com/newagemusic.guide/wp-content/uploads/2017/04/new-age-music-enya.jpg?fit=536%2C359&ssl=1',
        text: "Enya was James Cameron’s first choice to compose the music for Titanic."
    },
    {
        id: 53,
        image: 'https://bbts1.azureedge.net/images/p/full/2018/09/8fbe7869-0da5-4585-b654-261518f137ad.jpg',
        text: "The lights over the facehugger eggs in Alien were provided by Roger Daltrey and The Who. The band were rehearsing the laser show next door to Ridley Scott’s set. "
    },
    {
        id: 54,
        image: 'https://i.pinimg.com/originals/8e/3c/ca/8e3cca708ec9868718454969a190f391.jpg',
        text: "Franz Ferdinand were the original choice to play the band at the Hogwarts Yule Ball."
    },
    {
        id: 55,
        image: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/screenshots/csm-movie/harry-potter-and-the-goblet-of-fire-ss1_0.jpg?itok=9qqVSA4p',
        text: "Pulp members Jarvis Cocker and Steve Mackey and Radiohead’s Jonny Greenwood and Phil Selway were four of The Weird Sisters in Harry Potter and the Goblet of Fire. Jason Buckle (All Seeing I) and Steven Claydon (Add n to (x)) completed the line up."
    },
    {
        id: 56,
        image: 'https://zita.se/uploads/images/media/3914/clock1.jpg',
        text: "Before Stanley Kubrick came on-board for A Clockwork Orange writer Anthony Burgess considered selling the movie rights to Mick Jagger with the intention of Jagger playing Alex and the rest of the Stones playing the other Droogs. Keef with eyeliner? Don’t be silly."
    },
    {
        id: 57,
        image: 'https://moviehaku.com/thumbs/gallery/1400x0/11-Almost-Famous.jpg',
        text: "In order to credibly portray a rock band, the members of Stillwater in Almost Famous rehearsed for four hours a night, five nights a week, for six weeks."
    },
    {
        id: 58,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pulp-fiction-precuela-tarantino-1563868809.jpg',
        text: "Despite Courtney’s (unsurprisingly) batshit claims, Kurt Cobain did thank Quentin Tarantino in the liner notes to In Utero, allegedly due to the musician’s love for Reservoir Dogs. QT returned the favour in the Pulp Fiction soundtrack notes by thanking Nirvana. Sadly, the timing of the release meant the thanks were followed by ‘RIP Kurt’."
    },
    {
        id: 59,
        image: 'https://www.infoveloz.com/storage/14/07/22/20/fit722x442/1563581068_1405216.jpeg',
        text: "Play It, Sam? Dooley Wilson, Sam in Casablanca, was a professional drummer who couldn’t play the piano. He simply mimed along, copying an offscreen pianist."
    },
    {
        id: 60,
        image: 'https://imagenes.heraldo.es/files/og_thumbnail/uploads/imagenes/2019/05/29/fotograma-de-toy-story.jpeg',
        text: "Executive producer of Toy Story and Chief Pixar shareholder Steve Jobs picked Bob Dylan as his first choice to write and perform the soundtrack to the film over Randy Newman. "
    },
    {
        id: 61,
        image: 'https://static.wixstatic.com/media/a52f0d_1cbe39fccf6643e88e655805cfa8df2e.gif',
        text: "Drive director Nicolas Winding Refn called Irreversible director Gasper Noe midshoot for advice on how to successfully shoot a ‘head smashing’ scene."
    },
    {
        id: 62,
        image: 'https://www.sunnyskyz.com/uploads/2015/02/3wnth-cas3.jpg',
        text: "The sirens heard in the casino scene in Swingers were police on their way to stop the film makers who were shooting without a permit."
    },
    {
        id: 63,
        image: 'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/20/45/18821716.jpg',
        text: "When filming Chinatown Jack Nicholson was dating Anjelica Huston, the daughter of his screen nemesis John Huston. She visited the set on the day that her father’s character asked Nicolson’s Jake Gittes, “Did you sleep with my daughter?”. Awkward."
    },
    {
        id: 64,
        image: 'https://images.mubicdn.net/images/film/117/cache-47780-1559332906/image-w1280.jpg',
        text: "Shooting for No Country For Old Men was interrupted for a day due to a smoke cloud from the set of There Will Be Blood, which was also filming in the area."
    },
    {
        id: 65,
        image: 'https://www.tonica.la/__export/1607145142946/sites/debate/img/2020/12/04/citizen-kane-cosas-que-debes-saber-sobre-la-mejor-pelicula-de-todos-los-tiempos.jpg_1037907269.jpg',
        text: "Orson Welles directed much of Citizen Kane from a wheelchair, after injuring himself on set."
    },
    {
        id: 66,
        image: 'https://img.ecartelera.com/noticias/fotos/59800/59813/1.jpg',
        text: "Christian Bale based elements of his performance as Patrick Bateman on Tom Cruise after seeing an interview with the diminutive star. According to director Mary Harron, Bale said he saw “this very intense friendliness with nothing behind the eyes”."
    },
    {
        id: 67,
        image: 'https://m.media-amazon.com/images/I/616+YQnKByL._AC_SX425_.jpg',
        text: "James Caan improvised the, now immortal, phrase “Bada-Bing” on the set of The Godfather."
    },
    {
        id: 68,
        image: 'https://i.pinimg.com/originals/70/f7/89/70f7892bb90a7ace09895e93731dde73.gif',
        text: "Speaking of stunts, Alan Rickman was dropped a second early to get his true reaction to falling from the Nakatomi Plaza in Die Hard. "
    },
    {
        id: 69,
        image: 'https://pbs.twimg.com/media/D4MzL6OWsAAjeC3.jpg',
        text: "Ever the bastard, David Fincher asked a stuntman to fall down the stairs 12 times in Fight Club for the fight between Norton and Pitt. He used the first take. "
    },
    {
        id: 70,
        image: 'https://2.bp.blogspot.com/-Ir8s_aUUANA/VzyuFF-KKmI/AAAAAAAACtE/OyTt7b6Hsi0i-3iVnLr3rCtERh6tqjRlwCLcB/s1600/Screen%2BShot%2B2016-05-18%2Bat%2B1.01.06%2BPM.png',
        text: "The bridge blown up by Eli Wallach and Clint Eastwood in The Good, The Bad and The Ugly was prematurely detonated by a Spanish Army Captain. Upon learning of his mistake the Captain ordered his troops to rebuild the bridge, only for it to suffer another explosion once complete."
    },
    {
        id: 71,
        image: 'https://townsquare.media/site/190/files/2013/11/bill.jpg?w=980&q=75',
        text: "Bill Murray as Batman? Almost. Until Tim Burton came on board Murray was top of the list. Perhaps when the inevitable re-reboot transpires Bill will get another shot."
    },
    {
        id: 72,
        image: 'https://imagenes.elpais.com/resizer/qOfdybu0S7-iOkxKCPXz32VCX2c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/FDA2QCPMBTHHFDUQJN4FDWLUD4.jpg',
        text: "James Woods fired his agent upon learning – after the movie was shot – that Quentin Tarantino wanted him for a part in Reservoir Dogs."
    },
    {
        id: 73,
        image: 'https://c.tenor.com/KpJ2WE-NRw4AAAAC/ferris-buellers-day-off-bueller-bueller-bueller.gif',
        text: "Bueller? Bueller? Bueller? Cruise? Cusack? Carrey? Depp? All were considered for the part of the hooky playing teen."
    },
    {
        id: 74,
        image: 'https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2014/01/11/3aab380_alien_isolation_amanda_550x356.jpg',
        text: "Ripley’s daughter in the Special Edition of Aliens is played by Sigourney Weaver’s mum."
    },
    {
        id: 75,
        image: 'https://cdn.zendalibros.com/wp-content/uploads/sean-connery.jpg',
        text: "The many parts turned down by Sean Connery include roles in The Matrix, The Lord of the Rings, Jurassic Park, Indy IV and Blade Runner."
    },
    {
        id: 76,
        image: 'https://www.latercera.com/resizer/dVKtNQt1unhw0F8_C2Ss2k6DEOI=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LQGTOL3RVZHGPDAVO7PDYZXBQM.jpg',
        text: "Only 12 years separates father/son duo Sean Connery and Harrison Ford in the Indiana Jones franchise."
    },
    {
        id: 77,
        image: 'https://culturageek.com.ar/wp-content/uploads/2019/09/jurassic_park_regreso-www.culturageek.com_.ar_.jpg',
        text: "There’s a 20 year age gap between Sam Neill and Laura Dern in Jurassic Park, with Laura aged only 26 during filming."
    },
    {
        id: 78,
        image: 'https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2018/05/17/Aragorn01.jpg',
        text: "While everyone knows Viggo Mortensen replaced Stuart Townsend at the last minute for Aragorn, the beardy ranger had no intention of joining Jackson and co until his son begged him to do it. Good son. "
    },
    {
        id: 79,
        image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/06/05/5fa52f110c739.jpeg',
        text: "Ronald Reagan was originally announced as the lead for Casablanca. The proclamation turned out to simply be a ruse to keep the actor’s name in the press."
    },
    {
        id: 80,
        image: 'https://pbs.twimg.com/media/CKl3M8rWgAA7qb2.jpg',
        text: "Courtney Love insists that the role of the heroin dealer, Lance, in Pulp Fiction was offered to Kurt Cobain. Tarantino has steadfastly refuted this claim, saying he never even met the late Nirvana singer."
    },
    {
        id: 81,
        image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/08/1984-movie.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
        text: "The first notable film lensed by legendary cinematographer Roger Deakins was the 1984 adaptation of George Orwell’s 1984."
    },
    {
        id: 82,
        image: 'https://the-talks.com/wp-content/uploads/2016/02/Robert-Harris-01-thumb.jpg',
        text: "Novelist and screenwriter Nick Hornby is brother-in-law to novelist and screenwriter Robert Harris."
    },
    {
        id: 83,
        image: 'https://www.urbanlegends.hu/wp-content/uploads/palahniuk1.jpg',
        text: "Fight Club and Choke author Chuck Palahnuik can be glimpsed ever so briefly in the final scene of the latter. He’s sitting next to Sam Rockwell on the plane."
    },
    {
        id: 84,
        image: 'https://img-9gag-fun.9cache.com/photo/ad8dbVQ_460s.jpg',
        text: "Author Peter Benchley plays the role of a TV reporter in Jaws. Benchley was reportedly thrown off set after continually arguing with Spielberg about the film’s ending."
    },
    {
        id: 85,
        image: 'https://imagenes.elpais.com/resizer/uCXXMirlie4vCINg5Eei9SGDaVw=/1960x0/ep01.epimg.net/elpais/imagenes/2019/09/12/icon/1568284135_370751_1568532142_noticia_fotograma.jpg',
        text: "Francis Ford Coppola would read passages of Heart of Darkness to Marlon Brando on the fractious set of Apocalypse Now after learning the actor had never read the source material."
    },
    {
        id: 86,
        image: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2015/08/Robert-Ludlum.jpg?fit=1536%2C1024&ssl=1',
        text: "Robert Ludlum, the creator of the Jason Bourne series, died while the first Bourne film was in post-production. "
    },
    {
        id: 87,
        image: 'https://townsquare.media/site/295/files/2020/11/you-only-live-twice-2.jpg?w=980&q=75',
        text: "In the penultimate Ian Fleming 007 novel, You Only Live Twice, James Bond’s parents are revealed to be Scottish and Swiss. His formative years were spent in Germany and France. "
    },
    {
        id: 88,
        image: 'https://static2.abc.es/media/cultura/2019/03/18/kubrick-resplandor-kdiH--620x349@abc.jpg',
        text: "Stanley Kubrick would reportedly call Stephen King at 3am to ask him questions about The Shining. According to King, one famous exchange had the director ask the author, “Do you believe in God?”. When he replied in the affirmative Kubrick yelled “I knew it!” and slammed the phone down."
    },
    {
        id: 89,
        image: 'https://media.revistagq.com/photos/5eaaa74a914ee80008b09485/3:2/w_1620,h_1080,c_limit/Patrick-Bateman-20200421-psycho-04.jpg',
        text: "Among Patrick Bateman’s neighbours in the novel of American Psycho is one Tom Cruise"
    },
    {
        id: 90,
        image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2012/05/ShawshankRedemptionGb290312-2.jpg',
        text: "In the Stephen King novella for The Shawshank Redemption, Morgan Freeman’s Red is described as a white Irishman. The script sees Red sarcastically quip, “Maybe it’s cause I’m Irish” as a nod to the change. "
    },
    {
        id: 91,
        image: 'https://www.highonfilms.com/wp-content/uploads/2020/06/a-matter-of-life-and-death-screenshot-4.jpg',
        text: "The US title for the exceptionally wonderful A Matter of Life and Death was Stairway to Heaven. The UK had no stairway. Denied. "
    },
    {
        id: 92,
        image: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2014/02/ghostbusters1.jpg?fit=1200%2C676&ssl=1',
        text: "Dan Akroyd’s original script for Ghostbusters was set in a future where Ghostbusters were everyday figures of society like paramedics and firemen. "
    },
    {
        id: 93,
        image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4463a9a12eec5a19ca8462e32b00ec1f80ee17d25f8464bfdd7a9586349105f7._RI_.jpg',
        text: "Paramount super producer Robert Towne was adamant he wanted Francis Ford Coppola to make The Godfather even though the director was uninterested in the project. Coppola acquiesced when he decided to make it a film about American capitalism and not “the mafia”."
    },
    {
        id: 94,
        image: 'https://d26jxt5097u8sr.cloudfront.net/s3fs-public/George_Lucas_dog_card.jpg',
        text: "George Lucas’ dog was named Indiana."
    },
    {
        id: 95,
        image: 'https://www2.pictures.fp.zimbio.com/Up+Photocall+62nd+International+Cannes+Film+M5T-cqSHFimm.jpg',
        text: "In 1994, during one famous lunch at Pixar, filmmakers John Lasseter, Pete Docter and Joe Ranft came up with ideas that would eventually become A Bug’s Life, Finding Nemo, Monster Inc. and Wall-E. We’ll have what they’re having."
    },
    {
        id: 96,
        image: 'https://www.denverpost.com/wp-content/uploads/2016/04/20151215__empire-strikes-backp1.jpg?w=529',
        text: "Like Facebook, Star Wars was originally prefixed by the definite article ‘The’. Much cleaner without it. "
    },
    {
        id: 97,
        image: 'https://images-1.wuaki.tv/system/shots/184937/original/snapshot-1590658181.jpeg',
        text: "Paul Schrader wrote Taxi Driver in five days. It is rumoured he had a loaded gun by his desk for “inspiration and motivation”."
    },
    {
        id: 98,
        image: 'http://2.bp.blogspot.com/-xPO0i-VhD8Y/VF1Ts8L1cUI/AAAAAAAADsE/kNgCwd5rG6U/s1600/Usual-Suspects.jpg',
        text: "The idea for the poster for The Usual Suspects came before any script or story."
    },
    {
        id: 99,
        image: 'https://super-ficcion.com/wp-content/uploads/2020/04/back_to_future_1985_8_copy-scaled.jpg',
        text: "Disney turned down the chance to make Back to the Future claiming the mother/son relationship was too risqué."
    },
]

export default facts;