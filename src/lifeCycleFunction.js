//Misal kita memiliki data API seperti berikut ini:
import React, {useEffect, useState} from "react";

const dataApi = [
    {
        namaBarang: "gitar",
        hargaBarang: 2500000

    },
    {
        namaBarang: "bass",
        hargaBarang: 2000000

    },
    {
        namaBarang: "keyboard",
        hargaBarang: 5000000

    },
    {
        namaBarang: "drum",
        hargaBarang: 25000000

    },
    {
        namaBarang: "sexophone",
        hargaBarang: 30000000

    },
]

function LifeCycleFunction(){
    //Initialisai State di Function Component
    const [jumlahItemGitar, setJumlahItemGitar] = useState(0);
    const [jumlahItemBass, setJumlahItemBass] = useState(0);
    const [jumlahItemPiano, setJumlahItemPiano] = useState(0);
    const [jumlahItemDrum, setJumlahItemDrum] = useState(0);
    const [jumlahItemSexophone, setJumlahItemSexophone] = useState(0);
    const [totalHarga, setTotalHarga] = useState(0);
    const [dataAlat, setDataAlat] = useState([]);
    const [isiKeranjang, setIsiKeranjang] = useState([]);

    function tambahKeKeranjang(alatMusikYangDipilih) {
        const isiKeranjangSekarang = [...isiKeranjang];
        isiKeranjangSekarang.push(alatMusikYangDipilih);
        isiKeranjangSekarang.sort(function (a, b) {
            let x = a.namaBarang.toLowerCase();
            let y = b.namaBarang.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0
        })
        //this.setState({isiKeranjang: isiKeranjangSekarang});
        setIsiKeranjang(isiKeranjangSekarang);
        console.log(isiKeranjang);
    }

    function hapusDariDaftarKeranjang(alatMusikYangDipilih) {
        const isiKeranjangSekarang = [...isiKeranjang];
        isiKeranjangSekarang.splice(isiKeranjangSekarang.indexOf(alatMusikYangDipilih), 1);
        //this.setState({isiKeranjang: isiKeranjangSekarang});
        setIsiKeranjang(isiKeranjangSekarang);
        console.log(isiKeranjangSekarang);
    }

    useEffect(()=>{
        setDataAlat(dataApi)
    }, [])

    useEffect(()=>{
        let hargaTotal = 0;

        for (let daftarIsiKeranjang of isiKeranjang) {
            hargaTotal = hargaTotal + daftarIsiKeranjang.hargaBarang
        }
        setTotalHarga(hargaTotal);

    }, [isiKeranjang])

    return(
        <>
            <p>Total Harga: {totalHarga}</p>
            <h4>Daftar Produk</h4>
            <ul>
                {dataAlat.map((namaAlatMusik)=>
                <li>
                    {namaAlatMusik.namaBarang} | <span> </span>
                    {namaAlatMusik.hargaBarang} | <span> </span>
                    <button onClick={()=>tambahKeKeranjang(namaAlatMusik)}>
                        + Keranjang
                    </button>
                </li>
                )}
            </ul>
            <h4>Daftar Keranjang</h4>
            <ul>
                {isiKeranjang.map((daftarIsiKeranjang)=>
                    <li>
                        {daftarIsiKeranjang.namaBarang} | <span> </span>
                        {daftarIsiKeranjang.hargaBarang} | <span> </span>
                        <button onClick={()=>hapusDariDaftarKeranjang(daftarIsiKeranjang)}>
                            Hapus Item
                        </button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default LifeCycleFunction