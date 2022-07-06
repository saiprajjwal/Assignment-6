const gameEvents = new Map([
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🔶 Yellow card"],
    [69, "🔴 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🔶 Yellow card"]
  ]);
  
  const uniqueEvents = [...new Set(gameEvents.values())];
  console.log(uniqueEvents);
  

  gameEvents.delete(64);
  console.log(gameEvents);
  

  const eventsInGameTime = () => {
    const timeMatch = 90;
    let inGameTime = [];
    for (const [key] of gameEvents) {
      if (key <= timeMatch) inGameTime = [...inGameTime, key];
    }
    console.log(
      `An event happend, on average ${timeMatch / inGameTime.length} minutes`
    );
  };

  
  const whichHalfTimeHappend = (mapArrays) => {
    for (const [key, value] of mapArrays) {
      key <= 45
        ? console.log(`[FIRST HALF] ${key}: ${value}`)
        : console.log(`[SECOND HALF] ${key}: ${value}`);
    }
  };
  
  whichHalfTimeHappend(gameEvents);
  