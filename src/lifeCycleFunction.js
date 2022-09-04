import React, {useEffect, useState} from "react";

//Misal kita memiliki data API seperti berikut ini:
const dataApi = [
    {
        namaBarang: "gitar",
        hargaBarang: 2500000,
        stokBarang: 50

    },
    {
        namaBarang: "bass",
        hargaBarang: 2000000,
        stokBarang: 50

    },
    {
        namaBarang: "keyboard",
        hargaBarang: 5000000,
        stokBarang: 50

    },
    {
        namaBarang: "drum",
        hargaBarang: 25000000,
        stokBarang: 50

    },
    {
        namaBarang: "sexophone",
        hargaBarang: 30000000,
        stokBarang: 50

    },
]

function LifeCycleFunction() {
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
        //console.log(isiKeranjang);
    }

    function hapusDariDaftarKeranjang(alatMusikYangDipilih) {
        const isiKeranjangSekarang = [...isiKeranjang];
        isiKeranjangSekarang.splice(isiKeranjangSekarang.indexOf(alatMusikYangDipilih), 1);
        //this.setState({isiKeranjang: isiKeranjangSekarang});
        setIsiKeranjang(isiKeranjangSekarang);
        //console.log(isiKeranjangSekarang);
    }

    useEffect(() => {
        setDataAlat(dataApi)
    }, [])

    useEffect(() => {
        let hargaTotal = 0;

        for (let daftarIsiKeranjang of isiKeranjang) {
            hargaTotal = hargaTotal + daftarIsiKeranjang.hargaBarang
        }
        setTotalHarga(hargaTotal);

    }, [isiKeranjang])

    useEffect(() => {
        let itemGitar = 0;
        let itemBass = 0;
        let itemPiano = 0;
        let itemDrum = 0;
        let itemSexophone = 0;

        for (let daftarIsiKeranjang of isiKeranjang) {
            if (daftarIsiKeranjang.namaBarang === "gitar") {
                itemGitar = itemGitar + 1
            }
            if (daftarIsiKeranjang.namaBarang === "bass") {
                itemBass = itemBass + 1
            }
            if (daftarIsiKeranjang.namaBarang === "keyboard") {
                itemPiano = itemPiano + 1
            }
            if (daftarIsiKeranjang.namaBarang === "drum") {
                itemDrum = itemDrum + 1
            }
            if (daftarIsiKeranjang.namaBarang === "sexophone") {
                itemSexophone = itemSexophone + 1
            }
        }

        setJumlahItemGitar(itemGitar);
        setJumlahItemBass(itemBass);
        setJumlahItemDrum(itemDrum);
        setJumlahItemPiano(itemPiano);
        setJumlahItemSexophone(itemSexophone);

    }, [isiKeranjang])

    return (
        <>
            <p>Total Harga: Rp{totalHarga}</p>
            <h4>Daftar Produk</h4>
            <ul>
                {dataAlat.map((namaAlatMusik) => {
                        if (namaAlatMusik.namaBarang === "gitar") {
                            return (
                                <li>
                                    {namaAlatMusik.namaBarang} | <span> </span>
                                    {namaAlatMusik.hargaBarang} | <span> </span>
                                    Stok tersedia: {namaAlatMusik.stokBarang - jumlahItemGitar} | <span> </span>
                                    <button onClick={() => tambahKeKeranjang(namaAlatMusik)}>
                                        + Keranjang
                                    </button>
                                </li>
                            )
                        }

                        if (namaAlatMusik.namaBarang === "bass") {
                            return (
                                <li>
                                    {namaAlatMusik.namaBarang} | <span> </span>
                                    {namaAlatMusik.hargaBarang} | <span> </span>
                                    Stok tersedia: {namaAlatMusik.stokBarang - jumlahItemBass} | <span> </span>
                                    <button onClick={() => tambahKeKeranjang(namaAlatMusik)}>
                                        + Keranjang
                                    </button>
                                </li>
                            )
                        }

                        if (namaAlatMusik.namaBarang === "drum") {
                            return (
                                <li>
                                    {namaAlatMusik.namaBarang} | <span> </span>
                                    {namaAlatMusik.hargaBarang} | <span> </span>
                                    Stok tersedia: {namaAlatMusik.stokBarang - jumlahItemDrum} | <span> </span>
                                    <button onClick={() => tambahKeKeranjang(namaAlatMusik)}>
                                        + Keranjang
                                    </button>
                                </li>
                            )
                        }

                        if (namaAlatMusik.namaBarang === "keyboard") {
                            return (
                                <li>
                                    {namaAlatMusik.namaBarang} | <span> </span>
                                    {namaAlatMusik.hargaBarang} | <span> </span>
                                    Stok tersedia: {namaAlatMusik.stokBarang - jumlahItemPiano} | <span> </span>
                                    <button onClick={() => tambahKeKeranjang(namaAlatMusik)}>
                                        + Keranjang
                                    </button>
                                </li>
                            )
                        }

                        if (namaAlatMusik.namaBarang === "sexophone") {
                            return (
                                <li>
                                    {namaAlatMusik.namaBarang} | <span> </span>
                                    {namaAlatMusik.hargaBarang} | <span> </span>
                                    Stok tersedia: {namaAlatMusik.stokBarang - jumlahItemSexophone} | <span> </span>
                                    <button onClick={() => tambahKeKeranjang(namaAlatMusik)}>
                                        + Keranjang
                                    </button>
                                </li>
                            )
                        }
                    }
                )}

            </ul>
            <h4>Daftar Keranjang</h4>
            <ul>
                {isiKeranjang.map((daftarIsiKeranjang) =>
                    <li>
                        {daftarIsiKeranjang.namaBarang} | <span> </span>
                        {daftarIsiKeranjang.hargaBarang} | <span> </span>
                        <button onClick={() => hapusDariDaftarKeranjang(daftarIsiKeranjang)}>
                            Hapus Item
                        </button>
                    </li>
                )}
            </ul>
            <h4>Total Item</h4>
            <ul>
                <li>
                    Total Item Bass: {jumlahItemBass} | <span> </span>
                    Harga: Rp{jumlahItemBass * dataApi[1].hargaBarang}
                </li>
                <li>
                    Total Item Drum: {jumlahItemDrum} | <span> </span>
                    Harga: Rp{jumlahItemDrum * dataApi[3].hargaBarang}
                </li>
                <li>
                    Total Item Gitar: {jumlahItemGitar} | <span> </span>
                    Harga: Rp{jumlahItemGitar * dataApi[0].hargaBarang}
                </li>
                <li>
                    Total Item Keyboard: {jumlahItemPiano} | <span> </span>
                    Harga: Rp{jumlahItemPiano * dataApi[2].hargaBarang}
                </li>
                <li>
                    Total Item: Sexophone {jumlahItemSexophone} | <span> </span>
                    Harga: Rp{jumlahItemSexophone * dataApi[4].hargaBarang}
                </li>
            </ul>

        </>
    )
}

export default LifeCycleFunction