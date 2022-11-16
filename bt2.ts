console.log('Tinh tien dien');
var tienDien = (hoDan: string, oldNumber: number, newNumber: number) => {
    let kWhdm, kWhvuot, tienDM, tienVuot, totalTien : number
    const dmHoDan = 60
    const dmHoCanBo = 90
    const dmHoKinhDoanh = 200
    const dmHoSanXuat = 450
    const dongiaDM = 1000
    const giangoaiDM = 2000
    const kWhTT = newNumber - oldNumber
    switch(hoDan) {
        case 'dan' :
            kWhdm = dmHoDan
            break;
        case 'canbo': 
            kWhdm = dmHoCanBo
            break;
        case 'kinhdoanh' :
            kWhdm = dmHoKinhDoanh
            break;
        case 'sanxuat': 
            kWhdm = dmHoSanXuat
            break;
        }
        if(kWhTT < kWhdm) {
            tienDM = kWhTT*dongiaDM
            tienVuot = 0
            console.log(`Tien Dinh Muc = ${tienDM} va tien vuot = ${tienVuot}`)
    }else {
        tienDM = kWhTT*giangoaiDM
        tienVuot = (kWhTT - kWhdm) *giangoaiDM
        totalTien = tienDM + tienVuot
        console.log(`So tien phai tra ${totalTien}VND`)

    }
}
tienDien("kinhdoanh",150,450)
