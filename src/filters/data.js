import fillzero from "./fillzero"
export default (time)=>{
    let d=new Date(time)
    let year=d.getFullYear()
    let month=d.getMonth()
    let data=d.getDate()
    let hour=d.getHours()
    let min=d.getMinutes()
    let sec=d.getSeconds()
    return `${year}年${fillzero(month)}月${fillzero(data)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
}