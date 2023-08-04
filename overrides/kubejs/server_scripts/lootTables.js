Item.of('minecraft:dirt', "{RepairCost:0,display:{Name:'{\"text\":\"totw_reworked:tower_chest\"}'}}")
let lootMatrix = [
    //chest, chestLevel, multiplier, roles, enchant, subscriptions
    ["dungeoncrawl:chests/stage_1", 4, 3, 4, 5, [["MinecraftStandard", 8], ["ArmorAndTools", 1], ["ModdedStandard", 6]]],
    ["dungeoncrawl:chests/stage_2", 4, 3, 9, 10, [["MinecraftStandard", 8], ["ArmorAndTools", 1], ["ModdedStandard", 6]]],
    ["dungeoncrawl:chests/stage_3", 6, 2, 3, 15, [["MinecraftStandard", 8], ["ArmorAndTools", 1], ["ModdedStandard", 6]]],
    ["dungeoncrawl:chests/stage_4", 6, 2, 4, 20, [["MinecraftStandard", 8], ["ArmorAndTools", 1], ["ModdedStandard", 6]]],
    ["dungeoncrawl:chests/stage_5", 7, 1, 6, 30, [["MinecraftStandard", 8], ["ArmorAndTools", 1], ["ModdedStandard", 6]]],
    ["minecraft:chests/desert_pyramid", 6, 2, 5, 15, [["MinecraftStandard", 4], ["ArmorAndTools", 1], ["Sandy", 8], ["ModdedStandard", 6]]],
    ["betterdeserttemples:chests/pharaoh_hidden", 8, 1, 7, 30, [["MinecraftStandard", 4], ["ArmorAndTools", 1], ["Sandy", 8], ["ModdedStandard", 6]]],
    ["betterdeserttemples:chests/tomb_pharaoh", 6, 3, 3, 20, [["MinecraftStandard", 4], ["ArmorAndTools", 1], ["Sandy", 8], ["ModdedStandard", 6]]],
    ["betterdeserttemples:chests/statue", 5, 2, 4, 10, [["MinecraftStandard", 4], ["ArmorAndTools", 1], ["Sandy", 8], ["ModdedStandard", 6]]],
    ["endrem:minecraft/chests/abandoned_mineshaft", 7, 1, 6, 30, [["MinecraftStandard", 8], ["ArmorAndTools", 1], ["ModdedStandard", 6]]],
    ["minecraft:chests/abandoned_mineshaft", 5, 2, 5, 15, [["MinecraftStandard", 8], ["ArmorAndTools", 1], ["ModdedStandard", 6]]],
    ["mvs:floating_islands", 6, 1, 3, 30, [["MinecraftStandard", 6], ["ArmorAndTools", 3], ["ModdedStandard", 6]]],
    ["totw_reworked:ocean_tower_chest", 6, 1, 7, 30, [["MinecraftStandard", 4], ["ArmorAndTools", 1], ["Sandy", 8], ["Glider", 30], ["ModdedStandard", 6]]],
    ["totw_reworked:tower_chest", 6, 1, 7, 30, [["MinecraftStandard", 4], ["ArmorAndTools", 1], ["Sandy", 8], ["Glider", 30], ["ModdedStandard", 6]]],
];

