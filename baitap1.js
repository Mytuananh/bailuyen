function giatri() {
    let a;
    let b;
    let c;
    a = prompt('Điểm vật lý:');
    b = prompt('Điểm hóa học');
    c = prompt('Điểm sinh học');
    aa = parseFloat(a);
    bb = parseFloat(b);
    cc = parseFloat(c);
    let d = (aa + bb + cc);
    let e = d / 3;
    document.write('điểm trung bình cộng là:' + e)
}