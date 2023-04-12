let story = {chapters: 'chapter1', 
  chapter1: {
    title: 'Welcome to Gliks Tower', 
    story:`<div class="intro">
    You are the apprentice to the evil wizard Glik, who tricked you into his employment.
    Your goal is to find a way to put this chapter of your life behind you so that you can go to the city of Prussia and make it big as a bard. </div>`,
    image: 'WizardsTower.jpg',
    choices: [ 
      {choice: 'Begin Quest?', result: 'beginQuest'}
    ]
  },
  beginQuest: {
    title: 'The Wizard Glik has just stepped out to run errands.', 
    story:`<div class="story-intro"> He will be back in 5 minutes.
    </div>
    "Don't forget your chores. And you are NOT allowed in my crafting room OR the observation deck!" the wizard says.
    <div class="story-intro">
    As the wizard leaves and you mosey around his tower, you daydream about one day finding a way out of the wizard's legally binding contract spell,
    which you foolishly fell for one month prior, and which legally bound you to his employment for the next ten years. (Daventry is a "right to work state," and as such, workers' rights are not very abundant). 
    For weeks you have been sneaking into his crafting room to learn his spells.
    You have hit a brick wall with your secret training, however and the wizard doesn't leave for long thanks to his power of teleportation. 
    You look around the tower and notice flies gathering outside the window.
    "just the thing I need to start my first spell," you think to yourself. What do you do?</div>`,
    choices: [
      {choice: 'Look around', result: 'wizardsTower'},
      {choice: 'Enter crafting room', result: 'locked'},
      {choice: 'Enter observation deck', result: 'observationDeck'},
      {choice: 'Enter Kitchen', result: 'kitchen'}
    ]
  },
  wizardsTower: {
    title: 'You sweep and continue to dream of life in the big city',
    story:`As you do chores, you think about your plan to escape. There are no doors to exit the tower. The Wizard Glik teleports whenever he leaves,
    so you know there might not be a door at all. But perhaps there is one hidden around here somewhere...`,
    image: 'WizardsTower.jpg',
    choices: [
      {choice: 'Enter crafting room', result: 'locked'},
      {choice: 'Enter observation deck', result: 'observationDeck'},
      {choice: 'Enter Kitchen', result: 'kitchen'}
    ]
  },
  craftingRoom: {
    title: `You enter the little office where Glik studies his texts.`,
    story: 'Across from you, you see a table with multiple beakers of liquids, and a book that you recognize as his spell book.',
    image: 'craftingtable.jpg',
    choices: [
      {choice: 'Mix potions', result: 'mixPotions'},
      {choice: 'Turn back', result: 'turnAround'}
    ]
  },
  fly: {
    title: 'You swat at the flies',
    story: 'As you swat the flies away, you remember that fly wings, or eagle feathers, are a crucial component of the fly spell; you squash one and save it for later.',
    choices: [
      {choice: 'Blue liquid', result: 'blue'},
      {choice: 'Red liquid', result: 'redF'},
      {choice: 'Turn back', result: 'turnAround'}
    ]
  },
  locked: {
    title: 'The door is locked tight',
    story:`The Wizard Glik doesn't want anyone going in here`,
    choices: [
      {choice: 'Enter observation deck', result: 'observationDeck'},
      {choice: 'Look around', result: 'wizardsTower'},
      {choice: 'Enter Kitchen', result: 'kitchen'}
    ]
  },
  kitchen: {
    title: 'You enter the kitchen',
    story:'The wizard rarely eats, but the kitchen is still a mess. Empty beakers everywhere on the counter, and two full ones in the midst of the broken glass.',
    choices: [
      {choice: 'Blue liquid', result: 'blue'},
      {choice: 'Red liquid', result: 'red'},
      {choice: 'Check the fridge', result: 'fridge'},
      {choice: 'Turn back', result: 'turnAround'}
    ]
  },
  fridge: {
    title: 'You open the fidge...',
    story:'Completely empty.... Damn. Nothing but flies',
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
    image: 'WizardsTower.jpg',
    choices: [
      {choice: 'Look around', result: 'wizardsTower'},
      {choice: 'Enter crafting room', result: 'locked'},
      {choice: 'Enter observation deck', result: 'observationDeck'},
      {choice: 'Enter Kitchen', result: 'kitchen'}
    ]
  },
  observationDeck: {
    title: 'You step outside and breath in the air',
    story:`"FRESH AIR," you say. isn't it nice? Other than the swarm of flies that is pestering you as you stretch. From the observation deck, you can see the town of Schmof, 
    a small village that supplies Prussia with grain. to the North you see Prussia. As you look around the observation deck you see Gliks telescope, a lawn chair, and a table full of empty beer.`,
    image: 'observation.jpg',
    choices: [
      {choice: 'Look in telescope', result: 'telescope'},
      {choice: 'Take a seat', result: 'seat'},
      {choice: 'Search table', result: 'table'},
      {choice: 'Head back inside', result: 'turnAround'}
    ]
  },
  telescope: {
    title: 'You look into Gliks telescope',
    story:'You look up, you look down, you look all around. In the north, you can just barely see travelers reaching the gates of Prussia. To the south can see all of Schmof and everyone in it. You see the law offices of Celebrimbor, a prominent workplace lawyer; perhaps you could use his help later.',
    image: 'observation.jpg',
    choices: [
      {choice: 'Take a seat', result: 'seat'},
      {choice: 'Search table', result: 'table'},
      {choice: 'Head back inside', result: 'turnAround'}
      ]
  },
  table: {
    title: 'You check all around the table',
    story:'Nothing but empties... And Gliks journal.',
    image: 'observation.jpg',
    choices: [
      {choice: 'Take a seat', result: 'seat'},
      {choice: 'Look in telescope', result: 'telescope'},
      {choice: 'Head back inside', result: 'turnAround'},
      {choice: 'Open book', result: 'openBook'}
    ]
  },
  seat: {
    title: 'You sit down....',
    story:'And the chair is so comfortable, you begin to fall asleep...',
    choices: [
      {choice: 'sleep', result: 'gliksHome'}
    ]
  },
  redF: {
    title: 'You drink the red potion...',
    story:'Right as you finish it off you begin to shrink. Understanding that this is likely temporary you rush to Gliks crafting room where you slip under the door',
    choices: [
      {choice: 'Look around crafting room', result: 'craftingRoom'}
    ]
  },
  red: {
    title: 'You grab the red potion...',
    story:`"shrink potion" it says on the back. Knowing that you only have one shot at this, you put it back and save it for the right moment.
    <p>"I should come back later for this," you say</p>`,
    choices: [
      {choice: 'Blue liquid', result: 'blue'},
      {choice: 'Check the fridge', result: 'fridge'},
      {choice: 'Turn back', result: 'turnAround'}
    ]
  },
  openBook: {
    title: 'You open Gliks journal...',
    story:`The book marked page goes into detail about how fly and eagle wings can be used to craft potions of flight.`,
    choices: [
      {choice: 'Take a seat', result: 'seat'},
      {choice: 'Look in telescope', result: 'telescope'},
      {choice: 'Head back inside', result: 'turnAround'}
    ]
  },
  gliksHome: {
    title: 'ZaaaAAAaaaAAAaap!',
    story:`"JUST WHAT DO YOU THINK YOU ARE DOING IN A RESTRICTED SPACE?" Glik yells.
    <div class="lose"><p>YOU LOSE!!!!!!</P></div>`,
    image: 'gameover-screen.jpg',
    choices: [
      {choice: 'Restart Game', result: 'chapter1'}
    ]
  },
  blue: {
    title: 'You drink the blue potion..',
    story:`You are now a bluejay. Not quite what you wanted, but now you can live your days flying the skies, which is pretty cool too, I guess.
    <div class="lose"><p>YOU LOSE?<p></div>`,
    image: 'gameover-screen.jpg',
    choices: [
      {choice: 'Restart Game', result: 'chapter1'}
    ]
  },
  mixPotions: {
    title: 'You mix the potions',
    story:'You add the fly wings. You.... become a fly. You feel insignificant and yet, free. An eagle would have been better. But you take off out of the tower window and begin your journey...',
    choices: [
      {choice: 'Fly to Schmof', result: 'schmof'},
      {choice: 'Fly to Prussia', result: 'prussia'}
    ]
  },
  prussia: {
    title: 'You set off for prussia',
    story:`As a fly, it takes you incredibly long to get there, had you found an eagle feather this trip would have taken half of the time.
    finally you make it though! The big city. You can finally hit the stage and make it big as a bard. <p>BUT THEN</p><p>famous workplace lawyer Celebrimbor taps you on shoulder.
    <p>You sir are in violation of your workplace contract with The Wizard Glik. We are going to have to let the courts settle this.</p><p>YOU LOSE PROBABLY..</p>`,
    image: 'gameover-screen.jpg',
    choices: [
      {choice: 'Restart Game', result: 'chapter1'}
    ]
  },
  schmof: {
    title: 'You fly down to the village as fast as you can.',
    story:'You turn back into a human and you wonder "what should I do next?',
    image: 'observation.jpg',
    choices: [
      {choice: 'Hit the tavern', result: 'tavern'},
      {choice: 'Catch a show', result: 'tavern'},
      {choice: 'Find a lawyer', result: 'lawyer'}
    ]
  },
  tavern: {
    title: 'You enter the tavern to find...',
    story:'None other than The Wizard Glik! And he is not happy to see you here.<p>"ARREST THEM!" he screams.<p>YOU LOSE</p>',
    image: 'gameover-screen.jpg',
    choices: [
      {choice: 'Restart Game', result: 'chapter1'}
    ]
  },
  lawyer: {
    title: 'You knock on the door to the law office of Celebrimbor',
    story:`Shocked and appalled to hear your story, Celebrimbor, the best workplace lawyer in the land takes up your case. After a long battle in court,
    Glik LLC is dissolved as an entity and you are granted restitution which you used to launch your career as a bard at the nicest casino in Prussia.`,
    image: 'lawyer.jpg',
    choices: [
      {choice: 'Restart Game', result: 'restartGame'}
    ]
  },
//-----------------bellow is any path taken after a fly is caught denoted by an F at the end of the result-------------------------------//





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
    story:'Completely empty.... Damn. Nothing but flies',
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
    story:`"FRESH AIR," you say. isn't it nice? Other than the swarm of flies that is pestering you as you stretch. From the observation deck, you can see the town of Schmof, 
    a small village that supplies Prussia with grain. to the North you see Prussia. As you look around the observation deck you see Gliks telescope, a lawn chair, and a table full of empty beer.`,
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
      {choice: 'Open book', result: 'openBookF'}
    ]
  },
  openBookF: {
    title: 'You open Gliks journal...',
    story:`The bookmarked page goes into detail about how fly and eagle wings can be used to craft potions of flight.`,
    choices: [
      {choice: 'Take a seat', result: 'seatF'},
      {choice: 'Look in telescope', result: 'telescopeF'},
      {choice: 'Head back inside', result: 'turnAroundF'}
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
    lockedF: {
      title: 'The door is locked tight',
      story:'',
      choices: [
        {choice: 'Enter observation deck', result: 'observationDeckF'},
        {choice: 'Look around', result: 'wizardsTowerF'},
        {choice: 'Enter Kitchen', result: 'kitchenF'}
    ]
  },
    restartGame: {
      title: '',
      story:`<body id="body">
      <section class="flex-parent">
          <div class="flex-child" id="title-screen">
              <div class="flex-child">
                  <div class="line-1 anim-typewriter"><h1>                <div class="character">
                      <img class="character_spritesheet" src="./img/walking-man.jpg"/>
                  </div> Bard's Quest</h1></div>
                  <div>
                  speak friend and re-enter
                  </div>
              </div>
          </div>
      </section>
  </body>`,
      choices: [
        {choice: 'Friend', result: 'wrong'},
        {choice: 'Pedo mellon a minno', result: 'chapter1'}
    ]
  },
  wrong: {
    title: 'Nothing happens...',
    story:'Speak friend and enter',
    choices: [
      {choice: 'Friend', result: 'wrong'},
      {choice: 'Pedo mellon a minno', result: 'chapter1'}
  ]
 }
}
  


export {
  story
}