let lootPools = {
    "MinecraftStandard": [

        ["6x minecraft:cobblestone", "3x minecraft:diorite", "4x minecraft:stick", "1x minecraft:bowl", "3x minecraft:sugar", "3x minecraft:sweet_berries", "5x minecraft:iron_nugget", "2x minecraft:book", "5x minecraft:paper", "2x minecraft:clay_ball", "3x minecraft:brick", "2x minecraft:glow_lichen", "2x minecraft:feather", "4x minecraft:gravel", "3x minecraft:andesite", "6x minecraft:dirt", "1x minecraft:poisonous_potato", "3x minecraft:jungle_planks"],
        ["2x minecraft:cookie", "4x minecraft:glow_berries", "4x minecraft:gold_nugget", "1x minecraft:ink_sac", "2x minecraft:charcoal", "4x minecraft:flint", "4x minecraft:white_wool", "2x minecraft:pumpkin", "2x minecraft:melon", "6x minecraft:torch", "2x minecraft:gunpowder", "3x minecraft:chain", "2x minecraft:raw_copper", "2x minecraft:string", "3x minecraft:wheat", "2x minecraft:egg", "3x minecraft:copper_ore", "2x minecraft:carrot", "3x minecraft:potato"],
        ["1x minecraft:copper_ingot", "3x minecraft:leather", "4x minecraft:raw_iron", "2x minecraft:coal", "4x minecraft:red_mushroom", "3x minecraft:bread", "4x minecraft:honey_bottle", "3x minecraft:iron_ore", "5x minecraft:oak_log", "3x minecraft:brown_mushroom", "4x minecraft:rabbit_hide", "8x minecraft:bone_meal", "4x minecraft:bone", "1x minecraft:bucket"],
        ["3x minecraft:glistering_melon_slice", "3x minecraft:porkchop", "4x minecraft:honeycomb", "6x minecraft:mutton", "10x minecraft:dried_kelp", "1x minecraft:tnt", "1x minecraft:ender_pearl", "5x minecraft:arrow", "2x minecraft:bookshelf", "1x minecraft:rabbit_foot", "2x minecraft:slime_ball", "2x minecraft:iron_ingot", "2x minecraft:raw_gold"],
        ["8x minecraft:firework_rocket", "2x minecraft:gold_ingot", "7x minecraft:amethyst_shard", "2x minecraft:lapis_lazuli", "3x minecraft:redstone", "7x minecraft:golden_carrot", "3x minecraft:phantom_membrane", "1x minecraft:cake", "1x minecraft:slime_block", "1x minecraft:crying_obsidian", "2x minecraft:obsidian", "8x minecraft:cooked_beef"],
        ["1x minecraft:saddle", "1x minecraft:diamond", "1x minecraft:redstone_block", "3x minecraft:raw_copper_block", "5x minecraft:amethyst_block", "9x minecraft:emerald"],
        ["1x minecraft:golden_apple", "1x minecraft:totem_of_undying", "1x minecraft:raw_iron_block", "2x minecraft:copper_block", "1x minecraft:raw_gold_block", "1x minecraft:emerald_block"],
        ["4x minecraft:iron_block", "2x minecraft:gold_block", "1x minecraft:enchanted_golden_apple"],
        ["1x minecraft:diamond_block"],
        [],
    ],
    "ArmorAndTools": [
        [],
        [],
        ["1x minecraft:stone_axe", "1x minecraft:stone_hoe", "1x minecraft:leather_helmet", "1x minecraft:leather_chestplate", "1x minecraft:leather_leggings", "1x minecraft:leather_boots", "1x minecraft:leather_horse_armor", "1x minecraft:bow", "1x minecraft:flint_and_steel", "1x minecraft:stone_sword", "1x minecraft:stone_shovel", "1x minecraft:stone_pickaxe"],
        ["1x minecraft:chainmail_boots", "1x minecraft:chainmail_leggings", "1x minecraft:chainmail_chestplate", "1x minecraft:chainmail_helmet", "1x minecraft:golden_horse_armor", "1x minecraft:bundle", "1x minecraft:shield"],
        ["1x minecraft:iron_sword", "1x minecraft:iron_shovel", "1x minecraft:iron_pickaxe", "1x minecraft:iron_axe", "1x minecraft:iron_hoe", "1x minecraft:golden_leggings", "1x minecraft:golden_boots", "1x minecraft:compass", "1x minecraft:clock", "1x minecraft:golden_chestplate", "1x minecraft:golden_helmet", "1x minecraft:crossbow", "1x galosphere:sterling_horse_armor"],
        ["1x minecraft:golden_hoe", "1x minecraft:golden_axe", "1x minecraft:golden_pickaxe", "1x minecraft:golden_shovel", "1x minecraft:iron_horse_armor", "1x minecraft:iron_helmet", "1x minecraft:iron_chestplate", "1x minecraft:iron_leggings", "1x minecraft:iron_boots"],
        ["1x minecraft:diamond_horse_armor", "1x minecraft:turtle_helmet", "1x minecraft:spyglass", "1x minecraft:diamond_pickaxe", "1x minecraft:diamond_shovel", "1x minecraft:diamond_sword", "1x minecraft:shears", "2x minecraft:name_tag"],
        ["1x minecraft:saddle", "1x minecraft:diamond", "1x minecraft:redstone_block", "3x minecraft:raw_copper_block", "5x minecraft:amethyst_block", "9x minecraft:emerald"],
        ["1x minecraft:netherite_hoe", "1x minecraft:netherite_shovel"],
        ["1x minecraft:netherite_sword", "1x minecraft:netherite_pickaxe", "1x minecraft:netherite_axe", "1x minecraft:netherite_helmet", "1x minecraft:netherite_chestplate", "1x minecraft:netherite_leggings", "1x minecraft:netherite_boots"],
    ],
    "Sandy": [

        ["3x biomemakeover:barrel_cactus", "3x minecraft:cut_sandstone", "2x minecraft:chiseled_sandstone", "7x minecraft:sandstone", "6x minecraft:red_sand", "13x minecraft:sand", "2x delightful:cactus_steak", "3x delightful:cactus_flesh", "15x minecraft:gold_nugget", "minecraft:gold_ingot", "3x biomemakeover:barrel_cactus_flowered"],
        ["4x minecraft:cactus", "creeperoverhaul:tiny_cactus", "6x minecraft:dead_bush", "7x minecraft:glass", "4x minecraft:glass_pane", "5x minecraft:raw_gold", "3x regions_unexplored:sandy_grass", "3x regions_unexplored:sandy_tall_grass", "3x farmersdelight:sandy_shrub", "3x regions_unexplored:palm_beard", "3x regions_unexplored:palm_sapling"],
        ["minecraft:acacia_slab", "2x minecraft:acacia_planks", "3x minecraft:acacia_sapling", "5x minecraft:gold_ingot", "minecraft:orange_terracotta", "minecraft:yellow_terracotta", "minecraft:brown_terracotta", "2x minecraft:red_terracotta", "3x minecraft:terracotta", "ecologics:sandcastle", "alexsmobs:rattlesnake_rattle", "3x minecraft:string", "minecraft:brown_glazed_terracotta", "minecraft:magenta_glazed_terracotta", "minecraft:yellow_glazed_terracotta", "minecraft:acacia_fence"],
        ["1x ecologics:sandcastle", "1x alexsmobs:rattlesnake_rattle"],
        [],
        ["1x cnb:cactem_spear"],
        [],
        ["1x travelersbackpack:cactus", "1x minecraft:sandstone"],
        ["1x minecraft:gold_block", "1x cnb:heal_spell_book_1"],
    ],
    "ModdedStandard": [
        [
            "1x hexerei:yellow_dock_flowers",
            "1x hexerei:yellow_dock_leaves",
            "1x hexerei:mugwort_flowers",
            "1x hexerei:mandrake_flowers",
            "2x hexerei:sage_seed",
            "2x farmersdelight:rotten_tomato",
            "1x alexsmobs:banana_peel",
            "2x alexsmobs:maggot",
            "3x cnb:apple_slice",
            "5x ecologics:surface_moss",
            "2x naturalist:snail_shell",
            "3x the_bumblezone:honey_crystal_shards",
            "6x minecraft:ladder"
        ],
        [
            "3x delightful:matcha",
            "3x delightful:cactus_flesh",
            "2x delightful:salmonberry_pips",
            "2x delightful:acorn",
            "1x alexsmobs:banana",
            "5x alexsmobs:acacia_blossom",
            "2x alexsmobs:gongylidia",
            "2x alexsmobs:roadrunner_feather",
            "2x alexsmobs:raw_catfish_slice",
            "1x farmersdelight:fried_egg",
            "2x farmersdelight:pumpkin_slice",
            "3x farmersdelight:cabbage_seeds",
            "5x farmersdelight:tomato_seeds",
            "6x farmersdelight:rice",
            "3x farmersdelight:tomato",
            "5x farmersdelight:onion",
            "4x farmersdelight:cabbage",
            "2x farmersdelight:milk_bottle",
            "3x hexerei:tallow_impurity",
            "1x hexerei:belladonna_flowers",
            "6x iter_rpg:coin",
            "4x farmersrespite:rose_hips"
        ],
        [
            "2x thermal:raw_tin",
            "2x thermal:raw_nickel",
            "2x thermal:raw_lead",
            "2x thermal:raw_silver",
            "4x thermal:rich_slag",
            "1x farmersrespite:organic_compost",
            "1x farmersrespite:rich_soil",
            "2x alexsdelight:cooked_centipede_leg",
            "2x alexsdelight:loose_moose_rib",
            "3x rottencreatures:frozen_rotten_flesh",
            "4x rottencreatures:magma_rotten_flesh",
            "4x naturalist:duck_egg",
            "1x alexsmobs:boiled_emu_egg",
            "4x the_bumblezone:sugar_water_bottle",
            "2x farmersrespite:green_tea"
        ],
        [
            "2x thermal:raw_tin",
            "2x thermal:raw_nickel",
            "2x thermal:raw_lead",
            "2x thermal:raw_silver",
            "4x thermal:rich_slag",
            "1x farmersrespite:green_tea_cookie",
            "4x farmersrespite:green_tea_cookie",
            "9x farmersrespite:coffee_beans",
            "9x farmersrespite:green_tea_leaves",
            "2x create:raw_zinc",
            "2x create:crushed_raw_gold",
            "1x hexerei:sage_bundle",
            "1x naturalist:teddy_bear",
            "4x galosphere:glow_flare",
            "1x spelunking_bags:glowing_spore"
        ],
        [
            "2x thermal:nickel_ingot",
            "2x thermal:tin_ingot",
            "2x thermal:lead_ingot",
            "3x thermal:silver_ingot",
            "2x galosphere:silver_bomb",
            "1x galosphere:spectre_flare",
            "1x botania:black_lotus",
            "2x spelunking_bags:miners_plants_bag",
            "5x supplementaries:bomb",
            "2x create:zinc_ingot",
            "1x minecolonies:scroll_buff",
            "1x alexsmobs:shrimp_fried_rice",
            "2x farmersdelight:coffee",
            "1x hexerei:lava_bottle"
        ],
        [
            "1x galosphere:llumiere_shard",
            "8x galosphere:allurite_shard",
            "1x spelunking_bags:miners_treasures_bag",
            "1x spelunking_bags:miners_tools_bag"
        ],
        [
            "1x rottencreatures:treasure_chest",
            "1x supplementaries:bomb_blue"
        ],
        [
            "1x botania:blacker_lotus"
        ]
    ],
    "Fish": [
        [],

        ["minecraft:cod", "minecraft:salmon"],
        ["minecraft:tropical_fish", "minecraft:pufferfish"],
        ["minecraft:cooked_cod", "minecraft:cooked_salmon"],
    ],
    "Block": [
        [],
        ["minecraft:stone", "minecraft:dirt"],
        ["minecraft:granite", "minecraft:diorite", "minecraft:andesite"],
    ],
    "Glider": [
        [],
        ['vc_gliders:paraglider_iron'],
        [],
        ['vc_gliders:paraglider_iron'],
        [],
        ['vc_gliders:paraglider_gold'],
        [],
        ['vc_gliders:paraglider_diamond'],
        [],
        ['vc_gliders:nether_upgrade'],
    ],
    "Tools": [
        [],
        ["minecraft:stone_pickaxe", "minecraft:dirt"],
        ["minecraft:iron_pickaxe", "minecraft:diorite", "minecraft:andesite"],
    ]
};


