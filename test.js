console.log('PT bac 1');
var ptBac1 = function (a, b, c, d, e, f) {
    var dinhthuc = a * e - d * b;
    var dx = c * e - f * b;
    var dy = a * f - d * c;
    if (dinhthuc != 0) {
        var x1 = dx / dinhthuc;
        var x2 = dy / dinhthuc;
        console.log('Nghiem x1 = ', x1);
        console.log('Nghiem x1 = ', x2);
    }
    else if (dx != 0) {
        console.log('Phuong trinh vo nghiem');
    }
    else {
        console.log('Phuong trinh vo dinh');
    }
};
ptBac1(3, 10, 1, 5, 6, -2);
console.log('Tinh tien dien');
var tienDien = function (hoDan, oldNumber, newNumber) {
    var kWhdm, kWhvuot, tienDM, tienVuot, totalTien;
    var dmHoDan = 60;
    var dmHoCanBo = 90;
    var dmHoKinhDoanh = 200;
    var dmHoSanXuat = 450;
    var dongiaDM = 1000;
    var giangoaiDM = 2000;
    var kWhTT = newNumber - oldNumber;
    switch (hoDan) {
        case 'dan':
            kWhdm = dmHoDan;
            break;
        case 'canbo':
            kWhdm = dmHoCanBo;
            break;
        case 'kinhdoanh':
            kWhdm = dmHoKinhDoanh;
            break;
        case 'sanxuat':
            kWhdm = dmHoSanXuat;
            break;
    }
    if (kWhTT < kWhdm) {
        tienDM = kWhTT * dongiaDM;
        tienVuot = 0;
        console.log("Tien Dinh Muc = ".concat(tienDM, " va tien vuot = ").concat(tienVuot));
    }
    else {
        tienDM = kWhTT * giangoaiDM;
        tienVuot = (kWhTT - kWhdm) * giangoaiDM;
        totalTien = tienDM + tienVuot;
        console.log("So tien phai tra ".concat(totalTien, "VND"));
    }
};
tienDien("kinhdoanh", 150, 450);
console.log('Phuong trinh trung phuong');
var ptTrungPhuong = function (a, b, c) {
    var denTa = b * b - 4 * a * c;
    var i = 0;
    if (denTa > 0) {
        i = 1;
    }
    else if (denTa < 0) {
        i = 2;
    }
    else {
        i = 3;
    }
    switch (i) {
        case 1:
            {
                var y1 = (-b + Math.sqrt(denTa)) / (2 * a);
                var y2 = (-b - Math.sqrt(denTa)) / (2 * a);
                if (y1 > 0) {
                    var x1 = Math.sqrt(y1);
                    var x2 = -x1;
                    console.log('Nghiem x1 = ', x1);
                    console.log('Nghiem x2 = ', x2);
                }
                if (y2 > 0) {
                    var x3 = Math.sqrt(y2);
                    var x4 = -x3;
                    console.log('Nghiem x3 = ', x3);
                    console.log('Nghiem x4 = ', x4);
                }
            }
            break;
        case 2:
            console.log('Phuong trinh trung phuong vo nghiem');
            break;
        case 3:
            {
                var y1 = -b / (2 * a);
                console.log('Phuong trinh trung phuong co nghiem kep');
                if (y1 > 0) {
                    var x1 = Math.sqrt(y1);
                    var x2 = -x1;
                    console.log('Phuong trinh trung phuong co nghiem x1 = ', x1);
                    console.log('Phuong trinh trung phuong co nghiem x2 = ', x2);
                }
            }
            break;
    }
};
ptTrungPhuong(1, -5, 4);
