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

function LifeCycleFunction(){
    return(
        <>
            <p>Total Harga</p>
            <h4>Daftar Produk</h4>
            <h4>Daftar Keranjang</h4>
        </>
    )
}

export default LifeCycleFunction