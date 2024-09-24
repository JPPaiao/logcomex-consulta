const input = document.getElementById('search')
const url = 'https://api.logcomex.com.br/v2/get_conteiner_tracking?api_key=2a7959e9189097e782738190d910abad&conteiner='
// const url = 'https://comex.io/v1/conteiner/tracking?api_key=2a7959e9189097e782738190d910abad&conteiner='
const tabelaDados = document.getElementById('datas')
const tableHeader = document.getElementById('table-head')
const tableBody = document.getElementById('tbody')
const divDatas = document.getElementById('datas')
let datasJson 

// PCIU9294631

async function buscarDados() {
    let buscar = await fetch(url + input.value, { method: 'GET' })
    datasJson = await buscar.json()
    let datas
    
    if (datasJson["status"] == "ok") {
        datas = Object.keys(datasJson.data[0]).map((value, i) => { 
            return { data: value, title: value.toLocaleUpperCase(), targets: i }
        })
    }
    
    divDatas.style = 'display: block'
    $('#table-container').DataTable({
        data: datasJson.data,
        columns: datas
    })
}
