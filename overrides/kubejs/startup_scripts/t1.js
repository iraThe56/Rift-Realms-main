Platform.mods.kubejs.name = 'Rift Realms'

var bosses = [
    {boss:'twilightforest:naga',displayName:'Naga', loot:'twilightforest:entities/naga'},
    {boss:'twilightforest:lich',displayName:'Twilight Lich',loot:'twilightforest:entities/lich'},
    {boss:'twilightforest:minoshroom',displayName:'Minoshroom',loot:'twilightforest:entities/naga'},
    {boss:'twilightforest:hydra',displayName:'Hydra',loot:'twilightforest:entities/naga'},
    {boss:'twilightforest:ur_ghast',displayName:'Ur-Ghast',loot:'twilightforest:entities/naga'},
    {boss:'twilightforest:alpha_yeti',displayName:'Alpha Yeti',loot:'twilightforest:entities/naga'},
    {boss:'twilightforest:snow_queen',displayName:'Snow Queen',loot:'twilightforest:entities/naga'},
    {boss:'twilightforest:giant_miner',displayName:'Giant',loot:'incendium:hovering_inferno'},
    {boss:'twilightforest:armored_giant',displayName:'Giant',loot:'incendium:hovering_inferno'},
    {boss:'twilightforest:naga',displayName:'Knight Phantom',loot:'incendium:hovering_inferno'},
    {boss:'twilightforest:naga',displayName:'Quest Ram',loot:'twilightforest:entities/questing_ram_rewards'},
    {boss:'ars_nouveau:wilden_boss',displayName:'Wilden Chimera',loot:'incendium:hovering_inferno'},
    {boss:'incendium:hovering_inferno',displayName:'Naga',loot:'incendium:hovering_inferno'}
]

StartupEvents.registry('item', event => {

    // Texture for this item goes in kubejs/assets/kubejs/textures/item/my_part.png

    event.create('incomplete_silicon_press').displayName('Incomplete silicon press').texture('ae2:item/silicon_press')
    event.create('incomplete_press_gear_die').displayName('Incomplete press gear die').texture('thermal:item/press_gear_die')
    event.create('redstone_wire').displayName('Redstone Wire').texture('kubejs:item/redstone_wire')
    event.create('redstone_spool').displayName('Redstone Spool').texture('kubejs:item/redstone_spool')
    event.create('sulphurous_blend').displayName('Sulpherous Blend').texture('kubejs:item/sulphurous_blend')
    event.create('caustic_mixture').displayName('Caustic Mix').texture('kubejs:item/caustic_mixture')
    event.create('radiating_particles').displayName('Radiating Particles').texture('kubejs:item/radiating_particles')
    event.create('qc_blend').displayName('Quartz-Carbon Blend').texture('kubejs:item/qc_blend')
    event.create('ars_portal_icon').displayName('Portal Icon').texture('kubejs:item/portal_icon')
    event.create('unpolished_silicon').displayName('Unpolished Silicon').texture('kubejs:item/unpolished_silicon')
    event.create('aether').displayName('Aether').texture('kubejs:item/portal_icon')
    event.create('flowering_heart').displayName('Flowering Heart').texture('kubejs:item/flowering_heart')
    event.create('terra_heart').displayName('Heart of Terra').texture('kubejs:item/terra_heart')
    event.create('jelly_sedative').displayName('Jelly Sedative').texture('kubejs:item/jelly_sedative')

    let circuit = (name) => {
        event.create('drilled_' + name.toLowerCase() + '_circuit').displayName('Drilled ' + name + ' Circuit').texture('kubejs:item/ae2/' + name.toLowerCase() + '_drilled')
        event.create('laser_etched_' + name.toLowerCase() + '_circuit').displayName('Laser Etched ' + name + ' Circuit').texture('kubejs:item/ae2/' + name.toLowerCase() + '_etched')
        event.create('incomplete_' + name.toLowerCase() + '_circuit').displayName('Incomplete ' + name + ' Circuit').texture('ae2:item/' + name.toLowerCase() + '_processor')
    }
    event.create('drilled_silicon').displayName('Drilled Silicon').texture('kubejs:item/ae2/silicon_drilled')
    circuit("Engineering")
    circuit("Logic")
    circuit("Calculation")
    

    let rewardBag = (boss, mod, displayName, lootTable) => {
        event.create(`${mod}_${boss}_bag`).displayName(`${displayName} Reward Bag`).texture(`kubejs:item/reward_bags/${boss}`)
    }
})

