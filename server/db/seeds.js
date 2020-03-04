use spooky;

db.dropDatabase();

// validation:
//
// db.createCollection("spookyPlaces", {
//   validator: {
//     bsonType: "object",
//     required: ["name", "locality", "price"],
//     properties: {
//       name: {
//         bsonType: "string",
//         description: "must be a string and is required"
//       },
//       locality: {
//         bsonType: "string",
//         description: "must be a string and is required"
//       },
//       price: {
//         bsonType: "float",
//         description: "must be a double and is required"
//       }
//     }
//   },
//   validationLevel: "strict",
//   validationAction: "error"
// });


db.spookyPlaces.insertMany([
    {
      name: "Crathes Castle",
      locality: "Banchory",
      location: {
        lat: 57.062265,
        long: -2.439708
      },
      description: "With enchanting turrets, towers and ornate rooms, Crathes Castle near Banchory certainly looks like a place spirits would haunt. The castle was first built in the 1500s by the Burnett family with the brooding tower house still standing. It is said to be haunted by the restless spirit of the Green Lady, a ghostly apparition dressed in a green robe. It is said that she was a servant girl or a ward of the Laird who disappeared soon after having a child. In the 1800s, skeletal remains were found behind the fireplace in a room she has been spotted in.",
      imgURL: "https://www.visitscotland.com/wsimgs/Crathes_623569832.jpg",
      isFavourite: false,
      rating: 6
    },
    {
      name: "Mary King's Close",
      locality: "Edinburgh",
      location: {
        lat: 55.950281,
        long: -3.190463
      },
      description: "For years, the hidden Closes of Old Town Edinburgh have been shrouded in myths and mysteries, with blood curdling tales of ghosts and murders, and of plague victims being walled up and left to die.  Research and archaeological evidence has revealed a truer story, rooted in fact and, as is so often the case – more fascinating than any amount of fiction.",
      imgURL: "https://www.touristsecrets.com/wp-content/uploads/2019/07/3-18-1160x653.jpg",
      isFavourite: false,
      rating: 10
    },
    {
      name: "Cawdor Castle",
      locality: "Cawdor",
      location: {
        lat: 57.524736,
        long: -3.926433
      },
      description: "Immortalised by Shakespeare in his play ‘Macbeth’, built around a holly tree and haunted by an apparition said to be the ghost of an heiress once kidnapped by one of the most powerful families in Scotland, Cawdor Castle lies in a peaceful location which belies its dramatic and intriguing past. Nestled in the heart of the old Highland county of Nairn, Cawdor Castle dates to the late fourteenth century and was home to the Thanes and later the Earls of Cawdor.",
      imgURL: "https://spookyscotland.net/wp-content/uploads/2018/02/cawdor-castle.jpg",
      isFavourite: true,
      rating: 7
    },
    {
      name: "Culloden Battlefield",
      locality: "Culloden",
      location: {
        lat: 57.477789,
        long: -4.095710
      },
      description: "It was on this bleak moor in 1746 that the bloody battle of Culloden took place near Inverness. In barely 40 minutes, thousands of clansmen were cut down and the army of Bonnie Prince Charlie was defeated, ending the Jacobite rebellion. Cries, sword clashes and gunfire have all been heard at the battlefield and a forlorn looking Highlander is said to haunt the area, allegedly murmuring the word ‘defeated’ when encountered.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2014/10/aifuhasliugho.jpg",
      isFavourite: false,
      rating: 10
    },
    {
      name: "Skaill House",
      locality: "Orkney",
      location: {
        lat: 59.048748,
        long: -3.224811
      },
      description: "Built in the grounds of a Neolithic settlement at Skara Brae in Orkney, Skaill House sits on land inhabited for over 5,000 years. It is said it could be built on top of an ancient Pictish burial ground, which could be why there have been so many sightings of ghostly figures in empty rooms and odd occurrences like the sudden waft of cigarette smoke. There’s one particular spirit that most intrigues visitors to the Skaill.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2015/10/Skaill-House-Orkney.jpg",
      isFavourite: false,
      rating: 8
    },
    {
      name: "St Andrew's Cathedral",
      locality: "Fife",
      location: {
        lat: 56.339563,
        long: -2.788469
      },
      description: "St Andrew’s Cathedral is rumoured to be haunted by two ghosts, a friendly monk who has been encountered on the stairs at St Rule’s Tower, and the beautiful White Lady. For the past 200 years people have reported sightings of a lady wearing white gloves, gliding through the grounds before vanishing at the cathedral’s haunted tower. Legend has it that stonemasons, repairing the haunted tower in the Fife town, broke through into a sealed chamber and found a number of coffins. One lay open and contained the well-preserved body of a young woman, wearing white gloves.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2013/01/St-Andrews-Cathedral.jpg",
      isFavourite: false,
      rating: 8
    },
    {
      name: "Dunnottar Castle",
      locality: "Stonehaven",
      location: {
        lat: 56.945777,
        long: -2.19719
      },
      description: "Dunnottar Castle near Stonehaven has been the scene of many dramatic chapters in Scotland’s history and is home to several ghosts. A girl dressed in a plaid dress has been seen in the brewery while a Scandinavian-looking man was spotted going into the guardroom.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2015/10/Dunnottar-Castle-Stonehaven-1200x800.jpg",
      isFavourite: true,
      rating: 6
    },
    {
      name: "Dunrobin Castle",
      locality: "Golspie",
      location: {
        lat: 57.985814,
        long: -3.947164
      },
      description: "A young woman is said to haunt the Seamstress’s Room in the upper floors of Dunrobin Castle, near Golspie. The story goes that in the 15th century the Earl of Sutherland imprisoned a beautiful young woman from a rival clan, with plans to marry her. She tried to escape by climbing down a rope of sheets, but fell to her death. Sounds of her crying can still be heard coming from the room to this day.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2017/03/visitscotland_26784754874.jpg",
      isFavourite: false,
      rating: 7
    },
    {
      name: "Culzean Castle",
      locality: "Maybole",
      location: {
        lat: 55.354695,
        long: -4.789326
      },
      description: "Hanging on a cliff face on the Ayrshire coast, Culzean Castle looks every bit as haunting on the outside as it is inside. Several ghosts are said to roam the castle, including a young woman wearing a ballgown and a ghostly grey mist, which was spotted moving up the grand oval staircase. A ghostly piper is also said to play his pipes in the grounds, particularly when a member of the Kennedy family is about to get married, and he has also been heard playing on stormy nights, mixed in with the sound of wind and crashing waves from the ocean.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2014/10/Culzean-castle.jpg",
      isFavourite: false,
      rating: 5
    },
    {
      name: "The Old Tay Bridge",
      locality: "Dundee",
      location: {
        lat: 56.453196,
        long: -2.948556
      },
      description: "The Tay Bridge disaster is one of the most memorable engineering catastrophes in Scotland’s history. On 28 December 1879, just two years after it was opened in Dundee, the bridge was hit by a terrible storm which weakened its central section and caused it to collapse while a passenger train was crossing, killing all on board. It is said that on the anniversary of the disaster a ghostly train can be seen crossing the part of the Tay where the ill-fated bridge would have stood before disappearing at the point of the collapse. What remains of the old bridge’s pillars can still be seen beside the current Tay Bridge.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2016/10/visitscotland_25416599735.jpg",
      isFavourite: false,
      rating: 5
    },
    {
      name: "Stirling Castle",
      locality: "Stirling",
      location: {
        lat: 56.12379,
        long: -3.947428
      },
      description: "One of the most important castles in Scotland’s history, Stirling Castle is reportedly haunted by a ghostly Highlander, dressed in full traditional costume, complete with kilt. He is often mistaken for a tour guide and stories have been told of visitors approaching him, only for him to turn away and disappear before their eyes.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2017/05/visitscotland_26349808996.jpg",
      isFavourite: false,
      rating: 8
    },
    {
      name: "Inveraray Castle",
      locality: "Argyll and Bute",
      location: {
        lat: 56.237422,
        long: -5.07357
      },
      description: "Beautiful Inveraray Castle, set on the shores of Loch Fyne, is said to be haunted by a number of ghosts. A young Irish harpist, who was killed by the Duke of Montrose’s men in 1644, reportedly haunts the MacArthur Room while the castle’s ‘grey lady’ has only been seen by daughters of a Duke of Argyll. Another spooky apparition is the ghostly ‘Galley of Lorne’, which can be seen floating away on the horizon when a Duke dies.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2018/07/Inveraray-Castle.jpg",
      isFavourite: false,
      rating: 7
    },
    {
      name: "Tantallon Castle",
      locality: "North Berwick",
      location: {
        lat: 56.056359,
        long: -2.650619
      },
      description: "Perched on a clifftop overlooking the Firth of Forth, Tantallon Castle has a fairy-tale quality. A ruin since the 17th century, the castle is rumoured to be home to a wandering spirit, a man wearing period costume. How do we know he’s there? There is photographic evidence! Two photographs, one taken in 1977 and the other in 2008, appear to show the mystery unnamed figure standing in an old doorway. Spooky!",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2019/08/tantallon-01-1.jpg",
      isFavourite: false,
      rating: 4
    },
    {
      name: "Falkland Palace",
      locality: "Fife",
      location: {
        lat: 56.253706,
        long: -3.20649
      },
      description: "With its spectacular Renaissance architecture, dark panelled interiors and imposing oak furniture, Falkland Palace is truly atmospheric. Adored by Mary Queen of Scots, the palace was once the country residence of the royal Stuarts. Make your way to the Tapestry Gallery for a taste of the supernatural. It is said that the gallery is haunted by the ghost of a lady surrounded by a grey glow. Her lover was a brave soldier who rode off to battle and never returned, and she is doomed to roam the gallery until they are reunited. Love hurts…",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2019/08/visitscotland_36269691796.jpg",
      isFavourite: false,
      rating: 8
    },
    {
      name: "Alloa Tower",
      locality: "Clackmannanshire",
      location: {
        lat: 56.112457,
        long: -3.788312
      },
      description: "Once there were many tower houses in Scotland, now there are only a few. Around 700 years old, with immensely thick walls, Alloa Tower is one of the earliest examples of this kind of building. Legend has it that a curse was put on the tower and its owners, the Erskine family, in the 16th century. Ghosts are said to inhabit several rooms, including the dungeon, which is haunted by the spectre of a man in chains.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2019/08/visitscotland_35454229401.jpg",
      isFavourite: false,
      rating: 6
    },
    {
      name: "The Castle of Mey",
      locality: "Caithness",
      location: {
        lat: 58.647129,
        long: -3.224811
      },
      description: "The most northerly castle in mainland Scotland, The Castle of Mey is a spectacular setting for a ghost story. Best known as the former holiday home of Queen Elizabeth, The Queen Mother, the castle is now open to the public for six months of the year. Tour guides and those that work at the castle believe that the spirit of one Lady Fanny Sinclair haunts the top floor of the castle. Lady Fanny, the only daughter of the 14th Earl of Caithness, fell in love with a young stable hand – a tryst which her father deemed inappropriate. The stable hand was duly banished, and Lady Fanny was consigned to the top floor where her lonely ghost still resides.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2019/08/visitscotland_25901446877.jpg",
      isFavourite: false,
      rating: 9
    },
    {
      name: "Hermitage Castle",
      locality: "Hawick",
      location: {
        lat: 55.256034,
        long: -2.793231
      },
      description: "Bleak and foreboding, remote and beautiful, Hermitage Castle was built in the 13th century to control access to the border between Scotland and England. The castle was later dubbed the ‘guardhouse to the bloodiest valley in Britain’. Monolithic stone walls and few windows give this building a sinister aspect; tales of black magic and heinous torture associated with its keepers reverberate down the centuries. It’s no surprise that many restless spirits are said to inhabit this Borders Castle, including Mary Queen of Scots.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2019/08/visitscotland_26057762110.jpg",
      isFavourite: false,
      rating: 7
    },
    {
      name: "Blackness Castle",
      locality: "Blackness",
      location: {
        lat: 56.005987,
        long: -3.516198
      },
      description: "Lapped by the trembling waters of the Firth of Forth, Blackness Castle is one of Scotland’s most formidable strongholds. This 15th century castle has been an artillery fortification, a prison and an ammunition depot over the years and is now a scheduled monument in the care of Historic Environment Scotland. Legend has it that a phantom knight in armour guards the prison tower, occasionally leaping out on visitors and giving them a fright. Keep your wits about you in this fearsome fortress and you should be alright – the knight is probably just looking for a friend.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2019/08/visitscotland_41053060381.jpg",
      isFavourite: false,
      rating: 6
    },
    {
      name: "Kinnaird Head Castle",
      locality: "Aberdeen",
      location: {
        lat: 57.697661,
        long: -2.006273
      },
      description: "A storm is gathering over the ruins of Kinnaird Head Castle in Aberdeenshire, and a piper can be heard in the distance. You guessed it – it’s another ghostpiper. Legend has it that the laird of the castle was very protective over his daughter Isobel. When Isobel fell in love with a servant piper, the laird locked him up in a cave beneath the castle. But when bad weather came in, the piper was drowned. When Isobel found out about this she was heartbroken and threw herself from a window onto the rocks below. Now every time a storm is brewing, an eerie tune can be heard…",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2019/08/Fraserburgh-Kinnaird-Head-Lighthouse-10.jpg",
      isFavourite: false,
      rating: 8
    },
    {
      name: "Glencoe",
      locality: "Glencoe",
      location: {
        lat: 56.682559,
        long: -5.102271
      },
      description: "The brutal Glencoe, which took place on 13 February 1692, is one of the bloodiest incidents in Scotland’s history. The story goes that a troop of soldiers – acting on government orders – posed as friendly visitors before attacking their hosts, Clan Macdonald, while they lay sleeping in their beds, murdering 38 men, women and children. Other members of Clan Macdonald are reported to have fled to the surrounding mountains, but died of exposure in the bitterly cold mountain landscape. Nowadays people have claimed to see re-enactments of the slaughter, or have heard screams in the glen, particularly around the anniversary of the massacre.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2015/10/Glen-Coe-1200x800.jpg",
      isFavourite: false,
      rating: 9
    },
    {
      name: "Edinburgh Castle",
      locality: "Edinburgh",
      location: {
        lat: 55.948595,
        long: -3.199913
      },
      description: "Perched high above the Scottish capital, world-famous Edinburgh Castle is thought to be one of the most haunted places in Scotland and there have been numerous reports of paranormal activity over the years. Former prisoners are said to haunt the dungeons and a headless drummer, first seen shortly before Oliver Cromwell attacked the castle in 1650, has also been spotted. Although many people have heard the sound of his drums coming from the battlements, his physical appearance is rare and is said to foretell danger for the castle.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2015/10/Edinburgh-Castle-%C2%A9-Kenny-Lam-1200x800.jpg",
      isFavourite: false,
      rating: 10
    },
    {
      name: "Eilean Donan Castle",
      locality: "Kyle of Lochalsh",
      location: {
        lat: 57.282607,
        long: -5.714329
      },
      description: "One of the most photographed castles in Europe, if not in the world, Eilean Donan Castle near Kyle of Lochalsh is said to be haunted by a Spanish soldier who was killed in a siege in 1719 during the first Jacobite rebellion. The ghost of ‘Lady Mary’ has also been spotted in one of the castle’s bedrooms.",
      imgURL: "https://www.visitscotland.com/blog/wp-content/uploads/2014/10/eilean-donan1.jpg",
      isFavourite: false,
      rating: 8
    },
    {
      name: "Meldrum House",
      locality: "Edinburgh",
      location: {
        lat: 55.951208,
        long: -3.212902
      },
      description: "This 13th century building is now a hotel where a number of male guests have been surprised by the ghost of Isabella Douglas. One man received a cold kiss on the cheek during a thunderstorm and others have reported a chilling feeling as she glides through them when unhappy. Beware any male descendant of the Meldrum, Seton or Urquhart families, who can expect to be awoken by the feeling of an invisible hand scratching his chest.",
      imgURL: "https://wpcluster.dctdigital.com/scottishfield/wp-content/uploads/sites/101/2014/09/Meldrum-2-web.jpg",
      isFavourite: false,
      rating: 7
    },
    {
      name: "Glamis Castle",
      locality: "Forfar",
      location: {
        lat: 56.620154,
        long: -3.00167
      },
      description: "This 15th century castle is the setting for Shakespeare’s Macbeth and is without doubt one of the most haunted buildings in the UK, with frequent sightings of the Grey Lady, Jack the Runner, the White Lady, the bloodymouthed ghost and Earl Beardie. Whether or not you manage to glimpse one of these paranormal beings, you will certainly feel their presence as you tour the castle.",
      imgURL: "https://wpcluster.dctdigital.com/scottishfield/wp-content/uploads/sites/101/2016/10/Glamis_castle-978x624.jpg",
      isFavourite: false,
      rating: 10
    },
    {
      name: "Greyfriars Kirkyard",
      locality: "Edinburgh",
      location: {
        lat: 55.947168,
        long: -3.192796
      },
      description: "Described as ‘one of the scariest places on earth’ and ‘Scotland’s most haunted cemetery’, Greyfriars Kirkyard isn’t just the place famous for Greyfriars Bobby, Edinburgh’s beloved canine. This ancient resting place also contains the Covenanters Prison and the tombstone of Thomas Riddell Esquire, the inspiration for Voldemort’s real name in Harry Potter. Disturbingly, it’s a site rife with a robbery past and home to myriad spirits. Perhaps the most irking of all is the Mackenzie Poltergeist, the benevolent spirit of Sir George MacKenzie who has left people on ghost tours passed out, scratched, bruised and severely shaken.",
      imgURL: "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/12/egg1jf.jpg",
      isFavourite: false,
      rating: 10
    },
    {
      name: "Southern Necropolis",
      locality: "Glasgow",
      location: {
        lat: 55.843658,
        long: -4.244156
      },
      description: "The massive Glasgow cemetery, with its quarter million residents, is said to be the lair of a 7ft child-eating vampire with metal teeth. The story is so strong that in 1954, hundreds of children aged between four and fourteen came to the cemetery armed with sticks and knives, looking to kill the beast that had apparently eaten two local boys.",
      imgURL: "http://www.discoverglasgow.org/communities/9/004/011/018/389//images/4596698125_480x320.jpg",
      isFavourite: false,
      rating: 6
    },
    {
      name: "Goblin Ha",
      locality: "Gifford",
      location: {
        lat: 55.901455,
        long: -2.739057
      },
      description: "Yester Castle, or Goblin Ha (Goblin hall), near Gifford in East Lothian is an underground system of corridors and gothic vaults sunk beneath an ancient ruin. Its story is even more impressive. Back in the 13th century, Sir Hugo de Gifford, a local warlock, made a deal with the devil, summoned an army of goblins and demanded they build him the hall. Once finished, the necromancer spent the rest of his years practicing sorcery and Satanism in the underground vault. A vault which you can still visit today, armed with a torch and nerves of steel.",
      imgURL: "http://www.stravaiging.com/photos/albums/buildings/castles/Yester%20Castle,%20East%20Lothian/IMG_4108.JPG",
      isFavourite: false,
      rating: 6
    },
    {
      name: "The Forest of Rothiemurchus",
      locality: "Aviemore",
      location: {
        lat: 57.176227,
        long: -3.817418
      },
      description: "This dark wood in Inverness-shire is home to the grave of the Chief of Clan Shaw, whose spirit is said to challenge those who stray too deep into the forest (scroll down to 'Four Legged Man'). Accept the challenge, the legend goes, and the spirit will leave you be, but be cowardly and run, and you will never be seen again. Goblins, elves and other creatures of the night will also make any journey into the forest an uncomfortable one.",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/RothiemurchusForest.jpg/1024px-RothiemurchusForest.jpg",
      isFavourite: false,
      rating: 6
    },
    {
      name: "The A75, Dumfries and Galloway",
      locality: "Dumfires and Galloway",
      location: {
        lat: 55.070629,
        long: -3.604998
      },
      description: "It’s not just buildings and cemeteries that are accused of housing the restless spirits of the dead. The 15-mile stretch of the A75 between Annan and Gretna Green is reported to be one of the most haunted roads in Scotland, so much so that some locals refuse to drive down it in the dark. Mysterious mist, a Victorian woman and an old man are said to appear in the road, causing near accidents as drivers try to avoid them.",
      imgURL: "https://ichef.bbci.co.uk/news/1024/media/images/70684000/jpg/_70684321_kinmountstraight.jpg",
      isFavourite: false,
      rating: 8
    },
    {
      name: "The Ragged School",
      locality: "Edinburgh",
      location: {
        lat: 55.948914,
        long: -3.196296
      },
      description: "Established in the 1800s the ragged school was a grim education establishment for 50 of the city’s poorest and most deprived children. It’s been derelict for years, and reports of the sound of children running around and an air of sickness give this grim location an uneasy edge.",
      imgURL: "http://2.bp.blogspot.com/-He1xnU0Qb1o/UXUjxD6nkCI/AAAAAAAABck/nXwV9An8UzA/s1600/20130418_084326.jpg",
      isFavourite: false,
      rating: 7
    }
]);
