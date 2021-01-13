function uuidv4() {
    let a = Math.random().toString(36).substring(7);
    let r = Math.random().toString(36).substring(7);
    let c = Math.random().toString(36).substring(7);
    let y = Math.random().toString(36).substring(7);
    let g = Math.random().toString(36).substring(7);
    let result = a + r + '-' + c + y + g;
    return result;
}