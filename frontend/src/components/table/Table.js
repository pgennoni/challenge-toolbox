import { Table } from "react-bootstrap";
import getFileList from "../../Api/FilesApi";
import { useEffect, useState } from "react";
import Row from "./row/Row";
import './Table.css'

const DataTable = () => {
    const [files, setFiles] = useState([])
    useEffect(() => {
        getFilesData().then((files) => {
            setFiles(files)
        })
    }, [])
    return (
        <Table stripped bordered>
            <thead>
                <tr>
                    <th scope="col">Filename</th>
                    <th scope="col">Text</th>
                    <th scope="col">Number</th>
                    <th scope="col">Hex</th>
                </tr>
            </thead>
            <tbody>
                {
                files.map((file, i) => <Row row={file} isOdd={!isOdd(i)} />)
                }
            </tbody>
        </Table>
    )
}

const isOdd = (i) => i%2

const getFilesData = async () =>{
    const {data} = await getFileList()
    const auxArray = []    
    data.forEach(file => {
        auxArray.push(file.lines.map(element => {
            return {
                file: file.file,
                text: element.text,
                hex: element.hex,
                number: element.number
            }
        }))
    })

    return auxArray.flat(1)
}


export default DataTable