/*ItemEvents.tooltip(tooltip => {
    // Add tooltip to all of these items
    tooltip.add(['quark:backpack', 'quark:magnet', 'quark:crate'], 'Added by Quark Oddities')
    // You can also use any ingredient except #tag (due to tags loading much later than client scripts)
    tooltip.add(/refinedstorage:red_/, 'Can be any color')
    // Multiple lines with an array []. You can also escape ' by using other type of quotation marks
    tooltip.add('thermal:latex_bucket', ["Not equivalent to Industrial Foregoing's Latex", 'Line 2 text would go here'])
    // Use some data from the client to decorate this tooltip. name returns a component so we just append that.
    tooltip.add('minecraft:skeleton_skull', Text.of('This used to be ').append(Client.player.name).append("'s head"))
    
    tooltip.addAdvanced('thermal:latex_bucket', (item, advanced, text) => {
      text.add(0, Text.of('Hello')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
    })
    
    tooltip.addAdvanced('minecraft:beacon', (item, advanced, text) => {
      // shift, alt and ctrl are all keys you can check!
      if (!tooltip.shift) {
        text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
      } else {
        text.add(1, Text.green('Gives positive effects to players in a range').bold(true))
        text.add(2, Text.red('Requires a base built out of precious metals or gems to function!'))
        text.add(3, [Text.white('Iron, '), Text.aqua('Diamonds, '), Text.gold('Gold '), Text.white('or even '), Text.green('Emeralds '), Text.white('are valid base blocks!')])
      }
    })
    
  })*/