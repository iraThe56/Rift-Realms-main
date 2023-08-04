EntityEvents.hurt(event => {
    let { entity, source } = event
    if (entity.animal && entity.vehicle !== null && entity.vehicle.type === "create:carriage_contraption") {
        event.cancel()
    }
})