function findCenter( centerObj ){

    let x = centerObj.pos.x - ( width/2);
    let y = centerObj.pos.y - ( height/2);

    return { x: x, y: y };
}
