Ponder.registry((event) => {
    event
        .create('kubejs:ars_portal_icon')
        .scene("animate_section", "Archwood Portal", "riftrealms:portal", (scene, util) => {
            /**
             * Layer 0
             */
            for (let x = 0; x < 4; x++) {
                for (let z = 0; z < 1; z++) {
                    scene.world.showSection([x, 0, z], Facing.DOWN);
                }
                /**
                 * Idle can be used to create animations.
                 */
                scene.idle(3);
            }

            /**
             * Layer 1
             */
            for (let z = 0; z < 1; z++) {
                for (let x = 0; x < 4; x++) {
                    scene.world.showSection([x, 1, z], Facing.DOWN);
                }
                scene.idle(3);
            }

            /**
             * Layer 2
             */
            for (let x = 0; x < 4; x++) {
                for (let z = 0; z < 1; z++) {
                    scene.world.showSection([x, 2, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

            /**
             * Layer 3
             */
            for (let z = 0; z < 1; z++) {
                for (let x = 0; x < 4; x++) {
                    scene.world.showSection([x, 3, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

            /**
             * Layer 4
             */
            for (let x = 0; x < 4; x++) {
                for (let z = 0; z < 1; z++) {
                    scene.world.showSection([x, 4, z], Facing.DOWN);
                    scene.idle(2);
                }
            }
            scene.idle(60);
            scene.showControls(60, [2.5, 1.5, 0.5], "down").rightClick().withItem("riftrealmscore:ars_nouveau_dimension")
            scene.idle(30);
            scene.world.setBlocks([1, 1, 0, 2, 3, 0], "riftrealmscore:ars_nouveau_dimension_portal", true);

        });
});