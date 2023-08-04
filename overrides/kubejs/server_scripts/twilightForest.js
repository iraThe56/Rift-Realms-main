/*global.Wakeup = (event) =>{
    event.server.runCommandSilent('say PLAYER SLEPT')
}*/
/*EntityEvents.hurt(event => {
    const {entity, level} = event
    player.tell("hey")
    if (entity.type == ''){
        event.server.runCommand(`say ouchie`)
        event.cancel()
    }
})*/

/*EntityEvents.spawned(event => {
    const {entity, level} = event
    if (entity.type != 'minecraft:wither') { return }
    if (level.dimension == 'minecraft:nether') { return }
    event.cancel()
})*/

/// Gives blindness if hit by zombie
/*EntityEvents.hurt(event => {
    let { entity, source } = event
    if (!entity.player) return
    if (source.msgId != "mob") return
    let sourceEntity = source.actual
    if (sourceEntity.type != "minecraft:zombie") return
    entity.potionEffects.add("blindness", 100)
})*/

/*EntityEvents.spawned("ender_dragon", event => {
    *//**
     * @type {Internal.LivingEntity}
     *//*
    let entity = event.entity
    entity.getHealth()
    event.server.runCommand(`say `+ entity.getHealth())
    entity.setMaxHealth(1000)
    entity.setHealth(1000)
})*/

/*BlockEvents.rightClicked('minecraft:stone', event => {
    let blockY = event.player.persistentData.block.y
    event.player.tell(persistentData.blockY)
})*/


/*ItemEvents.foodEaten('alexsmobs:rainbow_jelly', event => {
    const {player, server} = event
    player.tell("Yummy")
    event.player.persistentData.twilightForest = {}
    event.player.persistentData.myFancyVariable = 12356
    event.player.persistentData.twilightForest.x = Math.floor(player.x)
    event.player.persistentData.twilightForest.y = Math.floor(player.y)
    event.player.persistentData.twilightForest.z = Math.floor(player.z)
    event.server.runCommandSilent(`effect give ${event.entity.username} theabyss:ghost 2 1 true`)
    ///event.server.runCommandSilent(`effect give ${event.entity.username} minecraft:invisibility 5 1 true`)
    server.scheduleInTicks(3 * 20, callback => {
        event.server.runCommandSilent(`execute in ${player.level.dimension} run tp ${event.entity.username} ${player.persistentData.twilightForest.x} ${player.persistentData.twilightForest.y} ${player.persistentData.twilightForest.z}`)
        player.tell("3 seconds")
    }) 
})*/



/*PlayerEvents.inventoryChanged(event => {
    const {player} = event
    let nbtHead = player.headArmorItem.nbt
    let nbtChest = player.chestArmorItem.nbt
    let nbtLegs = player.legsArmorItem.nbt
    let nbtFeet = player.feetArmorItem.nbt
    player.tell(player.level.dimension)
    if(player.headArmorItem.id === 'mekanism:mekasuit_helmet'
    && player.chestArmorItem.id === 'mekanism:mekasuit_bodyarmor'
    && player.legsArmorItem.id === 'mekanism:mekasuit_pants'
    && player.feetArmorItem.id === 'mekanism:mekasuit_boots'
    ) {
        player.tell('true')
        nbtHead.mekData.EnergyContainers.getCompound(0).stored = 0
        nbtChest.mekData.EnergyContainers.getCompound(0).stored = 0
        nbtLegs.mekData.EnergyContainers.getCompound(0).stored = 0
        nbtFeet.mekData.EnergyContainers.getCompound(0).stored = 0
    }
    else {
        player.tell('nope')
    }
})*/
