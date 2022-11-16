console.log('Bai toan ve TRAU');
const buffalo = () => {
    for(let dung = 1; dung <= 20; dung++) {
        for(let nam = 1; nam <= 33; nam++){
            for(let gia = 1; gia <= 300; gia++) {
                if((15*dung +9*nam +gia == 300) && (dung + nam + gia == 100)){
                    console.log(`Trau dung = ${dung}, nam = ${nam}, gia = ${gia}`)
                }
            }
        }
    }
}
buffalo()