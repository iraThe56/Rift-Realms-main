ServerEvents.recipes(event => {
    event.remove({ output: 'botania:runic_altar' });
    event.shaped(
        Item.of('botania:runic_altar', 1), // arg 1: output
        [
            'A A',
            'BBB', // arg 2: the shape (array of strings)
            'BCB'
        ],
        {
            A: 'botania:manasteel_nugget',
            B: 'botania:livingrock',  //arg 3: the mapping object
            C: 'botania:mana_diamond'
        }
    )
    /// Rune of Water
    event.recipes.botania.runic_altar("2x botania:rune_water", ["botania:mana_powder", "botania:manasteel_ingot", "minecraft:ice", "#forge:raw_fishes", "minecraft:kelp"], 5000);
    event.remove({ output: 'botania:rune_water' });
    /// Rune of Air
    event.replaceInput({ output: 'botania:rune_air', type: 'botania:runic_altar' }, '#minecraft:wool_carpets', 'minecraft:paper');
    /// Rune of Fire

    /// Rune of Earth

    /// Rune of Mana

    /// Rune of Spring
    event.remove({ output: 'botania:rune_spring' });
    event.recipes.botania.runic_altar("botania:rune_spring", ["botania:rune_fire", "botania:rune_water", "minecraft:potato", 'minecraft:sweet_berries', "supplementaries:flax", "minecraft:flowering_azalea_leaves"], 10000);
    /// Rune of Summer
    event.remove({ output: 'botania:rune_summer' });
    event.recipes.botania.runic_altar("botania:rune_summer", ["botania:rune_earth", "botania:rune_air", "minecraft:melon", "minecraft:cactus", "farmersdelight:tomato", "#forge:sand"], 10000);
    /// Rune of Autumn
    event.remove({ output: 'botania:rune_autumn' });
    event.recipes.botania.runic_altar("botania:rune_autumn", ["botania:rune_fire", "botania:rune_air", "minecraft:pumpkin", "minecraft:beetroot", 'farmersdelight:onion', "#forge:mushrooms"], 10000);
    /// Rune of Winter
    event.remove({ output: 'botania:rune_winter' });
    event.recipes.botania.runic_altar("botania:rune_winter", ["botania:rune_earth", "botania:rune_water", 'minecraft:spruce_log', 'minecraft:snow_block', "farmersdelight:cabbage", "minecraft:blue_ice"], 10000);

/*    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "kubejs:manipulation_catalyst"
        },
        "input": {
            "item": "riftrealmscore:true_archwood"
        },
        "mana": 50000,
        "output": {
            "count": 1,
            "item": "riftrealmscore:ars_nouveau_dimension"
        }
    })*/

    event.shaped(
        Item.of('kubejs:manipulation_catalyst', 1), // arg 1: output
        [
            'ABA',
            'DCD', // arg 2: the shape (array of strings)
            'ADA'
        ],
        {
            A: 'botania:livingrock',
            B: 'botania:life_essence',  //arg 3: the mapping object
            C: 'botania:conjuration_catalyst',
            D: 'botania:gaia_ingot'
        }
    )

    event.remove({ output: 'botania:terrasteel_ingot' })
/*    event.recipes.botania.terra_plate("botania:terrasteel_ingot",
        [
            'kubejs:terra_heart',
            'botania:manasteel_ingot',
            'botania:rune_spring',
            'botania:rune_summer',
            'botania:rune_autumn',
            'botania:rune_winter'
        ], 500000);*/

})


ServerEvents.tags('item', event => {
    ///Remove Autumn growing of Cabbage
    event.remove('sereneseasons:autumn_crops', 'farmersdelight:cabbage_seeds')
/*    ///Remove Winter growing of Onion
    event.remove('sereneseasons:winter_crops', 'thermal:onion_seeds')
    event.remove('sereneseasons:winter_crops', 'thermal:onion')*/
})