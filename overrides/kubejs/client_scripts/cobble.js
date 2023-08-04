Ponder.registry((event) => {
    event
        .create('minecraft:cobblestone')
        .scene("animate_section", "Tileable Cobblestone Generator", "riftrealms:cobble", (scene, util) => {
            /**
             * Layer 0
             */
            for (let x = 0; x < 6; x++) {
                for (let z = 0; z < 1; z++) {
                    scene.world.showSection([x, 0, z], Facing.DOWN);
                }
                /**
                 * Idle can be used to create animations.
                 */
                scene.idle(2);
            }

            /**
             * Layer 1
             */
            for (let z = 0; z < 1; z++) {
                for (let x = 0; x < 6; x++) {
                    scene.world.showSection([x, 1, z], Facing.DOWN);
                }
                scene.idle(2);
            }

            /**
             * Layer 2
             */
            for (let x = 0; x < 6; x++) {
                for (let z = 0; z < 1; z++) {
                    scene.world.showSection([x, 2, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

            /**
             * Layer 3
             */
            for (let z = 0; z < 1; z++) {
                for (let x = 0; x < 6; x++) {
                    scene.world.showSection([x, 3, z], Facing.DOWN);
                }
                scene.idle(2);
            }

            /**
             * Layer 4
             */
            for (let x = 0; x < 6; x++) {
                for (let z = 0; z < 1; z++) {
                    scene.world.showSection([x, 4, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

        });
});