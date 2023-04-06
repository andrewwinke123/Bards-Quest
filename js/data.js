let story = {chapters: 
  'chapter1', chapter1: {title: 'Welcome to Gliks Tower', 
  story:`<div class="flex-child-2"> <h1>
  You are the apprentice to the evil wizard Glik, who tricked you into his employment.
  Your goal is to find a way to put this chapter of your life behind you so that you can go to the city of Prussia and make it big as a bard.
  </h2> </div>`,
  choices: [ 
  {choice: 'Begin Quest?', result: 'beginQuest'},
]
},
beginQuest: {
  title: 'The Wizard Glik has just stepped out to run errands.', 
  story:`<div class="story-intro"> He will be back in 5 minutes.
  </div></p>
  <p>
  "Don't forget your chores. And you are NOT allowed in my crafting room! OR the observation deck" the wizard says.
  </p>
  <div class="story-intro"> <p>
  As the wizard leaves and you mosey around the his tower, you daydream about one day finding a way out of the wizards legally biding contract spell,
  which you foolishly fell for one month prior, and which legally bound you to his employment for the next 10 years. (Gamehindge is a "right to work state," and as such, workers rights are not very abundant). 
  For weeks you have been sneaking into his crafting room to learn his spells.
  You have hit a brick wall with your discrete training however, and the wizard doesn't leave for long thanks to his power of teleportaion. 
  You look around the tower and notice flies gathering outside the window.
  "just the thing I need to start my first spell" you think to yourself. What do you do?</div>`,
choices: [
  {choice: 'Look around', result: 'wizardsTower'},
  {choice: 'Enter crafting room', result: 'locked'},
  {choice: 'Enter observation deck', result: 'observationDeck'},
  {choice: 'Enter Kitchen', result: 'kitchen'}
]
},
wizardsTower: {
title: 'You sweep and continue to dream of life in the big city',
story:`As you do chores you think about your plan to escape. There are no doors to exit the tower. The Wizard Glik teleports whenever he leaves
so you know there might not be a door at all. But perhaps there is one hidden around here somewhere...`,
image: 'WizardsTower.jpg',
choices: [
  {choice: 'Enter crafting room', result: 'locked'},
  {choice: 'Enter observation deck', result: 'observationDeck'},
  {choice: 'Enter Kitchen', result: 'kitchen'}
]
},
craftingRoom: {
title: `You enter the little office where Glik studies his texts. Across from you, you see a table with multiple beakers of liquids, and a book which you recognize as his spell book.`,
story: 'Across from you, you see a table with multiple beakers of liquids, and a book which you recognize as his spell book.',
image: '1.png',
choices: [
  {choice: 'Mix potions', result: 'mixPotions'},
  {choice: 'Turn back', result: 'turnAround'}
]
},
fly: {
  title: 'You swat at the flies',
  story: 'As you swat the flies away, you remember that fly wings, or eagle feathers, are a crucial component of the fly spell, you squash one and save it for later.',
  choices: [
    {choice: 'Blue liquid', result: 'blue'},
    {choice: 'Red liquid', result: 'red'},
    {choice: 'Turn back', result: 'turnAround'}
  ]
},
locked: {
  title: 'The door is locked tight',
  story:`The Wizard Glik doesn't want anyone going in here`,
  choices: [
    {choice: 'Enter observation deck', result: 'observationDeck'},
    {choice: 'Continue Chores', result: 'Just as you begin..'},
    {choice: 'Enter Kitchen', result: 'kitchen'}
   ]
  },
  kitchen: {
    title: 'You enter the kitchen',
    story:'The wizard rarely eats but the kitchen is still a mess. empty beakers everywhere on the counter, and 3 full ones in the midst of the broken glass.',
    choices: [
      {choice: 'Blue liquid', result: 'blue'},
      {choice: 'Red liquid', result: 'red'},
      {choice: 'Check the fridge', result: 'fridge'},
      {choice: 'Turn back', result: 'turnAround'}
    ]
  },
  fridge: {
    title: 'You open the fidge...',
    story:'Completely empty.... damn. nothing but flies',
    choices: [
      {choice: 'Blue liquid', result: 'blue'},
      {choice: 'Red liquid', result: 'red'},
      {choice: 'Swat at flies', result: 'fly'},
      {choice: 'Turn back', result: 'turnAround'}

    ]
  },
  turnAround: {
    title: 'You turn around and head back to the main room',
    story:'As you enter the main room of the tower you contemplate your next move.',
    choices: [
      {choice: 'Look around', result: 'wizardsTower'},
      {choice: 'Enter crafting room', result: 'craftingRoom'},
      {choice: 'Enter observation deck', result: 'observationDeck'},
      {choice: 'Enter Kitchen', result: 'kitchen'}
    ]
  },
  observationDeck: {
    title: 'You step outside and breath in the air',
    story:`"FRESH AIR" you say. isn't it nice? Other than the swarm of flies that is pestering you as you stretch. From the observation deck you can see the town of Schmof, 
    a small village which supplies Prussia with grain. to the North you see prussia. As you look around the observation deck you see Gliks telescope, a lawn chair, and a table full of empty beer.`,
    choices: [
    {choice: 'Look in telescope', result: 'telescope'},
    {choice: 'Take a seat', result: 'seat'},
    {choice: 'Search table', result: 'table'},
    {choice: 'Head back inside', result: 'turnAround'}
  ]
},
  telescope: {
    title: 'You look into Gliks telescope',
    story:'You look up, you look down, you look all around. The north you can just barely see travelers reaching the gates of prussia. To the south can see all of Schmof and everyone in it. You see the law offices of Celebrimbor, prominent workplace lawyer; perhaps you could use his help later.',
    choices: [
      {choice: 'Take a seat', result: 'seat'},
      {choice: 'Search table', result: 'table'},
      {choice: 'Head back inside', result: 'turnAround'}
      ]
    },
  table: {
    title: 'You check all around the table',
    story:'Nothing but empties... and Gliks journal.',
    choices: [
      {choice: 'Take a seat', result: 'seat'},
      {choice: 'Look in telescope', result: 'telescope'},
      {choice: 'Head back inside', result: 'turnAround'},
      {choice: 'Open book', result: 'openBook'},
    ]
  },
  seat: {
    title: 'You sit down....',
    story:'And the chair is so comfortable to fall asleep...',
    choices: [
      {choice: 'sleep', result: 'gliksHome'},
    ]
  },
  gliksHome: {
    title: 'ZaaaAAAaaaAAAaap!',
    story:`"jUST WHAT DO YOU THINK YOU ARE DOING IN A RESTRICTED SPACE?" Glik yells
    <div class="lose"><p>YOU LOSE!!!!!!</P></div>`,
    choices: [
      {choice: 'Restart Game', result: 'chapter1'}
    ]
  },
blue: {
  title: 'You drink the blue potion..',
  story:`You are now a bluejay. Not quite what you wanted, but now you can live your days flying the skies which is pretty cool too I guess
  <div class="lose"><p>YOU LOSE?<p></div>`,
  choices: [
    {choice: 'Restart Game', result: 'chapter1'}
  ]
},
redF: {
  title: 'You drink the red potion...',
    story:'Right as you finish it off you begin to shrink. Understanding that this is likely temporary you rush to to Gliks crafting room where you slip under the door',
    choices: [
    {choice: 'Look around crafting room', result: 'craftingRoom'},
  ]
},
openBook: {
  title: 'You open Gliks journal...',
  story:`The book marked page goes into detail about how fly and eagle wings can be used to craft potions of flight.`,
  image: '2.png',
  choices: [
    {choice: 'Take a seat', result: 'seat'},
    {choice: 'Look in telescope', result: 'telescope'},
    {choice: 'Head back inside', result: 'turnAround'},
  ]
},
mixPotions: {
  title: 'You mix the potions',
  story:'The Wizard Glik enters the room and...',
  choices: [
    {choice: 'Fly to Schmof', result: 'schmof'},
    {choice: 'Fly to Prussia', result: 'prussia'},
  ]
},
prussia: {
  title: 'Just as you begin..',
  story:'The Wizard Glik enters the room and...',
  choices: [
    {choice: 'Restart Game', result: 'chapter1'}
  ]
},
schmof: {
  title: 'Just as you begin..',
  story:'The Wizard Glik enters the room and...',
  choices: [
    {choice: 'Restart Game', result: 'chapter1'}
  ]
},

/////////////////////////////////////////////////////////

kitchenF: {
  title: 'You enter the kitchen',
  story:'The wizard rarely eats but the kitchen is still a mess. empty beakers everywhere on the counter, and 3 full ones in the midst of the broken glass.',
  choices: [
    {choice: 'Blue liquid', result: 'blue'},
    {choice: 'Red liquid', result: 'redF'},
    {choice: 'Check the fridge', result: 'fridgeF'},
    {choice: 'Turn back', result: 'turnAroundF'}
  ]
},
fridgeF: {
  title: 'You open the fidge...',
  story:'Completely empty.... damn. nothing but flies',
  choices: [
    {choice: 'Blue liquid', result: 'blue'},
    {choice: 'Red liquid', result: 'redF'},
    {choice: 'Turn back', result: 'turnAroundF'}

  ]
},
turnAroundF: {
  title: 'You turn around and head back to the main room',
  story:'As you enter the main room of the tower you contemplate your next move.',
  choices: [
    {choice: 'Look around', result: 'wizardsTowerF'},
    {choice: 'Enter crafting room', result: 'craftingRoomF'},
    {choice: 'Enter observation deck', result: 'observationDeckF'},
    {choice: 'Enter Kitchen', result: 'kitchenF'}
  ]
},
observationDeckF: {
  title: 'You step outside and breath in the air',
  story:`"FRESH AIR" you say. isn't it nice? Other than the swarm of flies that is pestering you as you stretch. From the observation deck you can see the town of Schmof, 
  a small village which supplies Prussia with grain. to the North you see prussia. As you look around the observation deck you see Gliks telescope, a lawn chair, and a table full of empty beer.`,
  choices: [
  {choice: 'Look in telescope', result: 'telescopeF'},
  {choice: 'Take a seat', result: 'seatF'},
  {choice: 'Search table', result: 'tableF'},
  {choice: 'Head back inside', result: 'turnAroundF'}
]
},
telescopeF: {
  title: 'You look into Gliks telescope',
  story:'You look up, you look down, you look all around. The north you can just barely see travelers reaching the gates of prussia. To the south can see all of Schmof and everyone in it. You see the law offices of Celebrimbor, prominent workplace lawyer; perhaps you could use his help later.',
  choices: [
    {choice: 'Take a seat', result: 'seatF'},
    {choice: 'Search table', result: 'tableF'},
    {choice: 'Head back inside', result: 'turnAroundF'}
    ]
  },
tableF: {
  title: 'You check all around the table',
  story:'Nothing but empties... and Gliks journal.',
  choices: [
    {choice: 'Take a seat', result: 'seatF'},
    {choice: 'Look in telescope', result: 'telescopeF'},
    {choice: 'Head back inside', result: 'turnAroundF'},
    {choice: 'Open book', result: 'openBookF'},
  ]
},
openBookF: {
  title: 'You open Gliks journal...',
  story:`The book marked page goes into detail about how fly and eagle wings can be used to craft potions of flight.`,
  image: '2.png',
  choices: [
    {choice: 'Take a seat', result: 'seatF'},
    {choice: 'Look in telescope', result: 'telescopeF'},
    {choice: 'Head back inside', result: 'turnAroundF'},
  ]
},
wizardsTowerF: {
  title: 'You sweep and continue to dream of life in the big city',
  story:`As you do chores you think about your plan to escape. There are no doors to exit the tower. The Wizard Glik teleports whenever he leaves
  so you know there might not be a door at all. But perhaps there is one hidden around here somewhere...`,
  image: 'WizardsTower.jpg',
  choices: [
    {choice: 'Enter crafting room', result: 'lockedF'},
    {choice: 'Enter observation deck', result: 'observationDeckF'},
    {choice: 'Enter Kitchen', result: 'kitchenF'}
  ]
  },
  fly: {
    title: 'You swat at the flies',
    story: 'As you swat the flies away, you remember that fly wings, or eagle feathers, are a crucial component of the fly spell, you squash one and save it for later.',
    choices: [
      {choice: 'Blue liquid', result: 'blue'},
      {choice: 'Red liquid', result: 'red'},
      {choice: 'Turn back', result: 'turnAroundF'}
    ]
  },
  lockedF: {
    title: 'The door is locked tight',
    story:'The Wizard Glik enters the room and...',
    choices: [
      {choice: 'Enter observation deck', result: 'observationDeckF'},
      {choice: 'Continue Chores', result: 'Just as you begin..F'},
      {choice: 'Enter Kitchen', result: 'kitchenF'}
     ]
    },
}
  


  export {
    story,
  }