function mergeLootPools(subscriptions) {
    // Initialize an empty array for the new loot pool
    let newLootPool = [];

    // Iterate over the subscriptions
    for (let subscription of subscriptions) {
        // Extract the loot pool name and multiplier
        let [lootPoolName, multiplier] = subscription;

        // Check if the loot pool exists in the lootPools object
        if (!lootPools.hasOwnProperty(lootPoolName)) {
            // If not, print an error message and continue to the next subscription
            console.error(`Loot pool "${lootPoolName}" does not exist.`);
            continue;
        }

        // Get the loot pool array
        let lootPoolArray = lootPools[lootPoolName];

        // Iterate over the loot pool array
        for (let level = 0; level < lootPoolArray.length; level++) {
            let items = lootPoolArray[level];

            // If the level does not exist in the new loot pool, create it
            if (!newLootPool[level]) {
                newLootPool[level] = [];
            }

            // Add the items to the corresponding level in the new loot pool
            // Check if items is defined before trying to push it
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    newLootPool[level].push(items[i]);
                }
            }
        }
    }

    // Return the new loot pool
    return newLootPool;
}


function simulateMarkovChain(size, startLevel, iterations) {
    let probabilities = Array(size).fill(0);
    probabilities[startLevel - 1] = 1;

    let promotionChance = 0.02;
    let demotionChance = 0.20;

    for (let i = 0; i < iterations; i++) {
        let newProbabilities = Array(size).fill(0);

        for (let j = 0; j < size; j++) {
            if (j > 0) {
                newProbabilities[j - 1] += probabilities[j] * demotionChance;
            }
            if (j < size - 1) {
                newProbabilities[j + 1] += probabilities[j] * promotionChance;
            }
            newProbabilities[j] += probabilities[j] * (1 - demotionChance - promotionChance);
        }

        probabilities = newProbabilities;
    }

    return probabilities;
}
function probability(newLootPool, subscriptions, chestLevel) {
    let size = newLootPool.length;
    let probabilities = simulateMarkovChain(size, chestLevel, chestLevel)
    let totalPoints = subscriptions.reduce((total, sub) => total + sub[1], 0);
    let newPool = [];

    for (let i = 0; i < size; i++) {
        let levelItems = newLootPool[i];
        let newLevelItems = [];

        for (let item of levelItems) {
            let totalItemChance = 0;

            for (let sub of subscriptions) {
                let lootPoolItems = lootPools[sub[0]].reduce((acc, val) => acc.concat(val), []);
                if (lootPoolItems.includes(item)) {
                    let itemChance = probabilities[i] * (1 / levelItems.length) * (sub[1] / totalPoints);
                    totalItemChance += itemChance;
                }
            }

            totalItemChance = Math.floor(totalItemChance * 10000000);

            if (totalItemChance > 0) {
                newLevelItems.push({
                    item: item,
                    chance: totalItemChance
                });
            }
        }

        newPool.push(newLevelItems);
    }

    return newPool;
}








