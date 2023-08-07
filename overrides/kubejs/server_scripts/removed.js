ServerEvents.recipes(event => {
    // Removing events for specific items
    event.remove({ output: 'enderstorage:ender_chest' });
    event.remove({ output: 'enderstorage:ender_pouch' });
    event.remove({ output: 'enderstorage:ender_tank' });
/*    event.remove({ output: 'create_enchantment_industry:disenchanter' });*/
    event.remove({ output: 'create_enchantment_industry:printer' });
    event.remove({ output: 'create_enchantment_industry:enchanting_guide' });
    event.remove({ output: 'create_enchantment_industry:experience_rotor' });
    event.remove({ output: 'iter_rpg:tormentor' });
 // Removing events for specific items
    event.remove({ id: 'heb:oak_slab_uncraft' });
    event.remove({ id: 'heb:spruce_slab_uncraft' });
    event.remove({ id: 'heb:birch_slab_uncraft' });
    event.remove({ id: 'heb:jungle_slab_uncraft' });
    event.remove({ id: 'heb:acacia_slab_uncraft' });
    event.remove({ id: 'heb:dark_oak_slab_uncraft' });
    event.remove({ id: 'heb:doritetobirch' });
    event.remove({ output: 'ars_nouveau:stable_warp_scroll' });
    event.remove({ output: 'supplementaries:cog_block' });
    event.remove({ output: 'ars_nouveau:thread_undying' });
    event.remove({ output: 'ars_nouveau:ritual_flight' });
    event.remove({ output: 'ars_nouveau:ritual_containment' });
    event.remove({ output: 'ars_nouveau:mob_jar' });
    event.remove({ output: 'pneumaticcraft:minigun'});
});