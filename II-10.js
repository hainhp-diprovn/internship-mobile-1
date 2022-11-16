// tính tiền điện theo hộ dân
"use strict"
const [GDM, GNDM, DMHD, DMCB, DMKD, DMSX] = [1000, 2000, 60, 90, 200, 450]
let soDienCu = 50
let soDienMoi = 190
let kwhTieuThu = soDienMoi - soDienCu
function tinhTien(hoDan, luongDienTieuThu) {
    let tongTien
    if (luongDienTieuThu < hoDan) {
        tongTien = luongDienTieuThu * GDM
    } else {
        tongTien = GDM * hoDan + GNDM * (luongDienTieuThu - hoDan)
    }
    return tongTien
}
console.log(tinhTien(DMCB, kwhTieuThu))