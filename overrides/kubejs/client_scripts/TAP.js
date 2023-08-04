Ponder.registry((event) => {
    event
        .create('botania:terra_plate')
        .scene("animate_section", "Terresterial Agglomeration Plate", "riftrealms:tap", (scene, util) => {
            /**
             * Layer 0
             */
            for (let x = 0; x < 3; x++) {
                for (let z = 0; z < 3; z++) {
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
            for (let z = 0; z < 3; z++) {
                for (let x = 0; x < 3; x++) {
                    scene.world.showSection([x, 1, z], Facing.DOWN);
                }
                scene.idle(3);
            }

            /**
             * Layer 2
             */
            for (let x = 0; x < 3; x++) {
                for (let z = 0; z < 3; z++) {
                    scene.world.showSection([x, 2, z], Facing.DOWN);
                    scene.idle(2);
                }
            }
            scene.idle(10);
            scene.showControls(60, [1.5, 1.5, 1], "up").rightClick().withItem("botania:spark")
            scene.idle(10);
            const entity = scene.world.createEntity("alexsmobs:blobfish", [1.5, 2, 1.5]);

        });
});