/**
 * Helper function for fading in a section.
 *
 * scene => the scene to fade the section in
 * section => the section to fade in
 * movingOffset => the offset to move the section by (a value, not a position)
 * direction => fade direction
 * idleTicks => number of ticks to idle
 */
function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
}

// for 1.18 pls use: onEvent("ponder.registry")
Ponder.registry((event) => {
    event.create("minecraft:hopper").scene("section_fading", "Let's fade", (scene, util) => {

        /**
         * Blocks used for fading so they aren't shown directly.
         *
         * If a custom structure is used, the blocks can be directly added to the structure file.
         */
        scene.world.setBlocks([4, 1, 2], "minecraft:dispenser");
        scene.world.setBlocks([3, 1, 2], "minecraft:chest");
        scene.world.setBlocks([2, 1, 2], "minecraft:dropper");

        scene.world.setBlocks([2, 2, 2], "minecraft:hopper");

        /**
         * Only shows the base plate and the hopper that is manually placed right now.
         */
        scene.showBasePlate();
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.idle(20);

        fadeInSection(scene, [4, 1, 2], [-2, 0, 0], Direction.EAST, 15);
        fadeInSection(scene, [3, 1, 2], [-1, 0, 0], Direction.EAST, 15);
        fadeInSection(scene, [2, 1, 2], [0, 0, 0], Direction.EAST, 15);
    });
});