function arrayDissolver(array) {
    // Flatten the array and filter out empty arrays
    let dissolvedArray = array.reduce((acc, val) => acc.concat(val), []).filter(item => item.length !== 0);

    return dissolvedArray;
}


function multiplicities(dissolvedArray, lootMultiplier) {
    let newDissolvedArray = [];

    for (let item of dissolvedArray) {
        let number = item.item.match(/\d+x/);
        if (!number) {
            item.item = `1x ${item.item}`;
            number = 1;
        } else {
            number = parseInt(number[0].slice(0, -1)); // remove the 'x' and convert to number
        }

        if (!multiplicityBan(item)) {
            newDissolvedArray.push(`"(${number}x ${item.item.split(' ').slice(1).join(' ')}).withChance(${item.chance})"`);
        } else {
            number *= lootMultiplier;
            let range = [Math.max(Math.floor(number / 2), 1), Math.floor(number)];
            let chance = Math.floor(item.chance / range[1]);
            if (chance === 0) {
                continue;
            }
            if (chance > range[1]) {
                for (let i = range[0]; i <= range[1]; i++) {
                    newDissolvedArray.push(`"(${i}x ${item.item.split(' ').slice(1).join(' ')}).withChance(${Math.floor(chance / range[1])})"`);
                }
            }
        }
    }

    return newDissolvedArray;
}



