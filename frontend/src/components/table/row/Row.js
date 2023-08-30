const Row = ({row, isOdd}) => {
    return (
        <>
            <tr className={isOdd === true?'table-secondary':''}>
                <td>{row.file}</td>
                <td>{row.text}</td>
                <td>{row.number}</td>
                <td>{row.hex}</td>
            </tr>
        </>
    )
}

export default Row