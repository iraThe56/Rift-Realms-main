BlockEvents.rightClicked('minecraft:chest', event => {
    const { item, player } = event

    console.log(event.block.entity)
    if (event.block.x == 885 && event.block.y == 148 && event.block.z == 90) {
        if (item.id !== 'riftrealmscore:ars_nouveau_dimension') {
            player.tell('You must hold Archwood Key to open this chest')
            event.cancel()
        } else {
            item.damageValue++
            if (item.damageValue > item.maxDamage) item.count--
            
        }
    }
})

BlockEvents.rightClicked(event => {
    const { item, player } = event

    if (event.block.id === 'minecraft:cauldron')
        if (item.id !== 'ars_nouveau:runic_chalk') {
            event.cancel()
        } else {
            item.damageValue++
            event.block.set('hexerei:mixing_cauldron')
            event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run particle minecraft:firework ~ ~ ~ 0.3 0.3 0.3 0.2 100 force`)
            event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.firework_rocket.large_blast block @a ~ ~ ~`)
            event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound botania:black_lotus block @a ~ ~ ~`)
            event.cancel()
            if (item.damageValue > item.maxDamage) item.count--
        }

})

BlockEvents.rightClicked(event => {
    const { item, player } = event

    if (event.block.id === 'minecraft:stone' && event.block.up == 'minecraft:glass')
        if (item.id !== 'kubejs:aether') {
            event.cancel()
        } else {
            item.damageValue++
            event.block.set('minecraft:redstone_lamp')
            event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run particle minecraft:firework ~ ~ ~ 0.3 0.3 0.3 0.2 100 force`)
            event.cancel()
            if (item.damageValue > item.maxDamage) item.count--
        }

})


BlockEvents.rightClicked(event => {
    const { item, player } = event

    if (event.block.id === 'minecraft:enchanting_table' && event.block.up == 'botania:mana_pylon')
        if (item.id !== 'kubejs:aether') {
            event.cancel()
        } else {
            item.damageValue++
            event.block.set('minecraft:redstone_lamp')
            player.tell('Success')
            event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run particle minecraft:firework ~ ~ ~ 0.3 0.3 0.3 0.2 100 force`)
            if (item.damageValue > item.maxDamage) item.count--
        }

})

BlockEvents.rightClicked('minecraft:beacon', event => {
    const { item, player } = event
    if (item.id == 'botania:terrasteel_ingot') {
        player.tell('You must hold Archwood Key to open this chest :)')
        event.cancel()
    }
})

BlockEvents.rightClicked(event => {
    const { item, player } = event

    if (event.block.id === 'minecraft:enchanting_table' && event.block.offset(2, 1, 2) == 'botania:mana_pylon' && event.block.offset(2, 1, -2) == 'botania:mana_pylon' && event.block.offset(-2, 1, -2) == 'botania:mana_pylon' && event.block.offset(-2, 1, 2) == 'botania:mana_pylon')
        if (item.id !== 'kubejs:aether') {
            event.cancel()
        } else {
            item.damageValue++
            event.block.set('minecraft:redstone_lamp')
            event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run particle minecraft:firework ~ ~ ~ 0.3 0.3 0.3 0.2 100 force`)
            event.cancel()
            if (item.damageValue > item.maxDamage) item.count--
        }

})

BlockEvents.rightClicked('minecraft:bedrock', event => {
    const { item, player } = event
    if (item.id == 'minecraft:ender_pearl') {
        event.cancel()
        player.tell("fired")
        event.server.runCommandSilent(`execute in undergarden:undergarden positioned ${event.block.x} 120 ${event.block.z} run tp ${event.entity.username} ~ ~ ~`)
        event.server.runCommandSilent(`execute in undergarden:undergarden positioned ${event.block.x} 120 ${event.block.z} run fill ~ ~ ~ ~ ~1 ~ air`)
        event.server.runCommandSilent(`execute in undergarden:undergarden positioned ${event.block.x} 120 ${event.block.z} run setblock ~ ~-1 ~ stone`)
    }
})