function multiplicityBan(item) {
    let multiplictyBan = {
        "item ban": [
            "minecraft:cactus"
        ],
        "pool ban": ["ArmorAndTools", "Glider"]
    };

    if (multiplictyBan["item ban"].includes(item.item)) {
        return false;
    }

    for (let pool of multiplictyBan["pool ban"]) {
        if (lootPools[pool]) {
            let flatPool = lootPools[pool].reduce(function (acc, val) {
                return acc.concat(val);
            }, []);
            if (flatPool.includes(item.item)) {
                return false;
            }
        }
    }

    return true;
}
function transformItemArray(itemArray) {
    return itemArray.map(item => {
        // Check if item is a string
        if (typeof item !== 'string') {
            //console.error(`Error: ${item} is not a string`);
            return null;
        }

        // Extract multiplicity, item, chance, and extra info
        let multiplicityMatch = item.match(/(\d+)x/);
        let multiplicity = multiplicityMatch ? multiplicityMatch[1] : '1';

        let itemMatch = item.match(/[a-z0-9_]+:[a-z_]+/);
        let itemName = itemMatch ? itemMatch[0] : '';

        let chanceMatch = item.match(/withChance\((\d+)\)/);
        let chance = chanceMatch ? chanceMatch[1] : '';

        let extraInfoMatch = item.match(/Item\.of\('.+?',\s*"(.+?)"\)/);
        let extraInfo = extraInfoMatch ? extraInfoMatch[1] : '';

        // Construct the new item string
        let newItem = `Item.of("${multiplicity}x ${itemName}"`;
        if (extraInfo) {
            newItem += `, "${extraInfo}"`;
        }
        newItem += `).withChance(${chance})`;

        return newItem;
    }).filter(item => item !== null); // Remove null values
}








