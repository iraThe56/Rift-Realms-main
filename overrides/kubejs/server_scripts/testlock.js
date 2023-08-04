BlockEvents.rightClicked('minecraft:chest', event => {
    const { item, player } = event

    if (event.block.entity && event.block.entity.nbt) {
        console.log(event.block.entity.nbt)
    } else {
        console.log('Block entity or NBT data is undefined')
    }

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


const cooldown = (20 * 3)

// PlayerEvents.respawned(event => {
//     const { player } = event
//     if (Math.random() < 0.01) {
//         player.tell('TRUE')
//         event.server.runCommandSilent(`playsound alexsmobs:april_fools_power_outage ambient ${event.entity.username}`)
//         event.server.runCommandSilent('execute as ${event.entity.username} at ${event.entity.username} positioned ^ ^ ^-10 run playsound minecraft:entity.warden.ambient hostile ${event.entity.username}')
//         event.server.runCommandSilent(`effect give ${event.entity.username} minecraft:darkness 180 2 true`)
//         event.server.runCommandSilent(`effect give ${event.entity.username} minecraft:mining_fatigue 120 2 true`)
//     } else {
//         player.tell('FALSE')
//     }

// })

/*EntityEvents.spawned(event => {
*//*    event.server.runCommandSilent(`say ${event.entity.type}`)*//*
    if (event.entity.type = 'minecraft:slime')
        event.cancel()
})*/

/*BlockEvents.rightClicked('minecraft:white_bed', event => {
    const { player, server } = event
    player.tell('Clicked Dirt!')
    event.server.runCommandSilent(`execute as ${event.entity.username} at @s run summon chicken ~ ~5 ~`)
    "Wait 5 seconds"
    server.scheduleInTicks(2 * 20, callback => {
        event.server.runCommandSilent(`execute as ${event.entity.username} at @s run summon cow ~ ~1 ~`)
        player.tell("Five seconds ago you clicked dirt!")
    }) 
})*/

// EntityEvents.spawned('slime', event => {
//     event.cancel()
// })