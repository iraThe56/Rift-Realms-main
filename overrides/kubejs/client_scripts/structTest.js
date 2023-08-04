// for 1.18 pls use: onEvent("ponder.registry")
Ponder.registry((event) => {
    event
        .create("minecraft:sand")
        .scene("block_entity_nbt", "Set NBT for blocks", "riftrealms:fusion_reactor", (scene, util) => {
            scene.showStructure();
            scene.scaleSceneView(0.9);
            scene.setSceneOffsetY(-1);
            scene.idle(20);

            /**
             * "nbt" contains the NBT data of the block entity. In our example we are
             * using a banner which has "Patterns" as an array of NBT data.
             * 
             * For other block entities, the NBT data will be differently and you have
             * lookup yourself the NBT data of the block. Either through the minecraft
             * wiki or by using "/kubejs hand" when holding the block entity as item, as
             * some block entities will store their data inside the item after break. 
             */

            
        });
});