function applyLootMatrix(lootMatrix, lootPools) {
    for (let matrix of lootMatrix) {
        let [chest, chestLevel, multiplier, roles, enchant, subscriptions] = matrix;

        let newLootPool = mergeLootPools(subscriptions);
        console.log(`newLootPool: ${JSON.stringify(newLootPool, null, 2)}`);

        let probabilities = probability(newLootPool, subscriptions, chestLevel);
        console.log(`probabilities: ${JSON.stringify(probabilities, null, 2)}`);

        let dissolvedArray = arrayDissolver(probabilities);
        console.log(`dissolvedArray: ${JSON.stringify(dissolvedArray, null, 2)}`);

        let modifiedArray = multiplicities(dissolvedArray, multiplier);
        console.log(`modifiedArray: ${JSON.stringify(modifiedArray, null, 2)}`);

        let itemsString = transformItemArray(modifiedArray);
        console.log(`itemsString: ${itemsString}`);

        let items = eval('[' + itemsString + ']');
        console.log(`items: ${JSON.stringify(items, null, 2)}`);

        let rolesUpperBound = roles + (roles / 2);
        let rolesLowerBound = roles - (roles / 2);
        let enchantUpperBound = enchant + (enchant / 2);
        let enchantLowerBound = enchant - (enchant / 2);

        console.log(`rolesUpperBound: ${rolesUpperBound}, rolesLowerBound: ${rolesLowerBound}, enchantUpperBound: ${enchantUpperBound}, enchantLowerBound: ${enchantLowerBound}`);

        LootJS.modifiers((event) => {
            event.addLootTableModifier(chest).removeLoot(Ingredient.all);
            event
                .addLootTableModifier(chest)
                .addWeightedLoot([rolesLowerBound, rolesUpperBound], items)
                .enchantWithLevels([enchantLowerBound, enchantUpperBound]);
        });
    }
}


applyLootMatrix(lootMatrix, lootPools);

Utils.server.lootTables.ids
    .filter(id => id.toString().includes('chests/') || id.toString().includes('mvs:') || id.toString().includes('totw_reworked:'))
    .forEach(table => {
        console.log(table);
        LootJS.modifiers(event => {
            event.addLootTableModifier(table).addLoot(Item.of('minecraft:light_gray_stained_glass_pane', `{RepairCost:0,display:{Name:'{\"text\":\"${table}\"}'}}`));
        });
    });

/*Utils.server.lootTables.ids
    
    .forEach(table => {
        console.log(table);
        LootJS.modifiers(event => {
            event.addLootTableModifier(table).addLaoot(Item.of('minecraft:dirt', `{RepairCost:0,display:{Name:'{\"text\":\"${table}\"}'}}`));
        });
    });
*/
const ItemsToRemove = [
    'minecolonies:supplycampdeployer',
    'minecolonies:supplychestdeployer',
    '#ars_nouveau:wilden_drop',
    'minecolonies:supplychestdeployer',
    'ars_nouveau:ritual_awakening',
    'ars_nouveau:ritual_binding',
    'ars_nouveau:ritual_burrowing',
    'ars_nouveau:ritual_challenge',
    'ars_nouveau:ritual_cloudshaping',
    'ars_nouveau:ritual_conjure_island_desert',
    'ars_nouveau:ritual_conjure_island_plains',
    'ars_nouveau:ritual_containment',
    'ars_nouveau:ritual_disintegration',
    'ars_nouveau:ritual_fertility',
    'ars_nouveau:ritual_flight',
    'ars_nouveau:ritual_flowering',
    'ars_nouveau:ritual_forestation',
    'ars_nouveau:ritual_harvest',
    'ars_nouveau:ritual_moonfall',
    'ars_nouveau:ritual_overgrowth',
    'ars_nouveau:ritual_restoration',
    'ars_nouveau:ritual_sanctuary',
    'ars_nouveau:ritual_scrying',
    'ars_nouveau:ritual_sunrise',
    'ars_nouveau:ritual_warping',
    'ars_nouveau:ritual_wilden_summon',
    'endrem:guardian_eye',
    'endrem:magical_eye',
    'endrem:wither_eye',
    'endrem:witch_eye',
    'endrem:undead_eye',
    'endrem:exotic_eye',
    'endrem:evil_eye',
    'endrem:black_eye',
    'endrem:cold_eye',
    'endrem:corrupted_eye',
    'endrem:lost_eye',
    'endrem:nether_eye',
    'endrem:old_eye',
    'endrem:rogue_eye',
    'endrem:cursed_eye',
    'ars_nouveau:source_gem'
];

LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.CHEST).removeLoot(ItemsToRemove);

});