StartupEvents.registry('block', event => {
    event.create('compacted_sulphurous_blend','falling')
        .material('sand')
        .hardness(0.5)
        .displayName('Compacted Sulphurous Blend') // No longer required in 1.18.2+
        .tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
        .requiresTool(false) // Make it require a tool to drop ay loot
        .textureAll('kubejs:block/compacted_sulphurous_blend')

    event.create('manipulation_catalyst')
        .material('stone')
        .hardness(1)
        .displayName('Manipulation Catalyst') // No longer required in 1.18.2+
        .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
        .requiresTool(true) // Make it require a tool to drop ay loot
        .textureAll('kubejs:block/manipulation_catalyst')

    event.create('depthrock_osmium_ore')
        .material('stone')
        .hardness(1)
        .displayName('Depthrock Osmium Ore')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .tagBlock('forge:ores/osmium')
        .tagBlock('forge:ores_in_ground/depthrock')
        .tagBlock('forge:ores')
        .requiresTool(true)
        .textureAll('kubejs:block/depthrock_osmium_ore')

    event.create('depthrock_uranium_ore')
        .material('stone')
        .hardness(1)
        .displayName('Depthrock Uranium Ore')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .tagBlock('forge:ores/uranium')
        .tagBlock('forge:ores_in_ground/depthrock')
        .tagBlock('forge:ores')
        .requiresTool(true)
        .textureAll('kubejs:block/depthrock_uranium_ore')


    let machine = (name, layer) => {
        let id = name.toLowerCase()
        event.create(id + '_machine')
            .model('kubejs:block/' + id + '_machine')
            .material('lantern')
            .hardness(3.0)
            .displayName(name + ' Machine')
            .notSolid()
            .renderType(layer)
        event.create('incomplete_' + id + '_machine')
            .model('kubejs:block/' + id + '_machine')
            .material('lantern')
            .hardness(3.0)
            .displayName(name + ' Machine')
            .notSolid()
            .renderType(layer)
    }

    machine('Andesite', "solid")
    machine('Copper', "cutout")
    machine('Brass', "solid")
})

BlockEvents.modification(event => {
    event.modify('undergarden:depthrock', block => {
        block.destroySpeed = 5

    })
})

// Startup script
StartupEvents.registry('fluid', event => {
    // These first examples are 1.16.5 and 1.18.2 syntax

    // Basic "thick" (looks like lava) fluid with red tint
    event.create('impure_molten_osmium')
        .thickTexture(0x8495a1)
        .bucketColor(0x8495a1)
        .displayName('Impure Molten Osmium')
        .viscosity(2000)
        .density(2500)
        .luminosity(15)

    event.create('molten_osmium')
        .thickTexture(0xcbdeea)
        .bucketColor(0xcbdeea)
        .displayName('Molten Osmium')
        .viscosity(2000)
        .density(2500)
        .luminosity(15)

    event.create('nitric_acid')
        .thinTexture(0xebe786)
        .bucketColor(0xebe786)
        .displayName('Nitric Acid')
        .viscosity(1000)
        .density(1000)
        .luminosity(0)

    event.create('world_spirit')
        .stillTexture('kubejs:block/essence_still')
        .flowingTexture('kubejs:block/essence_flowing')
        .color(0x32B822)
        .bucketColor(0x32B822)
        .displayName('Spirit of the World')
        .viscosity(100)
        .density(100)
        .luminosity(15)

    event.create('contaminated_solvent')
        .thinTexture(0x9ACD58)
        .bucketColor(0x9ACD58)
        .displayName('Contaminated Solvent')
        .viscosity(1000)
        .density(1000)
        .luminosity(0)

    event.create('pipe_sealant')
        .thickTexture(0x202020)
        .bucketColor(0x202020)
        .displayName('Pipe Sealant')
        .viscosity(6000)
        .density(5000)
        .luminosity(0)

    event.create('molten_tin')
        .thickTexture(0xa1c6c2)
        .bucketColor(0xa1c6c2)
        .displayName('Molten Tin')
        .viscosity(6000)
        .density(5000)
        .luminosity(15)

    event.create('molten_lead')
        .thickTexture(0x575e79)
        .bucketColor(0x575e79)
        .displayName('Molten Lead')
        .viscosity(6000)
        .density(5000)
        .luminosity(15)

    event.create('solder')
        .thickTexture(0x748282)
        .bucketColor(0x748282)
        .displayName('Solder')
        .viscosity(6000)
        .density(5000)
        .luminosity(14)
})

WorldgenEvents.add(event => {
    // use the anchors helper from the event
    const { anchors } = event

    event.addOre(ore => {
        ore.id = 'kubejs:depthrock' // (optional, but recommended) custom id for the feature

        // examples on how to use targets
        ore.addTarget('undergarden:depthrock', 'kubejs:depthrock_osmium_ore')       // replace Deepslate with Nether Wart Blocks
        ore.addTarget('undergarden:depthrock', 'kubejs:depthrock_uranium_ore')

        ore.count([10, 20])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
            .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
            .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
                anchors.aboveBottom(1),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
                anchors.absolute(80)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
            )								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32

        // more, optional parameters (default values are shown here)
        ore.size = 5                            // max. vein size
        ore.noSurface = 0.7                     // chance to discard if the ore would be exposed to air
        ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
        ore.chance = 0							            // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
    })
})

/*MoreJSEvents.registerPotionBrewing((event) => {
    event.addCustomBrewing('minecraft:fermented_spider_eye', 'the_bumblezone:royal_jelly_bottle', 'kubejs:jelly_sedative');
})*/

/*StartupEvents.registry('mob_effect', event => {

    event.create('crushing_abyss').modifyAttribute('forge:entity_gravity','d3a16ebc-2112-11ee-be56-0242ac120002',5,"multiply_total").color(Color.DARK_PURPLE)
    event.create('jelly_sedative').modifyAttribute('forge:entity_gravity','d3a16ebc-2112-11ee-be56-0242ac120002',5,"multiply_total").color(Color.LIGHT_PURPLE)
})

StartupEvents.registry('mob_effect', event =>{
    event.create('ae2:fluix_poisoning')
    .color(0x4E3C95)
    .modifyAttribute("minecraft:generic.max_health", 'health_max', -0.5, 'addition')
    .effectTick((entity, amplifier) =>{
        if (entity.attack() && entity.getHealth() > 6) { 
            entity.setHealth(entity.minecraftEntity.getHealth() - 1)
        }
    })
})*/