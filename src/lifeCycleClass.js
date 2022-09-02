import React from "react";

//Misal kita memiliki data API seperti berikut ini:
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

/*Data diatas dapat ditampilkan dalam WEB dengan
melakukan inisialsisasi state pada constructor
cycle
*/

class LifeCycleClass extends React.Component {
    constructor() {
        super();
        //Lakukan inisialisasi state
        this.state = {
            jumlahItemGitar: 0,
            jumlahItemBass: 0,
            jumlahItemPiano: 0,
            jumlahItemDrum: 0,
            jumlahItemSexophone: 0,
            totalHarga: 0,
            dataAlat: [],
            isiKeranjang: []
        }
    }

    componentDidMount() {
        this.setState({dataAlat: dataApi})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isiKeranjang.length !== this.state.isiKeranjang.length) {
            let hargaTotal = 0;
            let itemGitar = 0;
            let itemBass = 0;
            let itemPiano = 0;
            let itemDrum = 0;
            let itemSexophone = 0;
            for (let daftarIsiKeranjang of this.state.isiKeranjang) {
                hargaTotal = hargaTotal + daftarIsiKeranjang.hargaBarang
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
            this.setState({totalHarga: hargaTotal})
            this.setState({jumlahItemGitar: itemGitar})
            this.setState({jumlahItemBass: itemBass})
            this.setState({jumlahItemPiano: itemPiano})
            this.setState({jumlahItemDrum: itemDrum})
            this.setState({jumlahItemSexophone: itemSexophone})
        }

    }

    tambahKeKeranjang(alatMusikYangDipilih) {
        const isiKeranjangSekarang = [...this.state.isiKeranjang];
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
        this.setState({isiKeranjang: isiKeranjangSekarang});
        console.log(isiKeranjangSekarang);
    }

    hapusDariDaftarKeranjang(alatMusikYangDipilih) {
        const isiKeranjangSekarang = [...this.state.isiKeranjang];
        isiKeranjangSekarang.splice(isiKeranjangSekarang.indexOf(alatMusikYangDipilih), 1);
        this.setState({isiKeranjang: isiKeranjangSekarang});
        console.log(isiKeranjangSekarang);
    }

    render() {
        return (
            <div>
                <p>Total Harga {this.state.totalHarga}</p>
                <h1>Daftar Barang</h1>
                <ul>
                    {this.state.dataAlat.map((namaAlatMusik) => (
                            <li>
                                {namaAlatMusik.namaBarang} | <span> </span>
                                {namaAlatMusik.hargaBarang} | <span> </span>
                                <button
                                    onClick={() => this.tambahKeKeranjang(namaAlatMusik)}>
                                    Tambah Ke Keranjang
                                </button>
                            </li>
                        )
                    )
                    }
                </ul>
                <h1>Daftar Barang dalam Keranjang</h1>
                <ul>
                    {
                        this.state.isiKeranjang.map((daftarIsiKeranjang) =>
                            (

                                <li>
                                    {daftarIsiKeranjang.namaBarang} | <span> </span>
                                    {daftarIsiKeranjang.hargaBarang} | <span> </span>
                                    <button onClick={() => this.hapusDariDaftarKeranjang(daftarIsiKeranjang)}>
                                        Hapus
                                    </button>
                                </li>
                            )
                        )
                    }
                </ul>
                <h1>Total Item</h1>
                <ul>
                    <li>
                        Total Item Bass {this.state.jumlahItemBass} | <span> </span>
                        Harga {this.state.jumlahItemBass * dataApi[1].hargaBarang}
                    </li>
                    <li>
                        Total Item Drum {this.state.jumlahItemDrum} | <span> </span>
                        Harga {this.state.jumlahItemDrum * dataApi[3].hargaBarang}
                    </li>
                    <li>
                        Total Item Gitar {this.state.jumlahItemGitar} | <span> </span>
                        Harga {this.state.jumlahItemGitar * dataApi[0].hargaBarang}
                    </li>
                    <li>
                        Total Item Keyboard {this.state.jumlahItemPiano} | <span> </span>
                        Harga {this.state.jumlahItemPiano * dataApi[2].hargaBarang}
                    </li>
                    <li>
                        Total Item Sexophone {this.state.jumlahItemSexophone} | <span> </span>
                        Harga {this.state.jumlahItemSexophone * dataApi[4].hargaBarang}
                    </li>
                </ul>
            </div>
        )
    }
}

export default LifeCycleClass