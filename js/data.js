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
  title: 'Welcome to Gliks Tower', 
  story:`<div class="flex-child-3"> The Wizard Glik has just stepped out to run errands. He will be back in 5 minutes.
  </div></p>
  <p>
  "Don't forget your chores and you are NOT allowed in my crafting room! OR the observation deck" the wizard says.
  </p>
  <div class="flex-child-3"> <p>
  As the wizard leaves and you mosey around the his tower, you daydream about one day finding a way out of the wizards legally biding contract spell,
  which you foolishly fell for one month prior, and which legally bound you to his employment for the next 10 years. (Gamehindge is a "right to work state," and as such, workers rights are not very abundant). 
  For weeks you have been sneaking into his crafting room to learn his spells.
  You have hit a brick wall with your discrete training however, and the wizard doesn't leave for long thanks to his power of teleportaion. 
  You look around the tower and notice that a fly has fallen onto the window ledge.
  "just the thing I need to start my first spell" you think to yourself. What do you do?</div>`,
choices: [
  {choice: 'Work on chores', result: 'wizardsTower'},
  {choice: 'Enter crafting room', result: 'craftingRoom'},
  {choice: 'Enter observation deck', result: 'craftingRoom'},
  {choice: 'Collect fly', result: 'fly'},
  {choice: 'Enter Kitchen', result: 'kitchen'}
]
},
wizardsTower: {
title: 'You mop around the tower and continue to daydream of life in the big city',
story:`<div class="flex-child-4">As you do chores you think about your plan to escape. There are no doors to exit the tower. The Wizard Glik teleports whenever he leaves
so you know there might not be a door at all. But perhaps there is one hidden around here somewhere...</div>`,
image: 'WizardsTower.jpg',
choices: [
  {choice: 'Enter crafting room', result: 'locked'},
  {choice: 'Enter observation deck', result: 'observationDeck'},
  {choice: 'Collect fly', result: 'fly'},
]
},
craftingRoom: {
title: `You enter the little office where Glik studies his texts. Across from you, you see a table with multiple beakers of liquids, and a book which you recognize as his spell book.`,
story: 'Across from you, you see a table with multiple beakers of liquids, and a book which you recognize as his spell book.',
image: '1.png',
choices: [
{ choice: 'Open book', result: 'openBook'},
  {choice: 'Mix potions', result: 'mixPotions'},
  {choice: 'Continue Chores', result: 'Just as you begin..'}
]
},
fly: {
  title: 'You pick up the fly',
  story: 'Remembering that fly wings, or eagle feathers, are a crucial component of the fly spell, you save these for later.',
  choices: [
    {choice: 'Work on chores', result: 'wizardsTower'},
    {choice: 'Enter crafting room', result: 'craftingRoom'},
    {choice: 'Enter observation deck', result: 'observation deck'},
  ]
},
locked: {
  title: 'The door is locked tight',
  story:'The Wizard Glik enters the room and...',
  choices: [
    {choice: 'Enter crafting room', result: 'Just as you begin..'},
    {choice: 'Enter observation deck', result: 'Just as you begin..'},
    {choice: 'Collect fly', result: 'Just as you begin..'},
    {choice: 'Continue Chores', result: 'Just as you begin..'}
   ]
  },
  kitchen: {
    title: 'You enter the kitchen',
    story:'The wizard rarely eats but the kitchen is still a mess. empty beakers everywhere on the counter, and 3 full ones in the midst of the broken glass.',
    choices: [
      {choice: 'Blue liquid', result: 'blue'},
      {choice: 'Red liquid', result: 'red'},
      {choice: 'Check the fridge', result: 'fridge'},
    {choice: 'Work on chores', result: 'justAsYouBegin'}
    ]
  },
  mixPotions: {
    title: 'You mix the potions',
    story:'The Wizard Glik enters the room and...',
    choices: [
      {choice: 'Enter crafting room', result: 'Just as you begin..'},
      {choice: 'Enter observation deck', result: 'Just as you begin..'},
      {choice: 'Collec tfly', result: 'Just as you begin..'},
      {choice: 'Continue Chores', result: 'Just as you begin..'}
    ]
  },
  observationDeck: {
    title: 'Just as you begin..',
    story:'The Wizard Glik enters the room and...',
    choices: [
    {choice: 'Enter crafting room', result: 'Just as you begin..'},
    {choice: 'Enter observation deck', result: 'Just as you begin..'},
    {choice: 'Collec tfly', result: 'Just as you begin..'},
    {choice: 'Continue Chores', result: 'Just as you begin..'}
  ]
  },
  blue: {
    title: 'Just as you begin..',
    story:'The Wizard Glik enters the room and...',
    choices: [
      {choice: 'Enter crafting room', result: 'Just as you begin..'},
      {choice: 'Enter observation deck', result: 'Just as you begin..'},
      {choice: 'Collec tfly', result: 'Just as you begin..'},
      {choice: 'Continue Chores', result: 'Just as you begin..'}
    ]
  },
  red: {
    title: 'Just as you begin..',
      story:'The Wizard Glik enters the room and...',
      choices: [
      {choice: 'Enter crafting room', result: 'Just as you begin..'},
      {choice: 'Enter observation deck', result: 'Just as you begin..'},
      {choice: 'Collec tfly', result: 'Just as you begin..'},
      {choice: 'Continue Chores', result: 'Just as you begin..'}
    ]
  },
  justAsYouBegin: {
      title: 'Just as you begin..',
      story:'The Wizard Glik enters the room and...',
      choices: [
        {choice: 'Enter crafting room', result: 'craftingRoom'},
        {choice: 'Enter observation deck', result: 'Just as you begin..'},
        {choice: 'Collec tfly', result: 'Just as you begin..'},
        {choice: 'Continue Chores', result: 'Just as you begin..'}
      ]
  },
  justAsYouBegin: {
    title: 'Just as you begin..',
    story:'The Wizard Glik enters the room and...',
    choices: [
      {choice: 'Enter crafting room', result: 'gliksHome'},
      {choice: 'Enter observation deck', result: 'gliksHome'},
      {choice: 'Collect fly', result: 'gliksHome'},
      {choice: 'Continue Chores', result: 'glikLeaves'}
    ]
  },
  gliksHome: {
    title: 'ZaaaAAAaaaAAAaap!',
    story:`"jUST WHAT DO YOU THINK YOU ARE DOING IN A RESTRICTED SPACE?" Glik yells`,
    choices: [
      {choice: 'Enter crafting room', result: 'gliksHome'},
      {choice: 'Enter observation deck', result: 'gliksHome'},
      {choice: 'Continue Chores', result: 'glikLeaves'}
    ]
  },
glikLeaves: {
  title: 'After an indeterminate amount of time doing chores....',
  story:'Glik finally heads for town again. "cant wait until im in Prussia playing music on the big stage!" you think to yourself.',
  choices: [
    {choice: 'Work on chores', result: 'wizardsTower'},
    {choice: 'Enter crafting room', result: 'craftingRoom'},
    {choice: 'Enter observation deck', result: 'observation deck'},
    {choice: 'Collect fly', result: 'fly'}
  ]
},
  openBook: {
  title: 'Just as you begin..',
  story:`The Wizard Glik enters the room and...`,
  image: '2.png',
  choices: [
  {choice: 'Restart Game', result: 'chapter1'}
  ]
  }
  
}
  




  export {
    story,
  }